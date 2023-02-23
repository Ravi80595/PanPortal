import React from 'react'
import {Box,Flex,Input,Button,Text} from '@chakra-ui/react'

const Signup = () => {


return (
  <Box w='40%' m='auto' mt={10}>
    <Button mb={2} w='100%' bg='#720000' color='white'>Register</Button>
    <Box  boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
        {/* <Flex> */}
        <Input p={5} m={3} placeholder='Enter admin/user'/>
        <Input p={5} m={3} placeholder='Enter email'/>
        <Input p={5} m={3} placeholder='Enter username'/>
        <Input p={5} m={3} placeholder='Enter mobile number'/>
        <Input p={5} m={3} placeholder='Password'/>
        <Input p={5} m={3} placeholder='Confirm Password'/>
        <Button borderRadius={0} bg='blue' color='white' ml={60}>Submit</Button>
    </Box>
    <Text pt={5} textAlign='center'>Already a User? <span>Login</span> </Text>
    </Box>
  )
}

export default Signup
