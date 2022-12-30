import React, { useReducer } from 'react'
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
import ContextCart from './ContextCart';
import PRODUCT from '../api/product.json'
import { createContext } from 'react';
import {reducer} from './reducer'

export const CartContext = createContext();


const initialState = {
    item:PRODUCT,
    totalAmount:0,
    totalItem:0
}

const CartS = () => {
  
   const [state,dispatch] = useReducer(reducer,initialState)
  
  
    const removeItem = (id) => {
      return dispatch({
        type:"REMOVE_ITEM",
        payload:id
      })
    }

    return (
        
            <CartContext.Provider value={{...state,removeItem}}>
                <ContextCart />
            </CartContext.Provider>
      
    )
}

export default CartS
