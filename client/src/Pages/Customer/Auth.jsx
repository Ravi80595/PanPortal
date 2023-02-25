import { Box,Button,Input,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {

return (
  <Box textAlign='center' w='40%' m='auto' mt={10}>
  <Button mb={2} w='100%' bg='#720000' color='white'>Login</Button>
  <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
      <Input id='email' p={5} m={3} placeholder='Enter email'/>
      <Input id='password' p={5} m={3} placeholder='Confirm Password'/>
      <Button id='loginButton' mt={5} borderRadius={0} bg='blue' color='white'>Login</Button>
      <Flex w="40%" m='auto'>
      <Text pt={5} textAlign='center'>New user ? </Text>
      <Link to="/user/signup"><Text pt={5} pl={2} color='blue'> Sign up </Text></Link>
      </Flex>  
  </Box>
  </Box>
  )
}

export default Auth
