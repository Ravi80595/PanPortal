import React, { useState } from 'react'
import { Box,Flex,Input,Text,Button,Tabs,Tab,TabList,TabPanel,TabPanels,Select,Image} from '@chakra-ui/react'
import Navbar from '../../Components/Navbar'
import Dropzone from 'react-dropzone'
import {CiEdit} from "react-icons/ci"


const Applynewcard = () => {
const [image,setImage]=useState('')

return (
    <Box bg='grey'>
      <Navbar/>
      <Tabs>
        <TabPanels>
          <TabPanel>
      <Box>
        <Flex justifyContent='space-around' gap={10} w="90%" m='auto'>
          <Box p={5}>
            <Input id='firstName' borderRadius={0} bg='white' m={3} placeholder="Enter your first name"/>
            <Input id='fatherName' borderRadius={0} bg='white' m={3} placeholder="Enter your father name"/>
            <Input id='motherName' borderRadius={0} bg='white' m={3} placeholder="Enter your mother name"/>
          </Box>
          <Box p={5}>
            <Input id='lastName' borderRadius={0} bg='white' m={3} placeholder="Enter your last name"/>
            <Input id='phoneNumber' borderRadius={0} bg='white' m={3} placeholder="Enter phone number"/>
            <Input id='emailId' borderRadius={0} bg='white' m={3} placeholder="Enter email id"/>
          </Box>
          <Box p={5}>
            <Input id='male/female' borderRadius={0} bg='white' m={3} placeholder="Enter male or female"/>
            <Input id='phoneNumber2' borderRadius={0} bg='white' m={3} placeholder="Enter altername number"/>
            <Input id='age' borderRadius={0} bg='white' m={3} placeholder="Enter your age"/>
          </Box>
        </Flex>
        <Flex gap={5} w="97%" m='auto'>
          <Box w="50%" bg='#e4e4e4' p={5}>
            <Text pb={5}>Address Information</Text>
            <Flex  w="70%" m='auto' mb={3}>
              <Text w='30%'>House No : </Text>
              <Input id='houseNo' bg='white' />
            </Flex>
            <Flex w="70%" m='auto' mb={3}>
              <Text w='30%'>Street name : </Text>
              <Input id='streetName' bg='white' />
            </Flex>
            <Flex justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>Area name : </Text>
              <Input id='areaName' w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='25%'>Pin code : </Text>
              <Input id='pincode' w='45%' bg='white' />
              </Flex>
            </Flex>
            <Flex pt={5} justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>State : </Text>
              <Input id='state' w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='30%'>Nationality : </Text>
              <Input id='nationality' w='45%' bg='white' />
              </Flex>
            </Flex>
          </Box>
          <Box w="50%" bg='#e4e4e4' p={5}>
            <Text pb={5}>Permanent Address Information</Text>
            <Flex  w="70%" m='auto' mb={3}>
              <Text w='30%'>House No : </Text>
              <Input id='peHouseNo' bg='white' />
            </Flex>
            <Flex w="70%" m='auto' mb={3}>
              <Text w='30%'>Street name : </Text>
              <Input id='peStreetName' bg='white' />
            </Flex>
            <Flex justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>Area name : </Text>
              <Input id='peAreaName' w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='25%'>Pin code : </Text>
              <Input id='pePincode' w='45%' bg='white' />
              </Flex>
            </Flex>
            <Flex pt={5} justifyContent='space-evenly'>
              <Flex w='50%'>
              <Text w='30%'>State : </Text>
              <Input id='peState' w='45%' bg='white' />
              </Flex>
              <Flex w='50%'>
              <Text w='30%'>Nationality : </Text>
              <Input id='peNationality' w='45%' bg='white' />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      </TabPanel>
      <TabPanel>
      <Box>
        <Flex w='85%' m='auto'>
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
            <Button fontSize="20px" p={7} mt={10} _hover={{color:'black'}} bg='#3131a5' color='white'>Upload Documents</Button>
          </Box>
          <Box pl='20%'>
            <Image w={200} src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/29250/clipboard-with-paper-clipart-md.png" />
            <Button fontSize="20px" p={7} mt={10} _hover={{color:'black'}} bg='#3131a5' color='white'>Submit</Button>
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
