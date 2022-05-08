import React from 'react'
import { DeviceMobileIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/solid'

const FooterInfo = () => {
  return (
    <div className='d-flex flex-column justify-content-lg-start  align-items-lg-start align-items-center pb-3 pb-lg-0'>
          <h4 className='fw-bold'>CONTACT US</h4> 
        <div className='d-flex align-items-center text-secondary'><LocationMarkerIcon style={{height:"20px"}}></LocationMarkerIcon><span>Dhaka,Bangladesh</span></div>
        <div className='d-flex align-items-center text-secondary'><DeviceMobileIcon style={{height:"20px"}}></DeviceMobileIcon><span>+8801999999999</span></div>
        <div className='d-flex align-items-center text-secondary'><MailIcon style={{height:"20px"}}></MailIcon><span>furniturehouse@gmail.com</span></div>
    </div>
  )
}

export default FooterInfo