import { Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar'

const Correctiondocuments = () => {
  return (
    <Box>
      <AdminNavbar/>
      <Flex boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' justifyContent='space-around' w='85%' p={5} m='auto' mt={10}>
        <Box lineHeight={10}>
          <Text>Applicant Name : Ravi Sharma</Text>
          <Text>Applicant Address : VPO Kapro Hisar, Haryana India</Text>
          <Text>Applicant Email : rsharma80595@gmail.com</Text>
        </Box>
        <Box lineHeight={10}>
          <Text>Applicant Phone no. : 9306454204</Text>
          <Text>Applicant gender : Male</Text>
          {/* <Text>Applicant Email</Text> */}
        </Box>
        <Box lineHeight={10}>
          <Text>Applicant Id : 2548658822</Text>
          <Text>Applicant Age : 20yrs</Text>
          {/* <Text>Applicant Email</Text> */}
          <Text cursor='pointer' color='red'> <u> View documents </u></Text>
        </Box>
       </Flex>
    </Box>
  )
}

export default Correctiondocuments
