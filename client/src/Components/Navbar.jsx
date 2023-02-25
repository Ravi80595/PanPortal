import { Flex,Text,Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()

const handleLogout=()=>{
  localStorage.setItem('isAuth',JSON.stringify(null))
  navigate("/user/auth")
}

return (
    <Flex p={3} zIndex="9999" bg='#50509b' color='white' w='100%' justifyContent='space-around' position='fixed'>
      <Link to="/">
      <Image cursor='pointer' src="https://www.pancardapplyonline.com/img/pancardao_logo.svg" w='55px' />
      </Link>
      <Flex pt={3}  fontSize="20px" w="80%" justifyContent='space-around'>
        <Link to="/applynewcard">
        <Text>New Card Form</Text>
        </Link>
        <Link to="/correction">
        <Text>Correction Form</Text>
        </Link>
        <Link to="/cardstatus">
        <Text>My Card</Text>
        </Link>
        <Text cursor='pointer' onClick={handleLogout}>Logout</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
