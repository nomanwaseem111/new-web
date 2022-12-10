import { Typography } from "@mui/material"
import { Stack , Box} from "@mui/system"
import React from "react"
import Rating from '@mui/material/Rating';

const Deals = () => {
  return (
    <>
      <Stack sx={{textAlign:"center"}}>
        <Typography component="h1" sx={{fontSize:"40px", fontWeight:"bold"}}>DAILY DEALS!</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-around" alignItems="center" width="30%" margin="auto" mt="50px" >
        <Typography sx={{fontSize:"25px" , color:"grey" , fontWeight:"500", cursor:"pointer", ":hover":{color:"black"}}}>New Arrivals</Typography>
        <Typography sx={{fontSize:"24px" , color:"grey", fontWeight:"500", cursor:"pointer", ":hover":{color:"black"}}}> Best Sellers</Typography>
        <Typography sx={{fontSize:"24px" , color:"grey", fontWeight:"500", cursor:"pointer", ":hover":{color:"black"}}}>Sale Items</Typography>

      </Stack>
      <Stack direction="row"  height="auto"  px="20px" justifyContent="space-between" flexWrap="wrap" width="80%" margin="auto" mt="70px">
        
        
      <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/2.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/30.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


     
      
        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/5.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/29.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


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
      
    </>
  )
}

export default Deals
