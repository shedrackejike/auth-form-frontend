import React,{useState} from 'react'
import {  FormControl,FormLabel,Input, Button,Box,Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from "axios"
const Loggerin = () => {
    const navigate = useNavigate()
  
    const [state,setState] = useState({
      password: '',
      email: ''
    })
    
    const handleSubmit = async(event) => {
      event.preventDefault()
      try {
        console.log(state);
        const response = await axios({
          method: "post",
          url: "http://localhost:8080/api/user/login",
          withCredentials: false,
          data: state,
        })
        if (response.status) {
          navigate("/Home")
        }
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

            <Text textAlign={'center'} textColor='white' fontSize={'2xl'} bgColor={'blue'} h='12'>Login</Text>
                
       <Box  w='75%' margin={'auto'} mt='9' boxShadow='inner'  rounded='md' bg={'white'}  >

       
        <form onSubmit={handleSubmit}> 

        <FormControl >
        <FormLabel> EMAil address</FormLabel>
        <Input type={'text'} name='email' placeholder='enter email' value={state.email} onChange={handleChange} />
        </FormControl>


        <FormControl >
        <FormLabel> password </FormLabel>
        <Input type={'text'} name='password' placeholder='enter password' value={state.password} onChange={handleChange} />
        </FormControl>



        <Button  size="lg" bgColor='blue' h='8' w='30%'  justifyContent='center' display={'flex'} textColor='white'
            alignItems='center' margin={'auto'} mt='7' cursor={'pointer'} type='submit'>Login</Button>
            
            </form>
            <Link to={"/register"}>register </Link>

         <Link to= "/forgot" >forgot password</Link>

       </Box>


     </Box>



 </Box>
  )
}

export default Loggerin