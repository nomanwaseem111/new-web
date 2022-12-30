import React, { useContext } from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {CartContext} from './CartS'

const ItemS = ({id,name,price,img,quantity}) => {
  
    const {removeItem,increment} = useContext(CartContext)
  
  
    return (
    <>
        <Stack direction={{ md: "row" }}  justifyContent={{ md: "space-around" }} mb={{ md: "15px" }} mt={{ md: "10px" }} width={{ md: "1200px" }} height={{ md: "120px" }}>
                            <Box component="img" width={{ md: "120px" }} src={img} />
                            <Stack pt={{ md: "60px" }}>
                                <Typography>{name}</Typography>
                            </Stack>
                            <Stack direction={{ md: "row" }} justifyContent={{ md: "space-around" }} width={{ md: "100px" }} pt={{ md: "60px" }}>
                                <RemoveIcon />
                                <Typography variant='span' fontSize={{ md: "22px" }}>{quantity}</Typography>
                                <AddIcon onClick={() => increment(id)} />
                            </Stack>

                            <Stack pt={{ md: "60px" }}>
                                <Typography variant='h5'>Rs {price}</Typography>
                            </Stack>

                            <Stack pt={{ md: "60px" }}>
                                <DeleteIcon sx={{ color: { md: "red" } }} onClick={() => removeItem(id)} />

                            </Stack>
                        </Stack>
                        <hr /> 
    </>
  )
}

export default ItemS
