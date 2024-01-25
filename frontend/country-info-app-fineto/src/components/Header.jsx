import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <h1>Country Info App</h1>
   
     </div>
     <div className='nav-view-all'>
   
  {/*<Link to="/countries"> <button>View All Coutry Info</button></Link>*/}
  </div>
    </div>
     
  )
}

export default Header