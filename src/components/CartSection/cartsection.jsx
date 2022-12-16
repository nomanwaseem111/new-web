import React, { useState } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import Pagination from "@mui/material/Pagination"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link, useNavigate } from "react-router-dom"
import { height } from "@mui/system"
const Product = () => {
  const [price, setPrice] = React.useState("")

  const handleChange = (event) => {
    setPrice(event.target.value)
  }
  
   const num = 0

  const [increment,setIncrement] = useState(num)
  const [decrement,setDecrement] = useState(num)

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
            fontFamily={{ md: "Poppins", xs: "Poppins" }}
            fontSize={{ md: "30px", xs: "20px" }}
            mb={{ md: "20px", xs: "20px" }}
            marginLeft={{ xs: "80px", md: "0px" }}
          >
            Your Cart Items
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            sx={{ border: { xs: "black" } }}
            marginLeft={{ xs: "60px", md: "0px" }}
            width={{ md: "auto", xs: "auto" }}
            height={{ md: "350px", xs: "auto" }}
          >
            <Box
              border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "200px" }}
              height={{ md: "350px", xs: "300px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
                // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}

              >
                image
              </Box>
              <Box
                component="img"
                src="https://www.i4u.com.pk/upload_new/Iphone-13-128GB.webp"
                width={{ md: "150px", xs: "150px" }}
                marginLeft={{ md: "80px", xs: "10px" }}
                mt={{ md: "50px", xs: "50px" }}
              />
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "200px" }}
              height={{ md: "350px", xs: "250px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
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
                pt={{ md: "80px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}

              >
                Apple iPhone 13 128GB
              </Box>
              <Box
                fontSize={{ md: "18px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}

              >
                Color:Pink
              </Box>
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "200px" }}
              height={{ md: "350px", xs: "230px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}
                // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}

              >
                UNIT PRICE
              </Box>
              <Box
                fontSize={{ md: "18px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "80px", xs: "50px" }}
              >
                €11.20
              </Box>
            </Box>
            <Box
              // border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "200px" }}
              height={{ md: "350px", xs: "230px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
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
                pt={{ md: "70px", xs: "50px" }}
              >
                <Button sx={{fontSize:{md:"30px",xs:"25px"}}}  >-</Button>
                <Typography variant="span"  sx={{fontSize:{md:"20px",xs:"25px"}}}>0</Typography>
                <Button sx={{fontSize:{md:"30px",xs:"25px"}}} >+</Button>
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
              border={{ md: "1px solid #f2f2f2", xs: "1px solid #f2f2f2" }}
              width={{ md: "300px", xs: "200px" }}
              height={{ md: "350px", xs: "230px" }}
              mb={{ xs: "30px", md: "0px" }}
            >
              <Box
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "30px", xs: "20px" }}
                backgroundColor={{ md: "#f2f2f2", xs: "#f2f2f2" }}
                fontSize={{ md: "18px", xs: "20px" }}
                fontFamily={{ md: "Poppins", xs: "Poppins" }}
                textTransform={{ md: "uppercase", xs: "uppercase" }}
                fontWeight={{ md: "500", xs: "400" }}
                width={{ md: "300px", xs: "auto" }}
                height={{ md: "80px", xs: "80px" }}

              >
                ACTION
              </Box>
              <Box
                fontSize={{ md: "22px", xs: "22px" }}
                color={{ md: "#333", xs: "#333" }}
                textAlign={{ md: "center", xs: "center" }}
                pt={{ md: "80px", xs: "50px" }}
              >
                <CloseIcon  sx={{color:{md:'red',xs:"red"},fontSize:{md:"30px",xs:"25px"}}}/>
              </Box>
            </Box>
          </Stack>
        </Stack>
      
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={{ md: "50px" }}
        >
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: "#f2f2f2", xs: "#f2f2f2" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "280px", xs: "150px" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "16px", xs: "10px" },
              color: { md: "#333", xs: "#333" },
            }}
          >
            Continue Shopping
          </Button>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: " #f2f2f2", xs: " #f2f2f2" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "280px", xs: "150px" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "16px", xs: "10px" },
              color: { md: "#333", xs: "#333" },
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
