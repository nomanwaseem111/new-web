import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"


const Footer = () => {
  return (
   
     
      <Stack direction={{md:"row",xs:"column"}} mt="" justifyContent="space-around"   backgroundColor="#212121" alignItems={{md:"center",xs:"start"}} flexWrap="wrap" height={{md:"500px" ,xs:"auto"}} sx={{px:{md:"3%",xs:"10px"}, py:{xs:"60px"}}}>
        <Stack width={{xs:"150px",md:"200px"}} ml={{xs:"15px"}}>
          <Box component="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCej5q4d_H39ym9s2Ums7jjR8OWzXRSvILg&usqp=CAU"
             width={{md:"150px",xs:"100px",backgroundColor:"#fff"}}
          />
          <Typography sx={{ fontSize:{md:"20px",xs:"16px"}, mt:{md:"20px",xs:"20px"},color:{md:"#fff",xs:"#fff"}}}>© 2022 Flone.<br/> All Rights Reserved</Typography>
        </Stack>
        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif", textTransform:"uppercase", color:"#fff"}}>About Us</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{ fontWeight:"400", color:"#fff", }}>About us</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Store location</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Contact</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Orders tracking</Typography>

        </Stack>

        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif" , textTransform:"uppercase", color:"#fff"}}>USEFUL LINKS</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Returns</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Support Policy</Typography>
            <Typography component="p"  fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Size guide</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}}  sx={{fontWeight:"400", color:"#fff", }}>FAQs</Typography>

        </Stack>


        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"220px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}}  sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif", textTransform:"uppercase", color:"#fff"}}>FOLLOW US</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Facebook</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Twitter</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Instagram</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#fff", }}>Youtube</Typography>

        </Stack>


         {/* <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"250px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif" , textTransform:"uppercase", color:"#313131"}}>SUBSCRIBE</Typography>
            <Typography component="p" fontSize={{md:"20px",xs:"16px"}} sx={{fontWeight:"400", color:"#5d5d5d", }}>Get E-mail updates about our latest shop and special offers</Typography>
            <TextField id="standard-basic" label="Enter Your Email Address" variant="standard"  />
            <Button sx={{width:{md:"150px",xs:"100px"}, border:{md:"1px solid black",xs:"1px solid black"},mt:{md:"40px",xs:"40px"}, ml:{md:"50px",xs:"30px"},padding:{md:"10px",xs:"10px"}, backgroundColor:{md:"#6610f2",xs:"#6610f2"}, color:{md:"#fff",xs:"#fff"}, fontSize:{md:"18px",xs:"14px"} }} >SUBSCRIBE</Button>

        </Stack> */}


        <Stack spacing={2} ml={{xs:"15px"}}  mt={{xs:"30px"}} sx={{padding:{md:"10px",xs:"0px"}, height:{md:"300px",xs:"250px"} }}>
            <Typography component="h2" fontSize={{md:"20px",xs:"18px"}} sx={{fontWeight:"480" ,lineHeight:"45px",fontFamily:"Poppins,sans-serif" , textTransform:"uppercase", color:"#fff"}}>PAYMENT METHODS</Typography>
             <Box  width="220px" display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap">
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/cropped_alfalah.png?v=1624273005" alt="" sx={{width:"60px",backgroundColor:"white"}}/>
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/keenu_trim_6692a3d0-163f-4d7e-9cc9-876d1a4d28b5.png?v=1624271133" alt="" sx={{width:"60px",backgroundColor:"white"}}/>
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/appropriate_hbl.png?v=1624272264" alt="" sx={{width:"50px",backgroundColor:"white"}}/>
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/qisstpayLogoHd.png?v=1632134797" alt="" sx={{width:"60px",backgroundColor:"white"}}/>
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/cod_trim_b50d2bf7-346f-445f-9c56-b94467717f91.png?v=1624271356" alt="" sx={{width:"60px",backgroundColor:"white"}}/>
               <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/jazz.jpg?v=1658308468" alt="" sx={{width:"80px",backgroundColor:"white"}}/>

             </Box>
        </Stack>
       
      
       
      </Stack>
      
  )
}

export default Footer
