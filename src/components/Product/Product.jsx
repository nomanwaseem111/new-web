import React from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FacebookIcon from '@mui/icons-material/Facebook';
import img5 from '../../assets/accessories/acc5.webp'
import { Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate } from "react-router-dom"


const Product = () => {
  
  const navigate = useNavigate()

  
  return (
    <>
      <Stack marginTop={{md:"80px",xs:"80px"}}  >
        <Stack direction={{md:"row",xs:"column"}}  sx={{width:{md:"80%",xs:"90%"}, height:{md:"700px",xs:"auto"}, margin:{md:"auto",xs:"auto"}}}>
           <Stack className="left" sx={{width:{md:"50%"},height:{md:"700px"}}}>
            <Box component="img" src={img5} alt="img" sx={{width:{md:"750px",xs:"320px"},height:{md:"700px"}}} />
           </Stack> 
           <Stack className='right'  sx={{pt:{md:"50px",xs:"30px"},width:{md:"50%"},height:{md:"700px"}}}>
            <Typography variant='h4' sx={{fontSize:{md:"25px",xs:"16px"}, fontFamily:{md:"Roboto",xs:"Roboto"},fontWeight:{md:"bold",xs:"bold"}}}>boAt Rockerz 550 | Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50mm Dynamic Driver, 500 mah Battery</Typography>
            <Typography variant='h5' sx={{fontSize:{md:"40px",xs:"30px"},fontFamily:{md:"Roboto",xs:"Roboto"}, mt:{md:"20px",xs:"10px"}}}>Rs 5000</Typography>
            <Typography variant="p" sx={{fontSize:{md:"20px",xs:"12px"},lineHeight:{xs:"20px",md:"30px"} ,mt:{md:"20px",xs:"10px"},fontFamily:{md:"Roboto",xs:"Roboto"}}}> Lorem ipsum, consectetur adipisicing elit. Rem eos expedita quas dolores odit omnis fugit quaerat tempore quibusdam nobis. Nulla molestias magnam dicta qui unde inventore, similique officia ducimus.LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eos expedita quas dolores odit omnis fugit quaerat tempore quibusdam nobis. Nulla molestias magnam dicta qui unde inventore, similique officia ducimus.Lorem</Typography>
            <Stack direction={{md:"row",xs:"row"}}>
             <Stack direction={{md:"row",xs:"row"}} mt={{md:"50px",xs:"50px"}} >
             <Typography  sx={{border:{md:"1px solid black",xs:"1px solid black"},pt:{md:"5px",xs:"5px"},fontSize:{md:"25px"}, textAlign:{md:"center",xs:"center"}, width:{md:"60px",xs:"30px"},height:{md:"60px",xs:"40px"}}}>-</Typography>
             <Typography  sx={{border:{md:"1px solid black",xs:"1px solid black"},pt:{md:"5px",xs:"5px"}, fontSize:{md:"25px"},textAlign:{md:"center",xs:"center"},width:{md:"80px",xs:"50px"},height:{md:"60px",xs:"40px"}}}>5</Typography>
             <Typography sx={{border:{md:"1px solid black",xs:"1px solid black"},pt:{md:"5px",xs:"5px"}, fontSize:{md:"25px"},textAlign:{md:"center",xs:"center"},width:{md:"60px",xs:"30px"},height:{md:"60px",xs:"40px"}}}>+</Typography>
             </Stack>
             <Button  onClick={() => navigate("/cartsection")} sx={{marginLeft:{md:"30px",xs:"20px"} 
             ,width:{md:"180px",xs:"150"},
             backgroundColor:{md:"#6610f2",xs:"#6610f2"},
             color:{md:"#fff",xs:"#fff"},
             mt:{md:"50px",xs:"50px"},
             fontFamily:{md:"Roboto",xs:"Roboto"},
             fontSize:{md:"16px",xs:"10px"},
             height:{md:"60px",xs:"40px"},
             "&:hover": {
                backgroundColor: "#6610f2",

                color: "#fff",
                border:"none"
              },
              
             }}><ShoppingCartIcon sx={{fontSize:{md:"30px",xs:"20px"},mr:{md:"5px",xs:"5px"}}}   /> Add to Cart</Button>
                 
            </Stack>
            <Typography variant="h6" sx={{fontSize:{xs:"14px",md:"20px"},mt:{md:'30px',xs:"20px"},mb:{md:"30px",xs:"20px"}}}>Category: Headphones</Typography>
            <stack  >
             <Typography variant="span" sx={{fontSize:{md:"22px",xs:"16px"}}}>Share:</Typography>
             <FacebookIcon sx={{marginLeft:{md:"20px",xs:"20px"},fontSize:{xs:"16px",md:"20px"}}}/>
             <InstagramIcon sx={{marginLeft:{md:"10px",xs:"10px"},fontSize:{xs:"16px",md:"20px"}}}/>
            <TwitterIcon sx={{marginLeft:{md:"10px",xs:"10px"},fontSize:{xs:"16px",md:"20px"}}}/>
            <LinkedInIcon sx={{marginLeft:{md:"10px",xs:"10px"},fontSize:{xs:"16px",md:"20px"}}}/>
            </stack>
          
           </Stack>
        </Stack>

      </Stack>
      
    </>
  )
}
export default Product

