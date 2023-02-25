import { Box, Flex,Heading,Image,Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import axios from 'axios'
import { baseUrl } from '../../Components/BaseUrl'


const CardStatus = () => {
  const [data,setData]=useState([])
console.log(data)

useEffect(()=>{
 getCard()
},[])


const getCard=()=>{
  axios.get(`${baseUrl}/user/getProfile?email=${'kunal@gmail.com'}`)
  .then((res)=>{
    console.log(res)
    setData([res.data])
  })
}


return (
    <Box>
      <Navbar/>
      <Text pt='145px' textAlign='center' pb={5}>Front Side</Text>
      {
        data && data.map(ele=>(
          <>
      <Box borderRadius={20} backgroundImage={'https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1024,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg'} w='45%' m='auto'  pb={3}>
        <Flex fontSize="22px" pt={5} justifyContent='space-around'>
          <Box>
        <Text >INCOME TEX DEPARTMENT</Text>
        </Box>
        <Image w="40px" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Emblem_of_India_%28navy_blue%29.svg"/>
        <Text>GOVT. OF INDIA</Text>
        </Flex>
        <Flex justifyContent='space-around'>
        <Box>
          <Image ml={5} mr={5} w={150} src="https://avatars.githubusercontent.com/u/63177572?v=4"/>
          <Text textAlign='center' pt={2}>नाम/Name</Text>
          <Text textAlign='center'>{ele.firstName}  {ele.lastName}</Text>
          <Text pt={3} textAlign='center'>जन्म की तारीख/Date of birth</Text>
          <Text textAlign='center'>20/25/2000</Text>
        </Box>
        <Flex direction='column' justifyContent='space-between' pt={5} fontSize="20px">
          <Box>
          <Text>Permanent Account Number</Text>
          <Text textAlign='center'>AABKSIDDKSL</Text>
          </Box>
          <Box>
          <Text textAlign='center' fontSize='15px'>पिता का नाम/Father's Name</Text>
          <Text textAlign='center' fontSize='15px'>Jaibhagwan</Text>
          </Box>
        </Flex>
        <Box>
          <Image w={150} src="https://www.pngall.com/wp-content/uploads/2/QR-Code-Transparent.png"/>
          <Text pt={10} textAlign='center' fontFamily="cursive">{ele.firstName}</Text>
          <Text>हस्ताक्षर/Signature</Text>
        </Box>
        </Flex>
      </Box>

      <Text mt={40} textAlign='center' pb={5}>Back Side</Text>
      <Box borderRadius={20} backgroundImage={'https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_1024,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg'} w='45%' m='auto' pb={3}mb={200}>
        <Flex pt={10} justifyContent='space-around'>
          <Box w="60%" fontSize='15px'>
          <Box pb={5}>
        <Text >यदि यह कार्ड खो गया है/किसी का खोया हुआ कार्ड मिल गया है तो कृपया सूचित करें/वापसी करें</Text>
          <Text pt={2}>इनकम टैक्स पैन सर्विसेज यूनिट, एनएसडीएल 5वीं मंजिल, मंत्री स्टर्लिंग, प्लॉट नंबर, 341, सर्वे नंबर, 997/8, मॉडल कॉलोनी, दीप बंगला चौक के पास, पुणे - 411016</Text>
          </Box>
        <Text >If this card is lost/someone's lost card is found, please inform / return to</Text>
          <Text pt={2}>Income Tax PAN Services Unit,NSDL 5th Floor, Mantri Sterling, PLOT no, 341, Survey no, 997/8, Model Colony, Near Deep Bungalow Chowk, Pune - 411016</Text>
          <Text>TEl : 91202721 8080 Fax: 912027218081</Text>
          </Box>
          <Box>
            <Image w={150} src='https://www.novavisioninc.com/images/holograms/hrs02-17-color.jpg'/>
          </Box>
        </Flex>
      </Box>
      </>
      ))
    }
    </Box>
  )
}

export default CardStatus
