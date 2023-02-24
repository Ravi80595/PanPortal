import { Box, Flex,Heading,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar'

const CardStatus = () => {


return (
    <Box>
      <Navbar/>
      <Box color='white' bg='#50509b' border='2px solid blue' w='50%' m='auto' mt={20}>
        <Flex>
        <Box p={10}>
          <Image w={200} src="https://avatars.githubusercontent.com/u/63177572?v=4"/>
          <Text pt={5}>Pan No.</Text>
        </Box>
        <Box w='60%' p={5} fontSize="25px">
          <Heading>Ravi Sharma</Heading>
          <Text>Father Name</Text>
          <Text>Mother Name</Text>
          <Text>Gender</Text>
          <Text>Phone No.</Text>
          {/* <Text>Pan No.</Text> */}
          <Text>Address</Text>
        </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default CardStatus
