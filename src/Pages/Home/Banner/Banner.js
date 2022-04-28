import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import banner1 from '../../../Images/Banner/banner-1.png'
import banner2 from '../../../Images/Banner/banner-2.png'
const Banner = () => {
  return (
     <div className='py-5'>
      <div className='mb-5 mt-3 container-lg d-flex flex-lg-row flex-column-reverse text-center text-lg-start align-items-center  justify-content-around '>
       <div className='w-100'>
        <h1 className='primary-text p-0 m-0 lh-1 fw-bolder display-1' >FURNITURE</h1>
        <h1 className='secondery-text p-0 m-0 lh-1 fw-bolder display-1' >HOUSE</h1>
        <small className='d-block my-2 secondery-text fw-bold'>Manage Every Single Sell Of yours! Track every panny, Predict your business future! why pen and paper when you can do everything Digitally!</small>
        <button className='btn btn-dark rounded-pill fw-bold px-3 py-2 my-2'>See Items</button>
      </div>
      <div className="col col-10 col-lg-6 mx-auto">

      <Carousel controls={false} fade={true} indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>

      </div>
    </div> 
     </div>
   
  )
}

export default Banner