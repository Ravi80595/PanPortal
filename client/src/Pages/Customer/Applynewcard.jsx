import React, { useState } from 'react'
import { Box,Flex,Input,Text,Button,Tabs,Tab,TabList,TabPanel,TabPanels,Select,Image} from '@chakra-ui/react'
import Navbar from '../../Components/Navbar'
import Dropzone from 'react-dropzone'
import {CiEdit} from "react-icons/ci"
import axios from 'axios'
import { baseUrl } from '../../Components/BaseUrl'


const Applynewcard = () => {
  const initObj={
    firstName:'',
    middleName:'',
    lastName:'',
    address:'',
    pAddress:'',
    email:'',
    fatherName:'',
    MotherName:'',
    mobile:'',
    age:'',
    panNo:''
}
const [image,setImage]=useState('')
const [values,setValues]=useState(initObj)
const cardKey=JSON.parse(localStorage.getItem('isAuth'))



// ***************************  Change Events *********************************

const handleChange = (e) => {
  setValues({...values,[e.target.name]:e.target.value})
}

// ***************************  Pan No. Generator *********************************

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 7; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  result += characters.charAt(randomIndex);
}

// ***************************  Card details post function *********************************

const handleProfile=()=>{
  const payload={
      firstName:values.firstName,
      lastName:values.lastName,
      middleName:values.gender,
      email:values.email,
      address:values.house+", "+values.street+", "+ values.area+", "+ values.pin+", "+ values.state+", "+ values.nationality,
      pAddress:values.pHhouse+", "+values.pStreet+", "+ values.pArea+", "+ values.pPin+", "+ values.pState+", "+ values.pNationality,
      fatherName:values.fatherName,
      MotherName:values.MotherName,
      mobile:values.mobile,
      age:values.age, 
      panNo:result,
  }
if(payload.firstName==""||payload.lastName==""||payload.email=="" ||payload.address==""){
  alert("Please fill All Madentory fields")
}else{
  axios.post(`http://localhost:8888/user/addProfile`,payload)
  .then((res)=>{
    console.log(res)
    alert('Details added')
  })
  .catch((err)=>{
    console.log(err)
    alert('Something went wrong')
})
}
}

// ***************************  upload documents function *********************************

const uploadDocument=()=>{
  const formData=new FormData()
  formData.append("files",image);
  
axios.post(`${baseUrl}/user/addDocument?userEmail=${cardKey.email}`,formData,{
  headers:{
    "Content-Type":"multipart/form-data"
  }
})
.then((res)=>{
  console.log(res)
  alert("Documents Uploaded")
})
.catch((err)=>{
  console.log(err)
  alert('Something went wrong')
})
}




return (
    <Box bg='grey'>
      <Navbar/>
      <Tabs pt={20}>
        <TabPanels>
          <TabPanel>
      <Box>
        <Flex justifyContent='space-around' gap={[0,0,0,10]} w={["100%","100%","100%","90%"]} m='auto'>
          <Box p={5}>
            <Input id='firstName' name='firstName' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter your first name"/>
            <Input id='fatherName' name='fatherName' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter your father name"/>
            <Input id='motherName' name='MotherName' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter your mother name"/>
          </Box>
          <Box p={5}>
            <Input id='lastName' name='lastName' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter your last name"/>
            <Input id='phoneNumber' name='mobile' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter phone number"/>
            <Input id='emailId' name='email' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter email id"/>
          </Box>
          <Box p={5}>
            <Input id='male/female' name='gender' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter male or female"/>
            <Input id='phoneNumber2' borderRadius={0} bg='white' m={3} placeholder="Enter altername number"/>
            <Input id='age' name='age' onChange={handleChange} borderRadius={0} bg='white' m={3} placeholder="Enter your age"/>
          </Box>
        </Flex>
        <Flex direction={['column','column','column','row']} gap={5} w="97%" m='auto'>
          <Box w={['95%','95%','95%','45%']} bg='#e4e4e4' p={5}>
            <Text pb={5}>Address Information</Text>
            <Flex  w="70%" m='auto' mb={3}>
              <Text w='30%'>House No : </Text>
              <Input id='houseNo' name='house' onChange={handleChange} bg='white' />
            </Flex>
            <Flex w="70%" m='auto' mb={3}>
              <Text w='30%'>Street name : </Text>
              <Input id='streetName' name='street' onChange={handleChange} bg='white' />
            </Flex>
            <Flex justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>Area name : </Text>
              <Input id='areaName' name='area' onChange={handleChange} w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='25%'>Pin code : </Text>
              <Input id='pincode' name='pin' onChange={handleChange} w='45%' bg='white' />
              </Flex>
            </Flex>
            <Flex pt={5} justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>State : </Text>
              <Input id='state' name='state' onChange={handleChange} w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='30%'>Nationality : </Text>
              <Input id='nationality' name='nationality' onChange={handleChange} w='45%' bg='white' />
              </Flex>
            </Flex>
          </Box>
          <Box w={['95%','95%','95%','45%']} bg='#e4e4e4' p={5}>
            <Text pb={5}>Permanent Address Information</Text>
            <Flex  w="70%" m='auto' mb={3}>
              <Text w='30%'>House No : </Text>
              <Input id='peHouseNo' name='pHouse' onChange={handleChange} bg='white' />
            </Flex>
            <Flex w="70%" m='auto' mb={3}>
              <Text w='30%'>Street name : </Text>
              <Input id='peStreetName' name='pStreet' onChange={handleChange} bg='white' />
            </Flex>
            <Flex justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>Area name : </Text>
              <Input id='peAreaName' name='pArea' onChange={handleChange} w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='25%'>Pin code : </Text>
              <Input id='pePincode' name='pPin' onChange={handleChange} w='45%' bg='white' />
              </Flex>
            </Flex>
            <Flex pt={5} justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>State : </Text>
              <Input id='peState' name='pState' onChange={handleChange} w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='30%'>Nationality : </Text>
              <Input id='peNationality' name='pNationality' onChange={handleChange} w='45%' bg='white' />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      </TabPanel>
      <TabPanel>
      <Box>
        <Flex direction={['column','column','column','row']} w='85%' m='auto'>
          <Box p={10} fontSize="27px">
            <Box mt={5}>
            <Text>Upload documents (Madatory Id Proof)</Text>
            <Select bg='white'>
              <option value="">Please pick a type</option>
              <option value="">Adhar card</option>
              <option value="">Secondry certificate</option>
            </Select>
            </Box>
            <Box mt={10}>
            <Text>Images or Documents (Upload below 2mb)</Text>
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <Flex>
               <Box {...getRootProps()} bg='white' border={`2px dashed black`} p="1rem" width="100%" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <Flex>
                      <p>{image.name}</p>
                      <CiEdit/>
                    </Flex>
                  )}
                </Box>
              </Flex>
            )}
          </Dropzone>
            </Box>
            <Button onClick={uploadDocument} fontSize="20px" p={7} mt={10} _hover={{color:'black'}} bg='#3131a5' color='white'>Upload Documents</Button>
          </Box>
          <Box pl='20%'>
            <Image w={200} src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/29250/clipboard-with-paper-clipart-md.png" />
            <Button onClick={handleProfile} fontSize="20px" p={7} mt={10} _hover={{color:'black'}} bg='#3131a5' color='white'>Submit</Button>
          </Box>
        </Flex>
      </Box>
      </TabPanel>
      </TabPanels>
        <TabList>
          <Flex p={3} justifyContent='center' w="90%" m='auto'>
            <Flex gap={5}>
              <Tab>
              <Button borderRadius={0} w={150}>1</Button></Tab>
              <Tab>
              <Button borderRadius={0} w={150}>2</Button>
              {/* <Button ml={20}>Next Page</Button> */}
              </Tab>
            </Flex>
          </Flex>
          </TabList>
      </Tabs>
    </Box>
  )
}

export default Applynewcard
