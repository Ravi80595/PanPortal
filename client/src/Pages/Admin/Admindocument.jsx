import { Box,Text,Flex,Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../Components/AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admindocument = () => {
  const [data,setData]=useState([])
  const navigate=useNavigate()

useEffect(()=>{
  getProfiles()
},[])

const getProfiles=()=>{
  axios.get(`http://localhost:8888/admin/getAllProfile`)
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
}


const SingleUser=(id)=>{
  navigate(`/admin/user/${id}`)
}

return (
    <Box>
      <AdminNavbar/>
      {
        data && data.map(ele=>(
          <Flex direction={['column','column','column','row']} boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' justifyContent='space-around' w='85%' p={5} m='auto' mt={10}>
        <Box lineHeight={10}>
          <Text>Applicant Name : {ele.firstName} {ele.lastName}</Text>
          <Text>Applicant Address : {ele.address}</Text>
          <Text>Applicant Email :{ele.email}</Text>
        </Box>
        <Box lineHeight={10}>
          <Text>Applicant Phone no. : {ele.mobile}</Text>
          <Text>Applicant gender : {ele.middleName}</Text>
          {/* <Text>Applicant Email</Text> */}
        </Box>
        <Box lineHeight={10}>
          <Text>Applicant Id : {ele.panNo}</Text>
          <Text>Applicant Age : {ele.age}yrs</Text>
          {/* <Text>Applicant Email</Text> */}
          <Text  onClick={()=>SingleUser(ele.email)} cursor='pointer' color='red'> <u> View documents </u></Text>
        </Box>
       </Flex>
        ))
      }
    </Box>
  )
}

export default Admindocument
