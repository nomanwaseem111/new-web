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

  const { item, clearCart } = useContext(CartContext)

  const navigate = useNavigate()

  if (item.length === 0) {

    return (
      <>
          <Stack width={{ md: "1200px" }} margin={{ md: "auto" }} height={{md:"500px"}} mt={{md:"150px"}}>
          <Typography variant='h4'>Shopping Cart</Typography>
          <Typography variant='p' sx={{ mt: { md: "20px" }, fontSize: { md: "22px" } }}>You have <span>0</span> Items in Shopping Cart</Typography>
        </Stack>
      </>
    )

  }

  return (
    <>
      <Stack direction={{ md: "row" }} justifyContent={{ md: 'space-between' }} width={{ md: "1200px" }} margin={{ md: "auto" }} py={{ md: "100px" }}>
        <Box direction={{ md: "row" }} >
          <ArrowBackIcon sx={{ fontSize: { md: "24px" } }} onClick={() =>
            navigate(`/product/${item.id}`, {
              state: {
                name: item.name,
                title: item.title,
                description: item.description,
                img: item.img,
                price: item.price,
                category: item.category,
              },
            })
          } />
          <Typography variant='span' sx={{ fontSize: { md: "36px" }, ml: { md: "10px" } }}   >Continue Shopping</Typography>
        </Box>

      </Stack>

      <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
        <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
          <Typography variant='h4'>Shopping Cart</Typography>
          <Typography variant='p' sx={{ mt: { md: "20px" }, fontSize: { md: "22px" } }}>You have <span>12</span> Items in Shopping Cart</Typography>
        </Stack>




        <Stack width={{ md: "1200px" }} mt={{ md: "50px" }} id="main-parent" backgroundColor="#f6f6f8" height={{ md: "500px" }}>



          {
            item.map((curItem) => (
              <ItemS key={curItem.id} {...curItem} />

            ))
          }













        </Stack>

        <Stack textAlign={{ md: "end" }}>
          <Typography variant='h6' mt={{ md: "30px" }}>Total Price: Rs: 50000</Typography>
          <Stack direction={{ md: "row" }} marginLeft={{ md: "830px" }} mt={{ md: "30px" }}>
            <Button sx={{
              "&:hover": {
                backgroundColor: "black",

                color: "#fff",
                border: "none"
              }, backgroundColor: { md: "black" }, color: { md: "#fff" }, width: { md: "200px" }
            }} onClick={() => navigate("/checkout")}
            >Check Out</Button>
            <Button onClick={clearCart} sx={{
              "&:hover": {
                backgroundColor: "red",

                color: "#fff",
                border: "none"
              }, backgroundColor: { md: "red" }, color: { md: "#fff" }, width: { md: "200px" }, marginLeft: { md: "30px" }
            }}
            >Clear Cart</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default ContextCart
