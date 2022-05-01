import React from 'react'
import Banner from '../Banner/Banner'
import Companies from '../Companies/Companies'
import Counter from '../Counter/Counter'
import Feedback from '../Feedback/Feedback'
import HomeInventory from '../HomeInventory/HomeInventory'
const Home = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 116px - 74px)'}}>
      <div className='secondery-bg'>
      <Banner></Banner>
      </div>
      <Counter></Counter>
      <Companies></Companies>
      <HomeInventory></HomeInventory>
      <Feedback></Feedback>
    </div>
  )
}

export default Home