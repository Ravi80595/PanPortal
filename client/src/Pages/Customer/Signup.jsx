import React from 'react'
import {Box,Flex,Input,Button,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {


return (
  <Box textAlign='center' w='40%' m='auto' mt={10}>
    <Button mb={2} w='100%' bg='#720000' color='white'>Register</Button>
    <Box  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
        {/* <Flex> */}
        <Input id='user' p={5} m={3} placeholder='Enter admin/user'/>
        <Input id='email' p={5} m={3} placeholder='Enter email'/>
        <Input id='username' p={5} m={3} placeholder='Enter username'/>
        <Input id='mobileNumber' p={5} m={3} placeholder='Enter mobile number'/>
        <Input id='password' p={5} m={3} placeholder='Password'/>
        <Input id='confirmPassword' p={5} m={3} placeholder='Confirm Password'/>
        <Button id='submitButton' borderRadius={0} bg='blue' color='white'>Submit</Button>
        <Flex w="40%" m='auto'>
        <Text pt={5} textAlign='center'>Already a User? </Text>
        <Link to="/user/auth"><Text pt={5} pl={2} color='blue'> Login </Text></Link>
        </Flex>
    </Box>
    </Box>
  )
}

export default Signup
