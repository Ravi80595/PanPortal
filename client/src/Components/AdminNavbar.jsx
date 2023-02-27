import React from 'react'
import { Flex,Text,Box,Image } from '@chakra-ui/react'
import { Link,useNavigate} from 'react-router-dom'

const AdminNavbar = () => {
  const navigate=useNavigate()

const handleLogout=()=>{
  localStorage.setItem('isAdminAuth',JSON.stringify(null))
  navigate("/admin/login")
}


return (
    <Flex p={3} bg='#50509b' color='white' justifyContent='space-around'>
      <Link to="/applieddocuments">
      <Image display={["none","none","none","block"]} cursor='pointer' src="https://www.pancardapplyonline.com/img/pancardao_logo.svg" w='55px'/>
      </Link>
      <Flex pt={3} fontSize={["10px","10px","10px","20px"]} w={["100%","100%","100%","80%"]} justifyContent='space-around'>
        <Link to="/applieddocuments">
        <Text>Applied documents</Text>
        </Link>
        <Link to="/correctiondocuments">
        <Text>Correction documents</Text>
        </Link>
        <Text cursor='pointer' onClick={handleLogout}>Logout</Text>
      </Flex>
    </Flex>
  )
}

export default AdminNavbar
