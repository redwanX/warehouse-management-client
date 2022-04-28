import React from 'react'
import Banner from '../Banner/Banner'
import HomeInventory from '../HomeInventory/HomeInventory'
import './Home.css'
const Home = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 118px - 74px)'}}>
      <div className='secondery-bg'>
      <Banner></Banner>
      </div>
      <HomeInventory></HomeInventory>
    </div>
  )
}

export default Home