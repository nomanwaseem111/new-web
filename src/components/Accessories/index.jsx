import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Autocomplete from '@mui/material/Autocomplete';

import {

  Link
} from "react-router-dom";
const Accessories = () => {
 

 
 
  return (
 <>
       <Stack direction="row" width="100%" height="100px" backgroundColor="#f7f7f7" justifyContent="center" alignItems="center">
        <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "black", fontSize: "25px", mr: "10px", fontFamily: "sans-serif" }}>Home</Typography><Typography><i class="fa-sharp fa-solid fa-slash-forward"></i></Typography><Typography variant="span" sx={{ textDecoration: "none", fontFamily: "sans-serif", fontSize: "25px", mr: "10px" }}>Accessories</Typography>
      </Stack>

     
        <Stack border="1px solid black" direction="row" width="90%" margin="auto" height="auto" mt="100px">
          <Stack border="1px solid black" width="30%" height="800px" f>
            <Typography variant='h5'>Search</Typography>
            <TextField id="outlined-basic" label="Search Here..." variant="outlined" sx={{ width: "320px",mt:"30px" }} />
         <SearchIcon sx={{width:"50px",height:"40px",fontSize:"20px",position:"absolute",left:"405px",bottom:"370px",cursor:"pointer"}}/>
         <Typography variant='h5' mt="50px">Categories</Typography>
           <Stack border="1px solid black"  mt="20px">
           <Box border="1px solid black" ><Checkbox /> <Typography variant='span' fontSize="20px">All Categories</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Fashion</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Men</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Women</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Electronics</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Furniture</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Flower</Typography></Box>
            <Box border="1px solid black" mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Kids</Typography></Box>


           </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-around" px="40px" mt="150px" flexWrap="wrap">
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
           <Box mb="40px">
            <img src="https://flone.jamstacktemplates.dev/assets/img/product/furnitures/2.jpg" width="350px" height="450px" alt="" />
            <Box textAlign="center">
               <Typography component="p" sx={{fontSize:"22px",mt:"30px"}}>Lorem ipsum fashion female top</Typography> 
               <Rating name="size-large" defaultValue={2} size="large"  sx={{mt:"10px"}}/>


               <Typography component="p" sx={{fontSize:"22px", mt:"8px"}}>€35.6</Typography> 


            </Box>
           </Box>
          </Stack>
          

        </Stack>
       
 </>
  )
}

export default Accessories