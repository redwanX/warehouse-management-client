import React from 'react'
import facebook from '../../../../Images/Icons/facebook.png'
import instagram from '../../../../Images/Icons/instagram.png'
import twitter from '../../../../Images/Icons/twitter.png'
const FooterSocial = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center pb-3 pb-lg-0'>
        <h4 className='fw-bold'>FOLLOW US</h4>
        <div className='d-flex'>
            <div className='btn btn-light m-1'>
            <img src={facebook} alt="" />
            </div>
            <div className='btn btn-light m-1'>
            <img src={instagram} alt="" /></div>
            <div className='btn btn-light m-1'>
            <img src={twitter} alt="" /></div>
        </div>
    </div>
  )
}

export default FooterSocial