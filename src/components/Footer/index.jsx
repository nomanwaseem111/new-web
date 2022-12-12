import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"


const Footer = () => {
  return (
   
     
      <Stack direction="row" mt="150px" justifyContent="space-around"   backgroundColor="#f6f6f8" alignItems="center" flexWrap="wrap" sx={{height:"500px",px:"3%"}}>
        <Stack>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
            alt=""
            width="150px"
          />
          <Typography sx={{fontSize:"20px", mt:"20px", letterSpacing:"1px"}}>© 2022 Flone.<br/> All Rights Reserved</Typography>
        </Stack>
        <Stack spacing={2} sx={{padding:"10px" ,height:"300px"}}>
            <Typography component="h2" sx={{fontSize:"20px", fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif", textTransform:"uppercase", color:"#313131"}}>About Us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>About us</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Store location</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Contact</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Orders tracking</Typography>

        </Stack>

        <Stack spacing={2} sx={{padding:"10px",height:"300px"}}>
            <Typography component="h2" sx={{fontSize:"20px", fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif" , textTransform:"uppercase", color:"#313131"}}>USEFUL LINKS</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Returns</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Support Policy</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Size guide</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>FAQs</Typography>

        </Stack>


        <Stack spacing={2} sx={{padding:"10px",height:"300px"}}>
            <Typography component="h2" sx={{fontSize:"20px",fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif", textTransform:"uppercase", color:"#313131"}}>FOLLOW US</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Facebook</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Twitter</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Instagram</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Youtube</Typography>

        </Stack>


        <Stack spacing={2} sx={{padding:"10px", width:"400px",height:"300px"}}>
            <Typography component="h2" sx={{fontSize:"20px", fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif" , textTransform:"uppercase", color:"#313131"}}>SUBSCRIBE</Typography>
            <Typography component="p" sx={{fontSize:"20px", fontWeight:"400", color:"#5d5d5d", }}>Get E-mail updates about our latest shop and special offers</Typography>
            <TextField id="standard-basic" label="Enter Your Email Address" variant="standard"  />
            <Button sx={{ width: "150px", mt: "40px", backgroundColor:"#6610f2", ml: "50px", padding: "10px", color: "#fff", fontSize: "18px", "&:hover": { background: "#f0f2f5", border: "1px solid #6610f2", color: "#6610f2"} }}>SUBSCRIBE</Button>

        </Stack>
       
      
       
      </Stack>
      
  )
}

export default Footer
