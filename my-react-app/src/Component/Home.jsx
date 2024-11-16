// import React, { useState } from 'react'
// import '../App.css'
// import CloseIcon from '@mui/icons-material/Close';
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
// const Home = () => {
//   let [data,SetData]=useState('none')
//   return (
//     <div>
//       <button onClick={()=>SetData('block')}>click meee</button>
//       <div id='card' style={{display:data}}>
//         <div id='icons'onClick={()=>SetData('none')}>  
//         <CloseIcon/>
//         </div>
//         <AirplanemodeActiveIcon/>

//         <input/>

//       </div>
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'
import './Home.css'

import Cards from './Cards'
const Home = ({apiData,SetApiData,data,SetData}) => {


  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()
    }).then((data)=>{
      // console.log(data.recipes);
      SetApiData(data.recipes)
      

    })

  },[])


  return (
    
    <>
    <Cards   data={data} SetData={SetData} apiData={apiData}/>
    </>
    // <div>
    //   {
    //     apiData.map((val,index)=>{
    //       return (<>
    //       <div id='card' onClick={()=>fun1(index)}>  
    //       <img  src={val.image}/>
    //       <h2> {val.name}</h2>
    //       </div>
    //       </>)
    //     })
    //   }
    // </div>
  )
}

export default Home