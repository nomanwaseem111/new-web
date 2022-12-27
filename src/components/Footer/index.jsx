import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import paymentImg from '../../assets/payment/payments.png'
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {
  return (

    <>

      <Stack direction={{ md: "row", xs: "column" }} mt="150px" justifyContent="space-around" backgroundColor="#f6f6f8" alignItems={{ md: "center", xs: "start" }} flexWrap="wrap" height={{ md: "450px", xs: "auto" }} sx={{ px: { md: "5%", xs: "20px" }, py: { xs: "30px" } }}>
        <Stack sx={{ width: "300px" }} mt={{xs:"50px",md:"0px"}}>
          <Typography variant="h6" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "24px", xs: "20px" }, mb: { md: "30px", xs: "20px" } }}>About</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "16px", xs: "16px" } }}>Lorem ipsum  maxime, odio, eum cum numquam voluptas voluptatibus eligendi, dolorem nulla quae quos necessitatibus? Commodi, blanditiis? </Typography>
        </Stack>

        <Stack sx={{ width: "300px" }} mt={{xs:"50px",md:"0px"}} >
          <Typography variant="h6" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "24px", xs: "20px" }, mb: { md: "30px", xs: "30px" } }}>Contact</Typography>
          <Stack direction={{md:"row",xs:"row"}}>
          <NearMeIcon sx={{marginRight:{md:"10px",xs:"10px"}}}/>
          <Typography variant="p"  sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "14px" }, mb: { md: "30px", xs: "30px" } }}> Plot 3 4 5 New TPX Area, Mai Kolachi Bypass</Typography>
          </Stack>
          <Stack direction={{md:"row",xs:"row"}}>
          <PhoneAndroidIcon sx={{marginRight:{md:"10px",xs:"10px"}}}/>
          <Typography variant="p"  sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "14px" }, mb: { md: "30px", xs: "30px" } }}>0312-2833671</Typography>
          </Stack>
          <Stack direction={{md:"row",xs:"row"}}>
          <EmailIcon sx={{marginRight:{md:"10px",xs:"10px"}}}/>
          <Typography variant="p"  sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "14px" }, mb: { md: "30px", xs: "30px" } }}> nomanwaseem111@gmail.com</Typography>
          </Stack>

        </Stack>


        <Stack sx={{ width: "300px" }} mt={{xs:"50px",md:"0px"}}>
          <Typography variant="h6" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "24px", xs: "20px" }, mb: { md: "20px", xs: "20px" } }}>Category</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Headphone</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Smart Watches</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Bluetooth Speakers</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Wireless Earbuds</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Home Theatre</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Projectors</Typography>

        </Stack>


        <Stack sx={{ width: "300px" }} mt={{xs:"50px",md:"0px"}}>
          <Typography variant="h6" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "24px", xs: "20px" }, mb: { md: "20px", xs: "20px" } }}>Pages</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Home</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>About</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Privacy Policy</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Returns</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Terms & Condition</Typography>
          <Typography variant="p" sx={{ fontFamily: { md: "Roboto", xs: "Roboto" }, fontSize: { md: "18px", xs: "16px" }, mb: { md: "20px", xs: "20px" } }}>Contact Us</Typography>

        </Stack>







      </Stack>
      <Stack direction={{ md: "row", xs: "row" }} justifyContent={{ md: "space-between", xs: "space-between" }} pt={{ md: "15px", xs: "10px" }} sx={{ width: { md: "100%", xs: "100%" }, px: { md: "15%", xs: "4%" }, backgroundColor: { md: "#fff", xs: "#fff" }, height: { md: "70px", xs: "60px" } }}>
        <Typography variant="p" sx={{ fontSize: { md: "18px", xs: "8px" }, fontFamily: { md: "Roboto", xs: "Roboto" }, pt: { md: "10px", xs: "5px" } }}>Ecommerce Website 2022 created by Noman </Typography>
        <Box component="img" sx={{ width: { md: "330px", xs: "150px" }, height: { md: "40px", xs: "20px" } }} src={paymentImg} alt="" />
      </Stack>
    </>
  )
}

export default Footer