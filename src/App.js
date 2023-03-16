import './App.css';
import { ChakraBaseProvider,  theme } from '@chakra-ui/react';
import Register from './Components/Register';
import Resetpassword from './Resetpassword/Resetpassword';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Loggerin from './Login/Loggerin';
import Home from './Pages/Home';
function App() {
  
  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>

      <Routes>

        <Route />
        <Route path="/Register"  element={<Register/>} /> 
        <Route path="/Resetpassword" element={<Resetpassword/>}  />
        <Route path="/Home" element={ <Home/>}/>
        <Route path="/login" element={ <Loggerin/>}/>

      </Routes>


      </BrowserRouter>
    </ChakraBaseProvider>
  );
}

export default App;
