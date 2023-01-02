import React, { useState } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import img5 from '../../assets/accessories/acc5.webp'

import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"

import { useNavigate } from "react-router-dom"


const Product = () => {
  // const [price, setPrice] = React.useState("")

  // const handleChange = (event) => {
  //   setPrice(event.target.value)
  // }


  const [num, setNum] = useState(0)

  const navigate = useNavigate()



  return (
    <Grid
      sx={{
        height: { md: "auto" },
      }}
    >
      <Container maxWidth="xl" sx={{ mb: { xs: "100px", md: "100px" } }}>
        

        
        
      
            <Stack
          mt={{ md: "100px", xs: "100px" }}
          width={{ md: "auto", xs: "auto" }}
          height={{ md: "400px", xs: "auto" }}
        >
          <Typography
            variant="h4"
            fontSize={{ md: "30px", xs: "20px" }}
            mb={{ md: "20px", xs: "20px" }}
            marginLeft={{ xs: "80px", md: "0px" }}
            fontWeight={{ md: "700", xs: "700" }}
            fontFamily={{ md: "Roboto", xs: "Roboto" }}

          >
            Your Cart Items
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            sx={{ border: { xs: "black" } }}
            marginLeft={{ xs: "10px", md: "0px" }}
            width={{ md: "auto", xs: "auto" }}
            height={{ md: "350px", xs: "auto" }}
          >
            <Box
              border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "300px" }}
              height={{ md: "350px", xs: "400px" }}
            // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}

            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "30px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "500" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}

              >
                image
              </Box>
              <Box
                component="img"
                src={img5}
                width={{ md: "200px", xs: "200px" }}
                marginLeft={{ md: "50px", xs: "50px" }}
                mt={{ md: "30px", xs: "50px" }}
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}

              />
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}
              width={{ md: "300px", xs: "300px" }}
              height={{ md: "350px", xs: "350px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "25px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "500" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}

              >
                Product Name
              </Box>
              <Box
                fontSize={{ md: "18px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "80px", xs: "80px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                fontWeight={{ md: "500", xs: "500" }}

              >
                Apple iPhone 13 128GB
              </Box>
              <Box
                fontSize={{ md: "18px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                fontWeight={{ md: "500", xs: "500" }}

              >
                Color:Pink
              </Box>
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}
              width={{ md: "300px", xs: "300px" }}
              height={{ md: "350px", xs: "350px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "30px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "500" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}

              >
                UNIT PRICE
              </Box>
              <Box
                fontSize={{ md: "20px", xs: "24px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "80px", xs: "100px" }}
                fontWeight={{ md: "500", xs: "500" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}

              >
                €11.20
              </Box>
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}
              width={{ md: "300px", xs: "300px" }}
              height={{ md: "350px", xs: "350px" }}

            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "30px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "500" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}

              >
                QTY
              </Box>
              <Box
                fontSize={{ md: "18px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "70px", xs: "100px" }}
              >
                <Button sx={{ fontSize: { md: "30px", xs: "30px" }, fontWeight: { md: '500', xs: "500" } }} fontFamily={{ md: "Roboto", xs: "Roboto" }}
                  onClick={() => setNum(num - 1)} >-</Button>
                <Typography variant="span" sx={{ fontSize: { md: "25px", xs: "30px" }, fontWeight: { md: '500', xs: "500" } }} fontFamily={{ md: "Roboto", xs: "Roboto" }}
                >{num}</Typography>
                <Button sx={{ fontSize: { md: "30px", xs: "30px" }, fontWeight: { md: '500', xs: "500" } }} fontFamily={{ md: "Roboto", xs: "Roboto" }}
                  onClick={() => setNum(num + 1)}  >+</Button>
              </Box>
            </Box>
            {/* <Box
              border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "250px", xs: "200px" }}
              height={{ md: "350px", xs: "230px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "25px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "22px", xs: "20px" }}
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
                width={{ md: "250px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
              >
                SUBTOTAL
              </Box>
              <Box
                fontSize={{ md: "22px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "130px", xs: "50px" }}
              >
                €11.20
              </Box>
            </Box> */}
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid black" }}
              width={{ md: "300px", xs: "300px" }}
              height={{ md: "350px", xs: "350px" }}
              mb={{ xs: "30px", md: "0px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "30px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Roboto", xs: "Roboto" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "500" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}

              >
                ACTION
              </Box>
              <Box
                fontSize={{ md: "22px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "80px", xs: "100px" }}
              >
                <CloseIcon sx={{ color: { md: 'red', xs: "red" }, fontSize: { md: "30px", xs: "40px" }, fontWeight: { md: "bold", xs: "bold" } }} />
              </Box>
            </Box>
          </Stack>
        </Stack>

       
       
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
          padding={{ md: "50px" }}
        // border={{md:"1px solid black"}}

        >
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: "#6610f2", xs: "#6610f2" },
              padding: { md: "10px", xs: "10px" },
              width: { md: "280px", xs: "100%" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "16px", xs: "14px" },
              color: { md: "#fff", xs: "#fff" },
              fontWeight: { md: 'bold', xs: "bold" },
              height: { md: '0px",xs:"50px' },
              fontFamily: { md: "Roboto", xs: "Roboto" }

            }}
            onClick={() => navigate("/accessories")}

          >
            Continue Shopping
          </Button>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: "#6610f2", xs: "#6610f2" },
              padding: { md: "10px", xs: "10px" },
              width: { md: "280px", xs: "100%" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "16px", xs: "14px" },
              color: { md: "#fff", xs: "#fff" },
              fontWeight: { md: 'bold', xs: "bold" },
              height: { md: '0px",xs:"50px' },
              mt: { md: '0px', xs: "20px" },
              fontFamily: { md: "Roboto", xs: "Roboto" }

            }}
            onClick={() => navigate("/checkout")}

          >
            Proceed to Checkout
          </Button>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Product
