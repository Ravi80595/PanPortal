import { Box,Flex,Text,Input,Button,Textarea,Select, Container, Stack} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'

const Correction = () => {




return (
    <Box>
      <Navbar/>
      <Box pt="100px">
      <Stack boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} w="50%" m='auto'>
        <Flex gap={5}>
          <Box>
             <label>Enter First-Name</label>
             <Input />
          </Box>
          <Box>
            <label>Enter Last-Name</label>
            <Input />
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box>
             <label>Enter Age</label>
             <Input />
          </Box>
          <Box>
            <label>Enter Gender</label>
            <Input />
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box>
             <label>Enter Father-Name</label>
             <Input />
          </Box>
          <Box>
            <label>Enter Mother-Name</label>
            <Input />
          </Box>
        </Flex>
        <label>Enter  Phone</label>
        <Input />
        <label>Enter  Email</label>
        <Input />
        <label>Enter Full Address</label>
        <Textarea></Textarea>
        <Button mt={10}>Update Details</Button>
      </Stack>
      </Box>
</Box>
  )
}

export default Correction
