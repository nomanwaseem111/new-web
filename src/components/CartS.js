import React, { useReducer,useEffect } from 'react'

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

    const clearCart = () => {
      return dispatch({
        type:"CLEAR_CART",
      })
    }


    const increment = (id) => {
      return dispatch({
        type:"INCREMENT",
        payload:id
      })
    }

    const decrease = (id) => {
      return dispatch({
        type:"DECREASE",
        payload:id
      })
    }


    useEffect(() => {
      dispatch({ type: "GET_TOTAL" });
      // console.log("Awesome");
    }, [state.item]);
     

  
    return (
        
            <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrease}}>
                <ContextCart />
            </CartContext.Provider>
      
    )
}

export default CartS
