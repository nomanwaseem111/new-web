import React from 'react'
import Banner from '../Banner'
import Offer from '../Offer'
import { Typography } from "@mui/material"
import { Stack , Box} from "@mui/system"
import Rating from '@mui/material/Rating';
import {

    useNavigate
} from "react-router-dom";
const BestSeller = () => {
  
    const navigate = useNavigate()

  
    return (
        <>
         <Banner />
     <Offer />
        <div>
        
           
      <Stack  sx={{ textAlign:{md:"center",xs:"center"} ,mt:{md:"100px",xs:"50px"} }}>
        <Typography component="h1" 
          sx={{fontSize:{md:"40px",xs:"20px"},
             fontWeight:{md:"bold",xs:"bold"}}}
        >DAILY DEALS!</Typography>
      </Stack>
      <Stack direction={{ md:"row",xs:"row"}} justifyContent="space-around" alignItems="center"  sx={{width:{md:"30%",xs:"70%"}}} margin="auto" mt="50px" >
        <Typography onClick={() => navigate("/newarrival")} sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }} >New Arrivals</Typography>
        <Typography onClick={() => navigate("/bestseller")} sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}> Best Sellers</Typography>
        <Typography onClick={() => navigate("/saleitem")} sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}>Sale Items</Typography>

      </Stack>
      <Stack direction={{md:"row",xs:"column"}}  height="auto" sx={{width:{md:"80%", xs:"80%"},mt:{md:"80px",xs:"50px"},mb:{md:"100px",xs:"100px"}}} px="20px" justifyContent="space-between" flexWrap="wrap"  margin="auto" >
        
        
      <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi_20W_car_charger_grande_c84ae6fb-1422-4ae4-bd12-60e174292f14_grande.png?v=1616613708" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi 50W Power Bank 20000</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,599 </Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi5-BladeElectricShaver_300x.jpg?v=1660737485" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MESH SYSTEM AX3000 (1-PACK)</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.14,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/XiaomiHairClipper_300x.jpg?v=1668417426" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi LCD Writing Tablet 13.5''</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi-Electric-Scooter-Pro-2-Mercedes-AMG-Petronas-F1-Team-Edition---03_300x.png?v=1617790461" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI WIFI REPEATER PRO</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,699</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/product-images-backpack_grande_40c9c4cb-18b0-402e-97e4-98834ce8f4d6_300x.png?v=1616613795" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >XIAOMI SMART BAND 7</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.9,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}   height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/xiaomicasualdaypackskyblue_300x.png?v=1663072628" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI ROUTER 4C</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Piston_Basic_Hand_free_Black_grande_664dc185-81d4-46fd-a7f9-a17094c655c8_300x.png?v=1616614005" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Dual Mode Wireless Mouse</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.2,950</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Redmi-Airdots-2_grande_625891d2-d893-4cd5-863d-7f9b7b672200_300x.png?v=1616613950" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Electric Scooter</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.134,999</Typography> 


            </Box>
        </Box>
       

        
       
       

       
      </Stack>

      {/* <Stack direction="row" justifyContent="space-around" flexWrap="wrap" width="80%" margin="auto" mt="70px">
        <Box sx={{textAlign:"center", }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/29.jpg" alt="" width="340px" 
            />
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>
               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 
            </Box>
        </Box>
        <Box sx={{textAlign:"center", ml:"30px"}}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/5.jpg" alt="" width="340px" />
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>
               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 
            </Box>
        </Box>
        <Box sx={{textAlign:"center", ml:"30px"}}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/30.jpg" alt="" width="340px" />
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>
               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 
            </Box>
        </Box>
        <Box sx={{textAlign:"center", ml:"30px"}}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg" alt="" width="340px" />
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>
               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 
            </Box>
        </Box>
       
      </Stack> */}
      
   
        </div>
        </>
    )
}

export default BestSeller