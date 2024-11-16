// import React from 'react'
// import NavBar from './Component/NavBar'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   )
// }

// export default App




// import React, { useReducer, useState } from 'react'

// const App = () => { 

//   function reduser(count,action){
//     if(action.type==='incre'){
//       return count+1
//     }
//     else if(action.type==='d'){
//       return count-1
//     }
//     else if(action.type==='reset'){
//       return 0
//     }
//     else{
//       return count
//     }

//   }
// //  let [count,SetCount]=    useState(0)
//     let [count,dispatch]=    useReducer(reduser,0)

//     function fun1(){
//       dispatch({
//         type:'incre'
//       })

//     }
//   return (
//     <div>
//       {/* <h3> {count}</h3> */}
//       {/* <button onClick={()=>SetCount(count+1)}>click</button> */}

//      <h2> {count}</h2>
//       <button onClick={fun1}>++</button>
//       <button onClick={()=>dispatch({type:"d"})}>--</button>
//       <button onClick={()=>dispatch({type:"reset"})}>reset</button>


//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Component/Home'

// const App = () => {

//   return (
//     <div >
//       <Home />
//     </div>
//   )
// }

// export default App


import React,{useState} from 'react'
import Home from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import OneCard from './Component/OneCard'
import Cart from './Component/Cart'

const App = () => {
  let [apiData,SetApiData]=useState([])
  // let [data,SetData]=useState([])
  return (
    <div>
      <NavBar/>
      
      <Routes>
        {/* <Route path='/'  element={  <Home apiData={apiData}  data={data}  SetData={SetData}  SetApiData={SetApiData}/>}/> */}
        <Route  path='/'  element ={<Home   apiData={apiData}  SetApiData={SetApiData}/>}/>
        <Route path='/onecard/:id'  element={  <OneCard/>}/>
        {/* <Route path='/cart'  element={  <Cart data={data} />}/> */}
        <Route path='/cart'  element={  <Cart />}/>



      </Routes>
    
    </div>
  )
}

export default App