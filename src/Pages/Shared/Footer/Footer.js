import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer dark-bg light-text'>
           <h4>FURNITURE HOUSE</h4> 
            <small  className='light-text'> ©{new Date().getFullYear()} All rights reserved.</small >
            
        </div>
    </div>
  )
}

export default Footer
