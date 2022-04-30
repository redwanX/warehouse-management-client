import React from 'react'
import Counter from '../../Counter/Counter'
import Banner from '../Banner/Banner'
import HomeInventory from '../HomeInventory/HomeInventory'
const Home = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 116px - 74px)'}}>
      <div className='secondery-bg'>
      <Banner></Banner>
      </div>
      <Counter></Counter>
      <HomeInventory></HomeInventory>
    </div>
  )
}

export default Home