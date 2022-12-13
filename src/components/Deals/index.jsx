import { Typography } from "@mui/material"
import { Stack , Box} from "@mui/system"
import React from "react"
import Rating from '@mui/material/Rating';

const Deals = () => {
  return (
    <>
      <Stack  sx={{ textAlign:{md:"center",xs:"center"} ,mt:{md:"100px",xs:"50px"} }}>
        <Typography component="h1" 
          sx={{fontSize:{md:"40px",xs:"20px"},
             fontWeight:{md:"bold",xs:"bold"}}}
        >DAILY DEALS!</Typography>
      </Stack>
      <Stack direction={{ md:"row",xs:"row"}} justifyContent="space-around" alignItems="center"  sx={{width:{md:"30%",xs:"70%"}}} margin="auto" mt="50px" >
        <Typography sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }} >New Arrivals</Typography>
        <Typography sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}> Best Sellers</Typography>
        <Typography sx={{ fontSize:{md:"25px",xs:"13px"},color:{md:"grey",xs:"grey"},fontWeight:{md:"500",xs:"500"},cursor:{md:"pointer",xs:"pointer"} }}>Sale Items</Typography>

      </Stack>
      <Stack direction={{md:"row",xs:"column"}}  height="auto" sx={{width:{md:"80%", xs:"80%"},mt:{md:"80px",xs:"50px"}}} px="20px" justifyContent="space-between" flexWrap="wrap"  margin="auto" >
        
        
      <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/8f2eacdf32fc06c9ab3a53f68fbd942e.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/901902b4c71c253561c6803d07fb533d.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/85b9c4dd65276d29bf68caa1e5993f74.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>


        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/46ba9bf5f724c7d6d5a1387d94428291.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/3f8865d7402961492e6f1573d85734f7.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/aed8704332e8c0d0f39793687124d2cd.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/cede762921239e3de73ef818f5410ea4.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/85000763f06575ad3800300a95b1c935.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/36b77f53998a4c82f75569dc9cc71691.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}} ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/36b77f53998a4c82f75569dc9cc71691.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}}   ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://static-01.daraz.pk/p/ce1dfd50f3c2fed9087e000427383cbc.jpg" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


            </Box>
        </Box>

        <Box  width={{md:"auto",xs:"280px"}}  ml={{md:"5px"}} height={{md:"550px",xs:"500px"}} textAlign={{md:"center",xs:"center"}}>
            
            <Box component="img" src="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Redmi-watch-2-lite--Product-Image--600x600--05_230x.png?v=1665404030" 
                sx={{width:{md:"320px" ,xs:"280px"}}}
            />
            <Box>
               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18"} , mt:{md:"22px",xs:"10px"}}} >Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"   sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:{md:"22px",xs:"18px"},mt:{md:"8px",xs:"15px"}}} >€35.6</Typography> 


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
