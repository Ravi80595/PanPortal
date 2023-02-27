import React, { useState } from 'react'
import {Box,Flex,Input,Button,Text} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Components/BaseUrl'

const Signup = () => {
  const initObj={
    user:'',
    email:'',
    username:'',
    mobileNumber:'',
    password:'',
    confirmPassword:''
}
 const [values,setValues]=useState(initObj)
 const navigate=useNavigate()


// ***************************  Change Events *********************************

 const handleChange = (e) => {
  setValues({...values,[e.target.name]:e.target.value})
}


// *************************** Form Handle Submit  *********************************

const handleSubmit=()=>{
  const payload={
    userRole:'user',
    email:values.email,
    userName:values.username,
    mobileNumber:values.mobileNumber,
    password:values.password,
  }
  console.log(payload)
if(payload.email==""|| payload.userName==""|| payload.password==""||payload.mobileNumber=="" || payload.confirmPassword==""){
  alert("Please fill All Madentory fields")
}else if(payload.password!==values.confirmPassword){
  alert("Password not matching")
}else{
  axios.post(`${baseUrl}/user/signup`,payload)
  .then((res)=>{
    console.log(res)
    alert("Signup Success")
    navigate("/user/auth")
  })
  .catch((err)=>{
    console.log(err)
    alert('Something went wrong')
})
}
}



return (
  <Box textAlign='center' w='40%' m='auto' mt={10}>
    <Button mb={2} w='100%' bg='#720000' color='white'>Register</Button>
    <Box  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
        <Input type='email' id='email' name='email' onChange={handleChange} p={5} m={3} placeholder='Enter email'/>
        <Input id='username' name='username' onChange={handleChange} p={5} m={3} placeholder='Enter username'/>
        <Input id='mobileNumber' name='mobileNumber' onChange={handleChange} p={5} m={3} placeholder='Enter mobile number'/>
        <Input type='password' id='password' name='password' onChange={handleChange} p={5} m={3} placeholder='Password'/>
        <Input type='password' id='confirmPassword' name='confirmPassword' onChange={handleChange} p={5} m={3} placeholder='Confirm Password'/>
        <Button id='submitButton' _hover={{color:'black'}} onClick={handleSubmit} borderRadius={0} bg='blue' color='white'>Submit</Button>
        <Flex w="40%" m='auto'>
        <Text pt={5} textAlign='center'>Already a User? </Text>
        <Link to="/user/auth"><Text pt={5} pl={2} color='blue'> Login </Text></Link>
        </Flex>
    </Box>
    </Box>
  )
}

export default Signup
