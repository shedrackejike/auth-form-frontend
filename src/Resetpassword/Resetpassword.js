import { Box ,Text} from '@chakra-ui/react'
import React from 'react'
import { FormControl,FormLabel,Input,} from "@chakra-ui/react";


function Resetpassword() {
  return (
    <Box bgColor={'yellow.100'} w='100%' h={'100vh'}>

    <Box w={'27%'} margin='auto' bgColor={'white'}  h={'70%'}  bg={'white'}  mt='6' boxShadow='inner'  rounded='md' >

            <Text textAlign={'center'} textColor='white' fontSize={'2xl'} bgColor={'blue'} h='12'>Resetpassword</Text>
                
       <Box  w='75%' margin={'auto'} mt='9' boxShadow='inner'  rounded='md' bg={'white'}  >

       <FormControl >
        <FormLabel> privous Password</FormLabel>
        <Input placeholder='Enter privous Password' />
        </FormControl>


        <FormControl >
        <FormLabel> new password</FormLabel>
        <Input placeholder='Enter new password' />
        </FormControl>

        <FormControl >
        <FormLabel>confirm password </FormLabel>
        <Input placeholder='confirm password' />
        </FormControl>

        <Box bgColor='blue' h='8' w='30%'  justifyContent='center' display={'flex'} textColor='white'
            alignItems='center' margin={'auto'} mt='7' cursor={'pointer'}> Submit</Box>


       </Box>


     </Box>



 </Box>
  )
}

export default Resetpassword
