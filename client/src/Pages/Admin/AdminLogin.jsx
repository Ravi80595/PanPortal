import { Box,Button,Input,Text,Flex,InputGroup,InputRightElement} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {
    const initObj={
        email:'',
        password:''
    }
    const [values,setValues]=useState(initObj)
    const [show,setShow]=useState(false)
    const navigate=useNavigate()
    const handleClick = () => setShow(!show)


// ***************************  Change Events *********************************

const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  }
  

// *************************** Form Handle Login  *********************************

const handleSubmit=()=>{
    const payload={
      email:values.email,
      password:values.password,
    }
    console.log(payload)
  if(payload.email==""|| payload.password==""){
    alert("Please fill All Madentory fields")
  }else{
    axios.post(`http://localhost:8888/admin/login`,payload)
    .then((res)=>{
      console.log(res)
      alert("Login Success")
      localStorage.setItem('isAdminAuth',JSON.stringify('true'))
      navigate("/applieddocuments")
    })
    .catch((err)=>{
      console.log(err)
      alert('Something went wrong')
      localStorage.setItem('isAdminAuth',JSON.stringify('true'))
  })
  }
  }

return (
    <Box textAlign='center' w='40%' m='auto' mt={10}>
    <Button mb={2} w='100%' bg='#720000' color='white' _hover={{color:'white'}}>Admin  Login</Button>
    <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
        <Input id='email' name='email' onChange={handleChange} p={5} mb={7} placeholder='Enter email'/>
        <InputGroup size="md">
        <Input pr="4.5rem" type={show ? "text" : "password"} name="password" onChange={handleChange} placeholder='Enter Password' p={5}/>
         <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
               {show ? "Hide" : "Show"}
               </Button>
              </InputRightElement>
             </InputGroup>
        <Button id='loginButton' _hover={{color:'black'}} onClick={handleSubmit} mt={5} borderRadius={0} bg='blue' color='white'>Login</Button>
        <Flex w="40%" m='auto'>
        <Text pt={5} textAlign='center'>New user ? </Text>
        <Link to="/admin/signup"><Text pt={5} pl={2} color='blue'> Sign up </Text></Link>
        </Flex>  
    </Box>
    </Box>
  )
}

export default AdminLogin
