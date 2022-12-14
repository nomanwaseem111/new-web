import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import './components/index.css'
import Container from '@mui/material/Container';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Accessories from './components/Accessories'
import Mobile from './components/Mobile'
import Contact from './components/Contact'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Forgot from './components/ForgotPassword/forgot';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     
     <Router>
      <div>
      
        <Navbar/>
        
        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/accessories" element={<Accessories />} />

        <Route path="/mobile" element={<Mobile />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/forgot" element={<Forgot />} />




        </Routes>
        {/* <Forgot/> */}
      
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App