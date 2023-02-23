import { Flex,Text,Box,Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {


return (
    <Flex p={3} bg='#50509b' color='white' justifyContent='space-around'>
      <Image cursor='pointer' src="https://www.pancardapplyonline.com/img/pancardao_logo.svg" w='55px' />
      <Flex pt={3}  fontSize="20px" w="80%" justifyContent='space-around'>
        <Text>New Card Form</Text>
        <Text>Correction Form</Text>
        <Text>Track Status</Text>
        <Text>Logout</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
