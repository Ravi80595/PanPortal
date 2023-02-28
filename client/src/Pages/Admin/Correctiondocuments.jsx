import { Box,Flex,Text,Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../Components/AdminNavbar'
import axios from 'axios'

const Correctiondocuments = () => {
  const [data,setData]=useState([])


useEffect(()=>{
  getCorrection()
},[])


  const getCorrection=()=>{
    axios.get(`http://localhost:8888/admin/getAllCorrectionDetails`)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }


const approved=(email)=>{
  console.log(email)
  axios.put(`http://localhost:8888/admin/approveCorrection/${email}`)
  .then((res)=>{
    console.log(res)
    alert("Approved")
    getCorrection()
  })
}

const rejected=(email)=>{
  console.log(email)
  axios.delete(`http://localhost:8888/admin/deleteCorrection/${email}`)
  .then((res)=>{
    console.log(res)
    alert("Rejected")
    getCorrection()
  })
}


return (
  <Box >
  <AdminNavbar/>
  <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' w='85%' m='auto' pb={5}>
 
  {
    data && data.map(ele=>(
      <>
      <Flex direction={['column','column','column','row']}  justifyContent='space-around'  p={5}  mt={10}>
    <Box lineHeight={10}>
      <Text>Applicant Name : {ele.firstName} {ele.lastName}</Text>
      <Text>Applicant Address : {ele.address}</Text>
      <Text>Applicant Email :{ele.email}</Text>
    </Box>
    <Box lineHeight={10}>
      <Text>Applicant Phone no. : {ele.mobile}</Text>
      <Text>Applicant gender : {ele.middleName}</Text>
      <Text>Applicant Father Name : {ele.fatherName}</Text>
    </Box>
    <Box lineHeight={10}>
      <Text>Applicant Id : {ele.panNo}</Text>
      <Text>Applicant Age : {ele.age}yrs</Text>
      <Text>Applicant Mother Name : {ele.motherName}</Text>
    </Box>
   </Flex>
  <Flex w='50%' m='auto' justifyContent='space-evenly' mb={5}>
    <Button onClick={()=>approved(ele.email)} bg='green' color='white' p={5} _hover={{color:'black'}}>Approve</Button>
    <Button onClick={()=>rejected(ele.email)} bg='red' color='white' p={5} _hover={{color:'black'}}>Reject</Button>
  </Flex>
 
  </>
    ))
  }
    </Box>
</Box>
  )
}

export default Correctiondocuments
