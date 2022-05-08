import React from 'react'
import useProdutcs from '../../../Hooks/useProducts/useProdutcs'
import Loading from '../../Shared/Loading/Loading'
import Banner from '../Banner/Banner'
import Companies from '../Companies/Companies'
import Counter from '../Counter/Counter'
import Feedback from '../Feedback/Feedback'
import HomeInventory from '../HomeInventory/HomeInventory'
const Home = () => {
  const [items,loading,setItems] = useProdutcs();
  if(loading){
    return <Loading></Loading>;
  }
  return (
    <div style={{minHeight: 'calc(100vh - 116px - 74px)'}}>
      <div className='secondery-bg'>
      <Banner></Banner>
      </div>
      <Counter items={items}></Counter>
      <Companies></Companies>
      <HomeInventory homeItem={items}></HomeInventory>
      <Feedback></Feedback>
    </div>
  )
}

export default Home