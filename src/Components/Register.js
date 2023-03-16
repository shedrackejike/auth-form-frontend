import React,{useState} from 'react'
import {Box, Text, FormControl,FormLabel,Input,  Button} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
function Register() {
const [state,setState] = useState({
  name: '',
  password: '',
  email: ''
})
const route = useNavigate()

const handleSubmit = async(event) => {
  event.preventDefault()
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/user/register",
      withCredentials: false,
      data: state,
    })
    if (response.status) {
      route("/Login")
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

            <Text textAlign={'center'} textColor='white' fontSize={'2xl'} bgColor={'blue'} h='12'>Register</Text>
                
       <Box  w='75%' margin={'auto'} mt='9' boxShadow='inner'  rounded='md' bg={'white'}  >

      <form onSubmit={handleSubmit}>



      <FormControl >
        <FormLabel> Username</FormLabel>
        <Input type={'text'} name='name' placeholder='enter name'  value={state.name} onChange={handleChange} />
        </FormControl>

        



        <FormControl >
        <FormLabel> Email</FormLabel>
        <Input type={'text'} name='email' placeholder='enter email' value={state.email} onChange={handleChange} />
        </FormControl>





        <FormControl >
        <FormLabel> Password</FormLabel>
        <Input type={'text'} name='password' placeholder='enter password' value={state.password} onChange={handleChange} />
        </FormControl>           





        <Button  size="lg" bgColor='blue' h='8' w='30%'  justifyContent='center' display={'flex'} textColor='white'
            alignItems='center' margin={'auto'} mt='7' cursor={'pointer'} type='submit'>Register</Button>


     
            </form>

        <p >Already registered? click <Link to= "/login" >here to login</Link></p>

       </Box>


     </Box>



 </Box>
    
  )
}

export default Register