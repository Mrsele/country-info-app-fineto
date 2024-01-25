import React from 'react'
import './Footer.css'
import instagram_icon from './Assets/instagram_icon.png'
 
import whatsup_icon from './Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
    <p>Contact Me </p>
    
<div className='footer-social-icons'>
<div className='footer-icons-container'>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
<img src={instagram_icon} alt='' />
</a>

</div>


<div className='footer-icons-container'>
<a href="https://www.whatsup.com" target="_blank" rel="noopener noreferrer">
<img src={whatsup_icon} alt='' />
</a>

</div>
</div>
     <div className='footer-copyright'> 
     <p>  Copyright @ {new Date().getFullYear()} -All right reserved . Solomon Yeshiwas</p>
     </div>
    </div>
  )
}

export default Footer