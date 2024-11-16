import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from './Context'
const Cards = ({apiData}) => {
  let  {dispatch}=  useContext(Context) 
// console.log( ,'dekhooo');

     function addtoCart(val){
      dispatch({
        type:"add",
        payload:val
      })
      
    
        // console.log(data,"aao dikhata hu");
        // SetData([...data,val])
    }

    let navigate=   useNavigate()
    // function fun1(id){
    //     console.log(id,"hjeheh");
    //     navigate(`onecard/${id}`)
    
        
    
    //   }
  return (
    <div>
            <div>
      {
        apiData.map((val,index)=>{
          return (<>
          <div id='card' >  
          <img  src={val.image}/>
          <h2> {val.name}</h2>
          <button onClick={()=>addtoCart(val)}>addToCart</button>
          </div>
          </>)
        })
      }
    </div>
    </div>
  )
}

export default Cards



// console.log({}=={});   true
//  null
//  false
//    undefined || 5 



//   undefined
 
 





