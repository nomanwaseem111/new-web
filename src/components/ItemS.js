import React, { useContext } from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {CartContext} from './CartS'

const ItemS = ({id,name,price,img,quantity}) => {
  
    const {removeItem,increment,decrease} = useContext(CartContext)
  
  
    return (
    <>
        <Stack direction={{ md: "row" }}  justifyContent={{ md: "space-around" }} mb={{ md: "15px" }} mt={{ md: "10px" }} width={{ md: "1200px" }} height={{ md: "120px" }}>
                            <Box component="img" width={{ md: "120px",xs:"150px" }} margin={{xs:"auto",md:"0px"}} mt={{xs:"20px"}} src={img} />
                            <Stack pt={{ md: "60px",xs:"40px" }}>
                                <Typography fontSize={{xs:"20px"}} textAlign={{xs:"center"}} >{name}</Typography>
                            </Stack>
                            <Stack direction={{ md: "row",xs:"row" }} margin={{xs:"auto",md:"0px"}}  mt={{xs:"20px"}} justifyContent={{ md: "space-around" }} width={{ md: "100px" }} pt={{ md: "60px" }}>
                                <RemoveIcon onClick={() => decrease(id)}  sx={{fontSize:{xs:"22px",md:"25px"}}} />
                                <Typography variant='span' fontSize={{ md: "22px",xs:"20px" }} marginLeft={{xs:"10px",md:"0px"}} marginRight={{xs:"10px",md:"0px"}}>{quantity}</Typography>
                                <AddIcon onClick={() => increment(id)} sx={{fontSize:{xs:"22px",md:"25px"}}}/>
                            </Stack>

                            <Stack pt={{ md: "60px",xs:"20px" }} margin={{xs:"auto",md:"0px"}}>
                                <Typography variant='h5' fontSize={{md:"22px" ,xs:"20px"}} >Rs {price}</Typography>
                            </Stack>

                            <Stack pt={{ md: "60px",xs:"30px" }} pb={{xs:"30px",md:"0px"}} margin={{xs:"auto",md:"0px"}} >
                                <DeleteIcon sx={{ color: { md: "red",xs:"red" },fontSize:{xs:"26px",md:"25px"} }} onClick={() => removeItem(id)} />

                            </Stack>
                        </Stack>
                        <hr /> 
    </>
  )
}

export default ItemS
