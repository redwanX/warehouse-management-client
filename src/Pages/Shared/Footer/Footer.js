import React from 'react'
import FooterInfo from './FooterInfo/FooterInfo'
import FooterSocial from './FooterSocial/FooterSocial'
const Footer = () => {
  return (

        <div className='footer p-5 w-100 flex-column-reverse flex-lg-row d-flex bg-dark justify-content-around light-text'>
           <div className='d-flex flex-column justify-content-center align-items-center'>
           <h4 className='fw-bold'>FURNITURE HOUSE</h4> 
            <small  className='text-secondary'>©{new Date().getFullYear()} Furniture House</small >
            <small  className='text-secondary'>All Rights Reserved</small >
           </div>
            <FooterSocial></FooterSocial>
            <FooterInfo></FooterInfo>
        </div>
  
  )
}

export default Footer
