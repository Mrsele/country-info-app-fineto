import React from 'react'
// import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    








  

<div className="bg-gray-800 text-white p-4">
  <div className="container mx-auto flex justify-between items-center">
  <Link to="/" className="text-3xl font-bold text-white hover:text-gray-300 ml-40">Country Information</Link>
    <nav className="flex space-x-4">
    <Link to="/all-countries" className="text-white text-xl hover:text-gray-300">View All Countries</Link>
  <Link to="/about" className="text-white text-xl hover:text-gray-300">About Me</Link>
    </nav>
  </div>
</div>

   
     
  )
}

export default Header