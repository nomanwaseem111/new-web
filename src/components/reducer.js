export const reducer = (state,action) => {
  
  if(action.type === "REMOVE_ITEM"){
     return {
        ...state,
        item: state.item.filter((elem) => {
            return elem.id !== action.payload;
        })
     }
  }


  if(action.type === "CLEAR_CART"){

    return {
      ...state, item:[]
    };
  }


  if(action.type === "INCREMENT"){

   let updateCart = state.item.map((curElem) => {
      if(curElem.id === action.payload){
         
         return {...curElem, quantity: curElem.quantity + 1 };
         
      }
      return curElem

   })

   return {...state,item:updateCart}

 }


 if(action.type === "DECREASE"){

   let updateCart = state.item.map((curElem) => {
      if(curElem.id === action.payload){
         
         return {...curElem, quantity: curElem.quantity - 1 };
         
      }
      return curElem

   }).filter((curElem) => {
      return  curElem.quantity !== 0
   })

   return {...state,item:updateCart}

 }

  
 if(action.type === "GET_TOTAL"){

      let {totalItem,totalAmount} = state.item.reduce((accum,curElem) => {
         let {price,quantity} = curElem;
         let updatedTotalAmount = price * quantity;
         accum.totalAmount += updatedTotalAmount;

         accum.totalItem += quantity;
         return accum;
      },
       {
         totalItem:0,
         totalAmount:0,


      })
      return {...state,totalItem,totalAmount}
 }

  
    return state
}