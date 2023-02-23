import { Flex,Text,Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


return (
    <Flex p={3} bg='#50509b' color='white' justifyContent='space-around'>
      <Link to="/">
      <Image cursor='pointer' src="https://www.pancardapplyonline.com/img/pancardao_logo.svg" w='55px' />
      </Link>
      <Flex pt={3}  fontSize="20px" w="80%" justifyContent='space-around'>
        <Link to="/applynewcard">
        <Text>New Card Form</Text>
        </Link>
        <Text>Correction Form</Text>
        <Link to="/cardstatus">
        <Text>Track Status</Text>
        </Link>
        <Text>Logout</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
