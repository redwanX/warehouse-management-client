import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer bg-dark text-light'>
           <h4>FURNITURE HOUSE</h4> 
            <small  className='text-secondary'> ©{new Date().getFullYear()} All rights reserved.</small >
            
        </div>
    </div>
  )
}

export default Footer