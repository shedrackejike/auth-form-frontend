import { Box,Image } from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <Box>




   <Image
    boxSize='100px'
    w={'100%'}
    h='5%'
    objectFit='contain'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />


  
    </Box>
  )
}

export default Home