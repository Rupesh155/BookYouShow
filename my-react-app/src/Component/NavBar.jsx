// import React from 'react'
// import './NavBar.css'
// const NavBar = () => {
//   return (
//     <div>
//         <nav>
//             <div id='child1'>
//                 <li>Logo</li>
//                 <input/>

//             </div>
//             <div id='child2'>
//                 <li>location</li>
//                 <li>SignUp</li>

//             </div>

//         </nav>
//     </div>
//   )
// }

// export default NavBar


import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='nav'>
      <Link to='/'>  
      <li>Home</li>
      </Link>
      <Link to='/cart' >  
      <li>Cart</li>
      </Link>

    </div>
  )
}

export default NavBar