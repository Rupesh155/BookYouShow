import React, { useContext } from 'react'
import Context from './Context'

const Cart = () => {
   let {cart}=    useContext(Context)
   console.log(cart,"kuyayayayayay");
   
  return (
    <div>
        {
        cart.map((val,index)=>{
          return (<>
          <div id='card' >  
          <img  src={val.image}/>
          <h2> {val.name}</h2>
          {/* <button onClick={()=>addtoCart(val)}>addToCart</button> */}
          </div>
          </>)
        })
      }
    </div>
  )
}

export default Cart