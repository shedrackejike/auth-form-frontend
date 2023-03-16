import { Box,Flex,Image ,Button} from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <Box>

<Image backgroundImage= {'./image/WhatsApp Image 2022-12-24 at 22.46.35.jpeg'}
  height ='100%'
  width = '100%'
  background-position = 'center'
  background-size = 'cover'/>



<Flex  justifyContent={'space-between'}>

<Button> logout</Button>


<Button>Resetpassword</Button>

  
</Flex>
 

  


  
    </Box>
  )
}



export default Home

