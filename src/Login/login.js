import { Box, Link,Text } from '@chakra-ui/react'
import React from 'react'
import {  FormControl,FormLabel,Input,} from "@chakra-ui/react";


function login() {
  return (
    <Box bgColor={'yellow.100'} w='100%' h={'100vh'}>

    <Box w={'27%'} margin='auto' bgColor={'white'}  h={'70%'}  bg={'white'}  mt='6' boxShadow='inner'  rounded='md' >

            <Text textAlign={'center'} textColor='white' fontSize={'2xl'} bgColor={'blue'} h='12'>Login</Text>
                
       <Box  w='75%' margin={'auto'} mt='9' boxShadow='inner'  rounded='md' bg={'white'}  >

       


        <FormControl >
        <FormLabel> EMAil address</FormLabel>
        <Input placeholder='Enter email' />
        </FormControl>

        <FormControl >
        <FormLabel> password </FormLabel>
        <Input placeholder='Enter password' />
        </FormControl>

        <Box bgColor='blue' h='8' w='30%'  justifyContent='center' display={'flex'} textColor='white'
            alignItems='center' margin={'auto'} mt='7' cursor={'pointer'}> Login</Box>

         <Link to= "/forgot" >forgot password</Link>

       </Box>


     </Box>



 </Box>
  )
}

export default login