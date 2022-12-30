export const reducer = (state,action) => {
  
  if(action.type === "REMOVE_ITEM"){
     return {
        ...state,
        item: state.item.filter((elem) => {
            return elem.id !== action.payload;
        })
     }
  }
  
    return state
}