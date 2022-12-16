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
import BestSeller from './components/BestSeller/BestSeller';
import SaleItem from './components/SaleItem/SaleItem'
import BottomBtn from './components/BottomBtn/BottomBtn';
import Product from './components/Product/Product';
import Deals from './components/Deals';
import NewArrival from './components/NewArrival/NewArrival'
import CartSection from './components/CartSection/cartsection';
import CheckOut from './components/CheckOut/CheckOut';

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

        <Route path="/deals" element={<Deals />} /> 

        <Route path="/bestseller" element={<BestSeller />} />

        <Route path="/saleitem" element={<SaleItem />} />

        <Route path="/newarrival" element={<NewArrival />} />
   

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/forgot" element={<Forgot />} />

        <Route path="/product" element={<Product />} />

        <Route path="/cartsection" element={<CartSection />} />

        <Route path="/checkout" element={<CheckOut />} />


        </Routes>
        {/* <Forgot/> */}
        <BottomBtn/>
      
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App