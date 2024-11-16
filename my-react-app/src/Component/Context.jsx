import { createContext, useReducer } from "react";

let Context=  createContext()
export default Context
let data={
    cart:[]
}
function reduser(state,action){
    if(action.type==='add'){
        return {
            ...state,cart:[...state.cart,action.payload]
        }
    }
    else{
        return state
    }


}


function ContextP({
    children
}){
  let [state,dispatch]=   useReducer(reduser,data)
    return(<>
    <Context.Provider value={{cart:state.cart,dispatch}}>
      {
        children
      }
    </Context.Provider>
    </>)
}
export {ContextP}