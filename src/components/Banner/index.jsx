import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Banner = () => {
    return (
        <>
           <Stack backgroundColor="#f0e0ff">
            <Stack direction="row"
                alignItems="center"
                width="100%"
                // backgroundColor="yellow"
               justifyContent="space-between"
                px="100px"
                
                >
                <Box sx={{height:'500px',width:"900px"}}>
                    <Typography variant='span' sx={{ml:"5px", height:"100px" , fontSize:"35px", fontFamily:"sans-serif"}}>Smart Products</Typography>
                    <Typography variant='h1' sx={{mt:"20px",mb:"20px", fontSize:"110px"}}>Winter Offer <br /> 2024 Collection</Typography>
                    <Button className='shopNow' sx={{ border: "1px solid black", width: "250px",mt:"30px", ml:"10px", padding:"20px", color:"black", fontSize:"20px", "&:hover":{background:"#6610f2", border:"none", color:"#fff", fontWeight:"bold" }}}>Shop Now</Button>
                </Box>
                <Box sx={{mt:"80px" ,ml:"50px", width:"800px"}}>
                    <img  src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png" height="900px" width="auto"  alt="" />
                </Box>
            </Stack>
            </Stack>
        </>
    )
}

export default Banner