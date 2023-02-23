import { Box,Button,Input,Text } from '@chakra-ui/react'
import React from 'react'

const Auth = () => {

return (
  <Box textAlign='center' w='40%' m='auto' mt={10}>
  <Button mb={2} w='100%' bg='#720000' color='white'>Login</Button>
  <Box   boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
      <Input p={5} m={3} placeholder='Enter email'/>
      <Input p={5} m={3} placeholder='Confirm Password'/>
      <Button mt={5} borderRadius={0} bg='blue' color='white'>Login</Button>
  <Text pt={5} textAlign='center'>New User? <span> Sign up</span> </Text>
  </Box>
  </Box>
  )
}

export default Auth
