import React from 'react'
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';


const Cart = ({ setShowCart }) => {
    

    return (
        <Stack id='cart-panel'>
            <Stack id='opac-layer'></Stack>
            <Stack id='cart-content'>
                <Stack direction={{ md: "row", xs: "row" }} justifyContent={{ md: "space-between", xs: "space-between" }}
                    alignItems={{ md: "center", xs: "center" }} px={{ md: "20px", xs: "10px" }}
                    py={{ md: "20px", xs: "10px" }}
                >
                    <Typography variant='h6' sx={{
                        fontSize: { md: "20px", xs: "18px" }, fontFamily: { md: "Roboto", xs: "Roboto" },
                        textTransform: { md: "uppercase", xs: "uppercase" },
                        fontWeight: { md: "bold", xs: "bold" }
                    }}>Shopping Cart</Typography>
                    <ClearIcon onClick={() => setShowCart(false)} sx={{ cursor: { md: "pointer", xs: "pointer" } }} />

                </Stack>

                <Stack margin={{md:'auto',xs:"auto"}}>

                    <AddShoppingCartIcon sx={{fontSize:{md:"180px",xs:"100px"}, color:{md:"grey"},mb:{md:"30px"}}}/>
                    <Typography sx={{fontSize:{md:"20px",xs:"18px"},mb:{md:"30px"}}}>No Products in the Cart</Typography>
                    <Button  sx={{
                  "&:hover": {
                backgroundColor: "#8e2de2",

                color: "#fff",
                border:"none"
              },
                  width: { md: "180px", xs: "100px" },
                  mt: { md: "10px", xs: "10px" },
                  ml: { md: "10px", xs: "5px" },
                  border: { md: "1px solid #fff", xs: "1px solid #fff" },
                  padding: { md: "10px", xs: "10px" },
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "18px", xs: "12px" },
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  backgroundColor:{md:"#8e2de2"}
                }} 
                onClick={() => setShowCart(false)}
                >Return to Shop</Button>
                </Stack>
                <Stack>


                </Stack>

            </Stack>
        </Stack>
    )
}

export default Cart