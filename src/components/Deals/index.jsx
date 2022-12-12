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
            <img src="https://static-01.daraz.pk/p/8f2eacdf32fc06c9ab3a53f68fbd942e.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/901902b4c71c253561c6803d07fb533d.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/85b9c4dd65276d29bf68caa1e5993f74.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/46ba9bf5f724c7d6d5a1387d94428291.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


     
      
        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/3f8865d7402961492e6f1573d85734f7.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/aed8704332e8c0d0f39793687124d2cd.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/cede762921239e3de73ef818f5410ea4.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/85000763f06575ad3800300a95b1c935.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>
       



        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/36b77f53998a4c82f75569dc9cc71691.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/6958de47638b61ff3e882ebbb1d3187d.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>

        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/ce1dfd50f3c2fed9087e000427383cbc.jpg" alt="" width="320px" 
                mt="30px"/>
            
            <Box>
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
        </Box>


        <Box sx={{textAlign:"center", ml:"5px" ,height:"500px" ,mb:"150px" }}>
            <img src="https://static-01.daraz.pk/p/4bf9e6022ad83978b106e7bb378dced6.png" alt="" width="320px" 
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
