import { Box,Flex,Text,Button,Image} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../Components/BaseUrl'
import { Link } from 'react-router-dom'

const Documentverification = () => {
  const {id}=useParams()
  const [docId,setDocId]=useState(0)
  const [doc,setDoc]=useState('')
  const [profiles,setProfiles]=useState([])
  const navigate=useNavigate()

const person=profiles.find((p)=>p.email===`${id}`)
console.log(person)


useEffect(()=>{
  getAllDocuments()
  getAllProfiles()
},[])

const getAllDocuments=()=>{
  axios.get(`${baseUrl}/admin/getviewAll?mail=${id}`)
  .then((res)=>{
    console.log(res.data[0].documentId)
    setDocId(res.data[0].documentId)
    getDocument()
  })
}

const getAllProfiles=()=>{
  axios.get(`${baseUrl}/admin/getAllProfile`)
  .then((res)=>{
    // console.log(res.data)
    setProfiles(res.data)
  })
}


const getDocument=()=>{
  fetch(`${baseUrl}/getDocuments?docId=${docId}`, { responseType: "arraybuffer" })
  .then((response) => response.blob())
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    setDoc(url);
  });
}

const approveDoc=()=>{
axios.put(`${baseUrl}/admin/ApproveDocuments?docId=${docId}`)
.then((res)=>{
  console.log(res)
  alert('User Approved')
})
}

const rejectDoc=()=>{
  alert('Approval Rejected')
  navigate('/applieddocuments')
}

return (
    <Box p={10} w={'80%'} m='auto' mt={20} boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px'>
      <Link to="/applieddocuments">
     <Text pb={10}>Back To Dashboard</Text>
      </Link>
      <Flex direction={['column','column','column','row']} justifyContent='space-around'>
      <Box w={['95%','95%','95%','45%']}>
      {person && Object.keys(person).map((key) => (
        <Flex justifyContent='space-around' boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' >
            <Text textAlign='left' fontWeight='bold' lineHeight={10}>{key} </Text>
            <Text>{person[key]}</Text>
        </Flex>
      ))}
      </Box>
        <Box>
          {
            <Image src={doc}/>
          }
          </Box>
             </Flex>
      <Flex p={10} fontSize='30px' w='90%' m='auto' justifyContent='space-around'>
        <Button _hover={{color:'black'}} p={10} fontSize={['15px','15px','15px','30px']} bg='green' color='white' onClick={approveDoc}>Approve</Button>
        <Button onClick={rejectDoc} _hover={{color:'black'}} p={10} fontSize={['15px','15px','15px','30px']} bg='red' color='white'>Reject</Button>
      </Flex>

    </Box>
  )
}

export default Documentverification
