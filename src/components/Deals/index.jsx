import { Typography } from "@mui/material"
import { Stack , Box} from "@mui/system"
import React from "react"
import Rating from '@mui/material/Rating';
// import Banner from "../Banner";
// import Offer from '../Offer';
import productImg1 from '../../assets/productsImg/product1.webp'
import productImg2 from '../../assets/productsImg/product2.webp'
import productImg3 from '../../assets/productsImg/product3.webp'
import productImg4 from '../../assets/productsImg/product4.webp'
import productImg5 from '../../assets/productsImg/product5.webp'
import {

    useNavigate
} from "react-router-dom";
const Deals = () => {
 
    const navigate = useNavigate()

    return (
    <>
  
      <Stack>
     
      {/* <Stack direction={{ md:"row",xs:"row"}} justifyContent="space-around" alignItems="center"  sx={{width:{md:"30%",xs:"70%"}}} margin="auto" mt="50px" >
        <Typography onClick={() => navigate("/newarrival")}  sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"},                  fontFamily:{md:"Roboto",xs:"Roboto"}
 ,"&:hover": {color: "#6610f2"} }} >New Arrivals</Typography>
        <Typography onClick={() => navigate("/bestseller")}  sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"},"&:hover": {color: "#6610f2"} }}> Best Sellers</Typography>
        <Typography onClick={() => navigate("/saleItem")} sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"},"&:hover": {color: "#6610f2"} }}>Sale Items</Typography>

      </Stack> */}
      {/* <Stack direction={{md:"row",xs:"column"}}  height="auto" sx={{width:{md:"80%", xs:"80%"},mt:{md:"80px",xs:"50px"},mb:{md:"100px",xs:"100px"}}} px="20px" justifyContent="space-between" flexWrap="wrap"  margin="auto" >
        
        
      <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/8f2eacdf32fc06c9ab3a53f68fbd942e.jpg" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi 50W Power Bank 20000</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,599 </Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/MESHSYSTEMAX3000_1-PACK_230x.png?v=1663845500" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}}  fontFamily={{md:"Roboto",xs:"Roboto"}} >MESH SYSTEM AX3000 (1-PACK)</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} fontFamily={{md:"Roboto",xs:"Roboto"}}  >Rs.14,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Untitled-2-01_300x.png?v=1666785044" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi LCD Writing Tablet 13.5''</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,999</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi_WiFi_Repeater_Pro_300_M_grande_a518c179-4c1d-4771-9eff-ee52e2df2dab_300x.png?v=1616613983" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI WIFI REPEATER PRO</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,699</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/01_88beaa63-aea4-4d53-a6f0-0530c2851fc2_300x.png?v=1656930527" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >XIAOMI SMART BAND 7</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.9,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}   height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/xiaomi-mi-ac2350-wifi-router_grande_7d26bb56-d53a-45e9-90d3-80d0f52a56e0_300x.jpg?v=1616613733" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI ROUTER 4C</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,199</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/corona_grande_c46531b3-8420-4e0c-a35e-7a6b943bef1e_300x.png?v=1616613812" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Dual Mode Wireless Mouse</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.2,950</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/mielectricscooter1s_300x.png?v=1661505816" 
                sx={{width:{md:"320px" ,xs:"250px"}}} 
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Electric Scooter</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.134,999</Typography> 


            </Box>
        </Box>
       

        
       
       

       
      </Stack> */}
      <Stack>
           
         
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
                 
                 <Box component="img" src={productImg1} 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi 50W Power Bank 20000</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,599 </Typography> 
     
     
                 </Box>
             </Box>
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src={productImg2} 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MESH SYSTEM AX3000 (1-PACK)</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.14,999</Typography> 
     
     
                 </Box>
             </Box>
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_300x.png?v=1647426797" 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi LCD Writing Tablet 13.5''</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,999</Typography> 
     
     
                 </Box>
             </Box>
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_300x.png?v=1658150489" 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI WIFI REPEATER PRO</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,699</Typography> 
     
     
                 </Box>
             </Box>
     
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a78da6b8-689c-40f3-9c50-bcb4998c5f2a_300x.png?v=1625045618" 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >XIAOMI SMART BAND 7</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.9,199</Typography> 
     
     
                 </Box>
             </Box>
     
     
             <Box  width={{md:"auto",xs:"250px"}}   height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src={productImg5} 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >MI ROUTER 4C</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.3,199</Typography> 
     
     
                 </Box>
             </Box>
     
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src={productImg4} 
                     sx={{width:{md:"320px" ,xs:"250px"},transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}} 
                 />
                 <Box>
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Mi Dual Mode Wireless Mouse</Typography> 
                    <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>
     
     
                    <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >Rs.2,950</Typography> 
     
     
                 </Box>
             </Box>
     
     
             <Box  width={{md:"auto",xs:"250px"}}  height={{md:"520px",xs:"420px"}} textAlign={{md:"center",xs:"center"}} mb={{md:"80px",xs:"50px"}}>
                 
                 <Box component="img" src={productImg3} 
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
      </Stack>
    </>
  )
}

export default Deals