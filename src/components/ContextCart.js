import React from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "@mui/material/Button"
import ItemS from './ItemS';
import { useContext } from 'react';
import { CartContext } from './CartS'
import { useNavigate } from "react-router-dom"

const ContextCart = () => {

  const { item, clearCart,totalItem,totalAmount } = useContext(CartContext)

  const navigate = useNavigate()

  if (item.length === 0) {

    return (
      <>
      <Box direction={{ md: "row",xs:"column" }} ml={{ md: "0px",xs:"20px" }}>
          <ArrowBackIcon sx={{ fontSize: { md: "24px",xs:"14px" }, mt:{md:"120px",xs:"50px"},ml: { md: "280px",xs:"10px" } }} />
          <Typography variant='span' sx={{ fontSize: { md: "36px",xs:"18px" }, ml: { md: "10px",xs:"3px" } }}   >Continue Shopping</Typography>
        </Box>
          <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
          <Typography variant='h4' sx={{fontSize:{md:"36px",xs:"20px"}, mt: { md: "50px",xs:"50px" }, ml: { md: "0px",xs:"40px" }}}>Shopping Cart</Typography>
          <Typography variant='p' sx={{ mt: { md: "40px",xs:"20px" }, fontSize: { md: "22px" },ml: { md: "0px",xs:"40px" },fontFamily:{md:"Roboto",xs:"Roboto"} }}>You have <Typography variant='span' sx={{color:{md:"#6610f2"}}}>{totalItem}</Typography> Items in Shopping Cart</Typography>
        </Stack>
      </>
    )

  }

  return (
    <>
      <Stack direction={{ md: "row",xs:"column" }} justifyContent={{ md: 'space-between' }} width={{ md: "1200px",xs:"80%" }} margin={{ md: "auto" }} py={{ md: "100px" }}>
        <Box direction={{ md: "row",xs:"column" }} ml={{ md: "0px",xs:"20px" }}>
          <ArrowBackIcon sx={{ fontSize: { md: "24px",xs:"14px" }, mt:{md:"0px",xs:"50px"},ml: { md: "0px",xs:"20px" } }}/>
          <Typography variant='span' sx={{ fontSize: { md: "36px",xs:"18px" }, ml: { md: "10px",xs:"3px" } }}   >Continue Shopping</Typography>
        </Box>

      </Stack>

      <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
        <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
          <Typography variant='h4' sx={{fontSize:{md:"36px",xs:"20px"}, mt: { md: "0px",xs:"50px" }, ml: { md: "0px",xs:"40px" }}}>Shopping Cart</Typography>
          <Typography variant='p' sx={{ mt: { md: "20px",xs:"20px" }, fontSize: { md: "22px" },ml: { md: "0px",xs:"40px" },fontFamily:{md:"Roboto",xs:"Roboto"} }}>You have <Typography variant='span' sx={{color:{md:"#6610f2"}}}>{totalItem}</Typography> Items in Shopping Cart</Typography>
        </Stack>




        <Stack width={{ md: "1200px",xs:"80%" }} margin={{xs:"auto"}}  mt={{ md: "50px",xs:"50px" }} id="main-parent" backgroundColor="#f6f6f8" height={{ md: "500px" }}>



          {
            item.map((curItem) => (
              <ItemS key={curItem.id} {...curItem} />

            ))
          }













        </Stack>

        <Stack textAlign={{ md: "end" }}>
          <Typography variant='h6' pt={{xs:"30px",md:"30px"}}  margin={{xs:"auto",md:"0px"}} fontSize={{md:"24px",xs:"20px"}}>Total Price: Rs: {totalAmount}</Typography>
          <Stack direction={{ md: "row" }} marginLeft={{ md: "830px" }} mt={{ md: "30px" }}>
            <Button    sx={{
              "&:hover": {
                backgroundColor: "black",

                color: "#fff",
                border: "none",
              }, backgroundColor: { md: "black",xs:"black" }, color: { md: "#fff",xs:"#fff" }, width: { md: "200px",xs:"120px" },
              fontSize:{md:"20px"},margin:{md:"0px",xs:"auto"},mt:{md:"0px",xs:"30px"}
            }} onClick={() => navigate("/checkout")}
            >Check Out</Button>
            <Button onClick={clearCart} sx={{
              "&:hover": {
                backgroundColor: "red",

                color: "#fff",
                border: "none"
              }, backgroundColor: { md: "red",xs:"red" }, color: { md: "#fff",xs:"#fff" },margin:{md:"0px",xs:"auto"},mt:{md:"0px",xs:"20px"}, width: { md: "200px",xs:"120px" },fontSize:{md:"20px"}, marginLeft: { md: "30px" }
            }}
            >Clear Cart</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default ContextCart
