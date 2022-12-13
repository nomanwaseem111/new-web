import { Stack } from "@mui/system"
import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Container from "@mui/material/Container"

const index = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction={{ md: "row", xs: "column" }} 
      sx={{
          ml:{md:"100px",xs:"20px"},
          mt:{md:"100px",xs:"50px"},
          pl:{xs:"15px"}
         
           }}>
        <Box sx={{ display: "flex", width: "350px", px: "20px", mt: "30px",mb:"30px" }}>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
            alt=""
            height="65px" 
            width="60px"
           
          />
          <Box sx={{ ml: "20px", mt: "2px" }}>
            <Typography component="span" sx={{ fontSize:{md:"25px", xs:"20px"} }}>
              Free Shipping
            </Typography>
            <br />
            <Typography
              component="span"
              
              sx={{
                 fontSize:{md:"18px",xs:"16px"},
                 color:{md:"grey",xs:"grey"}
              }}
            >
              Free shipping on all order
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", width: "350px", px: "20px", mt: "30px",mb:"30px" }}>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
            alt=""
            height="65px"
          />
          <Box sx={{ ml: "20px", mt: "2px" }}>
            <Typography component="span" sx={{ fontSize:{md:"25px", xs:"20px"} }}>
              Support 24/7
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{
                 fontSize:{md:"18px",xs:"16px"},
                 color:{md:"grey",xs:"grey"}
              }}
            >
              Free shipping on all order
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", width: "350px", px: "20px", mt: "30px",mb:"30px" }}>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
            alt=""
            height="65px"
          />
          <Box sx={{ ml: "20px", mt: "2px" }}>
            <Typography component="span" sx={{ fontSize:{md:"25px", xs:"20px"} }}>
              Money Return
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{
                 fontSize:{md:"18px",xs:"16px"},
                 color:{md:"grey",xs:"grey"}
              }}
            >
              Free shipping on all order
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", width: "350px", px: "20px", mt: "30px",mb:"30px" }}>
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
            alt=""
            height="65px"
          />
          <Box sx={{ ml: "20px", mt: "2px" }}>
            <Typography component="span" sx={{ fontSize:{md:"25px", xs:"20px"} }}>
              Order Discount
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{
                 fontSize:{md:"18px",xs:"16px"},
                 color:{md:"grey",xs:"grey"}
              }}
            >
              Free shipping on all order
            </Typography>
          </Box>
        </Box>
      </Stack>
      </Container>
  )
}

export default index
