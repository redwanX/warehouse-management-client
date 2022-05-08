import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer bg-dark light-text'>
           <h4 className='fw-bold'>FURNITURE HOUSE</h4> 
            <small  className='text-secondary'>©{new Date().getFullYear()} Furniture House</small >
            <small  className='text-secondary'>All Rights Reserved</small >
            
        </div>
    </div>
  )
}

export default Footer
