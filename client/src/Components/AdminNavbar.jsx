import React from 'react'
import { Flex,Text,Box,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {

return (
    <Flex p={3} bg='#50509b' color='white' justifyContent='space-around'>
      <Link to="/applieddocuments">
      <Image cursor='pointer' src="https://www.pancardapplyonline.com/img/pancardao_logo.svg" w='55px'/>
      </Link>
      <Flex pt={3}  fontSize="20px" w="80%" justifyContent='space-around'>
        <Link to="/applieddocuments">
        <Text>Applied documents</Text>
        </Link>
        <Link to="/correctiondocuments">
        <Text>Correction documents</Text>
        </Link>
        <Text>Logout</Text>
      </Flex>
    </Flex>
  )
}

export default AdminNavbar
