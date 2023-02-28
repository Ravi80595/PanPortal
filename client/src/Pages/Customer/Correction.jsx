import { Box,Flex,Text,Input,Button,Textarea,Select, Container, Stack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import axios from 'axios'
import { baseUrl } from '../../Components/BaseUrl'


const Correction = () => {
  const cardKey=JSON.parse(localStorage.getItem('isAuth'))
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
  const [values,setValues]=useState(initObj)
  const [profileId,setProfileId]=useState()

// ***************************  Change Events *********************************

const handleChange = (e) => {
  setValues({...values,[e.target.name]:e.target.value})
}

useEffect(()=>{
  getCard()
},[])

const getCard=()=>{
  axios.get(`${baseUrl}/user/getProfile?email=${cardKey.email}`)
  .then((res)=>{
    console.log(res.data.profileId)
    setProfileId(res.data.profileId)
  })
}

const handleSubmit=()=>{
  const payload={
    firstName:values.firstName,
    lastName:values.lastName,
    middleName:values.gender,
    email:cardKey.email,
    address:values.address,
    fatherName:values.fatherName,
    motherName:values.MotherName,
    mobile:values.mobile,
    age:values.age,
}
if(payload.firstName==""||payload.lastName==""||payload.email=="" ||payload.address==""){
  alert("Please fill All Madentory fields")
}else{
  axios.put(`http://localhost:8888/user/editProfile/${cardKey.email}`,payload)
  .then((res)=>{
    console.log(res)
    alert('Pan Updated')
  })
  .catch((err)=>{
    console.log(err)
    alert('Something went wrong')
})
}
}


return (
    <Box>
      <Navbar/>
      <Box pt="100px">
      <Stack boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} w={['95%','95%','95%','45%']} m='auto'>
        <Flex gap={5}>
          <Box>
             <label>Enter First-Name</label>
             <Input name='firstName' onChange={handleChange}/>
          </Box>
          <Box>
            <label>Enter Last-Name</label>
            <Input name='lastName' onChange={handleChange}/>
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box>
             <label>Enter Age</label>
             <Input name='age' onChange={handleChange}/>
          </Box>
          <Box>
            <label>Enter Gender</label>
            <Input name='gender' onChange={handleChange}/>
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box>
             <label>Enter Father-Name</label>
             <Input name='fatherName' onChange={handleChange}/>
          </Box>
          <Box>
            <label>Enter Mother-Name</label>
            <Input name='MotherName' onChange={handleChange}/>
          </Box>
        </Flex>
        <label>Enter  Phone</label>
        <Input  name='mobile' onChange={handleChange}/>
        {/* <label>Enter  Email</label>
        <Input name='email' onChange={handleChange}/> */}
        <label>Enter Full Address</label>
        <Textarea name='address' onChange={handleChange}></Textarea>
        <Button onClick={handleSubmit} mt={10}>Update Details</Button>
      </Stack>
      </Box>
</Box>
  )
}

export default Correction
