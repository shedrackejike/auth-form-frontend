import React,{useState} from 'react'
import {Box, Text, FormControl,FormLabel,Input, Flex,} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import axios from "axios"
function Register() {
const [state,setState] = useState({
  name: '',
  password: '',
  email: ''
})

const handleSubmit = async(event) => {
  event.preventDefault()
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/user/register",
      withCredentials: false,
      data: state,
    });
    // window.location.reload()
  } catch(error) {
    console.log(error)
  }
}

const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  });
  console.log(state);
}





  return (

<Box bgColor={'yellow.100'} w='100%' h={'100vh'}>

    <Box w={'27%'} margin='auto' bgColor={'white'}  h={'70%'}  bg={'white'}  mt='6' boxShadow='inner'  rounded='md' >

            <Text textAlign={'center'} textColor='white' fontSize={'2xl'} bgColor={'blue'} h='12'>Register</Text>
                
       <Box  w='75%' margin={'auto'} mt='9' boxShadow='inner'  rounded='md' bg={'red'}  >

      <form onSubmit={handleSubmit}>
        <Flex border={"1px solid"}>Username<input name='name'value={state.name} onChange={handleChange}/></Flex>
        <Flex border={"1px solid"}>Email<input name='email' value={state.email} onChange={handleChange}/></Flex>
        <Flex border={"1px solid"}>Password<input name='password' value={state.password} onChange={handleChange}/></Flex>
        <button type='submit'> Save me</button>
      </form>

        <Box bgColor='blue' h='8' w='30%'  justifyContent='center' display={'flex'} textColor='white'
            alignItems='center' margin={'auto'} mt='7' cursor={'pointer'}> register</Box>

        <p >Already registered? click <Link to= "/login" >here to login</Link></p>

       </Box>


     </Box>



 </Box>
    
  )
}

export default Register