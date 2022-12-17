import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"


const Footer = () => {
  return (
   
     
      <Stack direction={{md:"row",xs:"column"}} mt="150px" justifyContent="space-around"   backgroundColor="#f6f6f8" alignItems={{md:"center",xs:"start"}} flexWrap="wrap" height={{md:"500px" ,xs:"auto"}} sx={{px:{md:"3%",xs:"10px"}, py:{xs:"60px"}}}>
        <Stack width={{xs:"150px",md:"200px"}} ml={{xs:"15px"}}>
          <Box component="img" src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
             width={{md:"150px",xs:"100px"}}
          />
          <Typography sx={{ fontSize:{md:"20px",xs:"16px"}, mt:{md:"20px",xs:"20px"},  
                            fontFamily:{md:"Roboto",xs:"Roboto"}

          
          }}>© 2022 Flone.<br/> All Rights Reserved</Typography>
        </Stack>
        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:{md:"Roboto",xs:"Roboto"}
, textTransform:"uppercase", color:"#313131"}}>About Us</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{ fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>About us</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Store location</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Contact</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Orders tracking</Typography>

        </Stack>

        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:{md:"Roboto",xs:"Roboto"} , textTransform:"uppercase", color:"#313131"}}>USEFUL LINKS</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Returns</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Support Policy</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Size guide</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}}  sx={{fontWeight:"400", color:"#5d5d5d", fontFamily:{md:"Roboto",xs:"Roboto"}}}>FAQs</Typography>

        </Stack>


        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}}  sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:{md:"Roboto",xs:"Roboto"}, textTransform:"uppercase", color:"#313131"}}>FOLLOW US</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d", fontFamily:{md:"Roboto",xs:"Roboto"}}}>Facebook</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Twitter</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d", fontFamily:{md:"Roboto",xs:"Roboto"}}}>Instagram</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d",fontFamily:{md:"Roboto",xs:"Roboto"} }}>Youtube</Typography>

        </Stack>


        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"250px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:{md:"Roboto",xs:"Roboto"} , textTransform:"uppercase", color:"#313131"}}>SUBSCRIBE</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d", fontFamily:{md:"Roboto",xs:"Roboto"}}}>Get E-mail updates about our latest shop and special offers</Typography>
            <TextField id="standard-basic" label="Enter Your Email Address" variant="standard"  />
            <Button sx={{width:{md:"150px",xs:"100px"},fontFamily:{md:"Roboto",xs:"Roboto"},mt:{md:"40px",xs:"40px"}, ml:{md:"50px",xs:"30px"},padding:{md:"10px",xs:"10px"}, backgroundColor:{md:"#6610f2",xs:"#6610f2"}, color:{md:"#fff",xs:"#fff"}, fontSize:{md:"18px",xs:"14px"},"&:hover": {color: "#6610f2",border:"1px solid #6610f2"} }} >SUBSCRIBE</Button>

        </Stack>
       
      
       
      </Stack>
      
  )
}

export default Footer