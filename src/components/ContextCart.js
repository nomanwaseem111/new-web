import React from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button"
import ItemS from './ItemS';
import { useContext } from 'react';
import {CartContext} from './CartS'
import { useNavigate } from "react-router-dom"

const ContextCart = () => {
 
   const {item} = useContext(CartContext)
 
   const navigate = useNavigate()



    return (
    <>
       <Stack direction={{ md: "row" }} justifyContent={{ md: 'space-between' }} width={{ md: "1200px" }} margin={{ md: "auto" }} py={{ md: "100px" }}>
                <Box direction={{ md: "row" }} >
                    <ArrowBackIcon sx={{fontSize:{md:"24px"}}}                   onClick={() =>
                navigate(`/product/${item.id}`, {
                  state: {
                    name:item.name,
                    title: item.title,
                    description: item.description,
                    img: item.img,
                    price: item.price,
                    category: item.category,
                  },
                })
              } />
                    <Typography variant='span' sx={{fontSize:{md:"36px"},ml:{md:"10px"}}}   >Continue Shopping</Typography>
                </Box>
                
            </Stack>

            <Stack width={{ md: "1200px" }} margin={{ md: "auto" }}>
                <Typography variant='h4'>Shopping Cart</Typography>
                <Typography variant='p' sx={{mt:{md:"20px"},fontSize:{md:"22px"}}}>You have <span>4</span> Items in Shopping Cart</Typography>

                    <Stack width={{ md: "1200px" }} mt={{ md: "50px" }} id="main-parent"  backgroundColor="#f6f6f8" height={{ md: "500px" }}>
                     


                  {
                    item.map((curItem) => (
                        <ItemS key={curItem.id} {...curItem}/>

                    ))
                  }













                    </Stack>
                    
                    <Stack textAlign={{md:"end"}}>
                     <Typography variant='h6'>Total Price: Rs: 50000</Typography>
                     <Button sx={{backgroundColor:{md:"black"},color:{md:"#fff"},width:{md:"200px"},marginLeft:{md:"1000px"}}}                 onClick={() => navigate("/checkout")}
>Check Out</Button>
                    </Stack>
                </Stack>
    </>
  )
}

export default ContextCart
