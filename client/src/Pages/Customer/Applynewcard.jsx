import React from 'react'
import { Box,Flex,Input } from '@chakra-ui/react'
import Navbar from '../../Components/Navbar'

const Applynewcard = () => {


return (
    <Box bg='grey'>
      <Navbar/>
      <Box >
        <Flex justifyContent='space-around' gap={10} w="90%" m='auto'>
          <Box p={5}>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter your first name"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter your father name"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter your mother name"/>
          </Box>
          <Box p={5}>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter your last name"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter phone number"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter email id"/>
          </Box>
          <Box p={5}>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter male or female"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter altername number"/>
            <Input borderRadius={0} bg='white' m={3} placeholder="Enter your age"/>
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box w="50%" bg='#e4e4e4' p={5}>
            <Flex  w="70%" m='auto'>
              <label>House No : </label>
              <Input bg='white' />
            </Flex>
            <Flex w="70%" m='auto'>
              <label>Street name : </label>
              <Input bg='white' />
            </Flex>
            <Flex justifyContent='space-around'>
              <label>Area name</label>
              <Input bg='white' />
              <label>Pin code</label>
              <Input bg='white' />
            </Flex>
            <Flex justifyContent='space-around'>
              <label>State</label>
              <Input bg='white' />
              <label>Nationality</label>
              <Input bg='white' />
            </Flex>
          </Box>
          <Box w="50%" bg='greenyellow' p={5}>
            <Flex w="70%" m='auto'>
              <label>House No : </label>
              <Input />
            </Flex>
            <Flex w="70%" m='auto'>
              <label>Street name : </label>
              <Input />
            </Flex>
            <Flex justifyContent='space-around'>
              <label>Area name</label>
              <Input />
              <label>Pin code</label>
              <Input />
            </Flex>
            <Flex justifyContent='space-around'>
              <label>State</label>
              <Input />
              <label>Nationality</label>
              <Input />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Applynewcard
