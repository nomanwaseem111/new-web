import React from 'react'
import Banner from '../Banner'
import Offer from '../Offer'
import { Typography } from "@mui/material"
import { Stack , Box} from "@mui/system"
import Rating from '@mui/material/Rating';
import {

    useNavigate
} from "react-router-dom";
const SaleItem = () => {
    
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
        <Typography  onClick={() => navigate("/bestseller")} sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}> Best Sellers</Typography>
        <Typography onClick={() => navigate("/saleItem")}sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}>Sale Items</Typography>

      </Stack>
      <Stack direction={{md:"row",xs:"column"}}  height="auto" sx={{width:{md:"80%", xs:"80%"},mt:{md:"80px",xs:"50px"},mb:{md:"100px",xs:"100px"}}} px="20px" justifyContent="space-between" flexWrap="wrap"  margin="auto" >
        
        
      <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_58bd5e28-de95-4f31-909d-6bce484bdbd9_300x.png?v=1658294451" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi 50W Power Bank 20000</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,599 </Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MESH SYSTEM AX3000 (1-PACK)</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.14,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_300x.png?v=1650387008" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi LCD Writing Tablet 13.5''</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_d8db0011-02f7-43d6-9fe7-7a71a9ed86d2_300x.png?v=1654312290" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI WIFI REPEATER PRO</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,699</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2b98dda1-57d3-40ee-80f0-4687b8f8a72b_300x.png?v=1662537789" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >XIAOMI SMART BAND 7</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.9,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}   height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MAINPRIMIA_300x.png?v=1652536765" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI ROUTER 4C</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_300x.png?v=1648108782" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Dual Mode Wireless Mouse</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.2,950</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_300x.png?v=1625157753" 
                sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
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

export default SaleItem