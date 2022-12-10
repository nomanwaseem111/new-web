import { Stack } from "@mui/system"
import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

const index = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="90%"
        mt="30px"
        margin="auto"
        height="250px"
        flexWrap="wrap"
        mb="50px"
        py="50px"
      >
        <Box sx={{display:"flex", width:"350px",px:"20px",mt:"30px"}} >
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
            alt=""
            height="65px"
          />
          <Box sx={{ml:"20px",mt:"2px"}}>
            <Typography component="span" sx={{fontSize:"25px"}}>Free Shipping</Typography><br/>
            <Typography component="span" sx={{fontSize:"18px", color:"grey"}}>Free shipping on all order</Typography>
          </Box>
        </Box>

        <Box sx={{display:"flex", width:"350px",px:"20px",mt:"30px"}} >
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
            alt=""
            height="65px"
          />
          <Box sx={{ml:"20px",mt:"2px"}}>
            <Typography component="span" sx={{fontSize:"25px"}}>Support 24/7</Typography><br/>
            <Typography component="span" sx={{fontSize:"18px", color:"grey"}}>Free shipping on all order</Typography>
          </Box>
        </Box>

        <Box sx={{display:"flex", width:"350px",px:"20px",mt:"30px"}} >
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
            alt=""
            height="65px"
          />
          <Box sx={{ml:"20px",mt:"2px"}}>
            <Typography component="span" sx={{fontSize:"25px"}}>Money Return</Typography><br/>
            <Typography component="span" sx={{fontSize:"18px", color:"grey"}}>Free shipping on all order</Typography>
          </Box>
        </Box>


        <Box sx={{display:"flex", width:"350px",px:"20px",mt:"30px"}} >
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
            alt=""
            height="65px"
            
            
          />
          <Box sx={{ml:"20px",mt:"2px"}}>
            <Typography component="span" sx={{fontSize:"25px"}}>Order Discount</Typography><br/>
            <Typography component="span" sx={{fontSize:"18px", color:"grey"}}>Free shipping on all order</Typography>
          </Box>
        </Box>
      
      </Stack>
    </>
  )
}

export default index
