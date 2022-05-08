import React, { useState } from 'react'
import useProdutcs from '../../../Hooks/useProducts/useProdutcs';
import processNUmber from '../../../utils/processnumber'
import Loading from '../../Shared/Loading/Loading';
import CounterCard from './CounterCard';

const Counter = () => {
  const [items,loading,setItems] = useProdutcs();
  const [totalProduct,setTotalProduct] = useState(-1);
  const [totalSell,setTotalSell] = useState(-1);
  const [totalRevenew,setTotalRevenew] = useState(-1);
  if(loading){
    return <Loading></Loading>
  }
  if(items.length && totalProduct===-1 && totalSell===-1&& totalRevenew===-1){
      let totalS=0;
      let totalR=0;
      items.forEach(item=>{
        totalS+=item.sold;
        totalR+=(item.sold * item.price);
      })

      setTotalProduct(items.length)
      setTotalSell(totalS)
      setTotalRevenew(totalR)
      
  }
 
  return (
    <div className='container py-5'>
      <h1 className=' my-3 secondery-text fw-bolder text-center'>COUNTS</h1>
        <hr></hr>
      <div className=' row row-cols-1 g-4 row-cols-lg-3'>
      <CounterCard color="dark" title="TOTAL PRODUCTS" data={totalProduct>0?totalProduct:0}></CounterCard>
      <CounterCard color="primary" title="TOTAL SELLS" data={totalSell>0?totalSell:0}></CounterCard>
      <CounterCard color="dark" title="TOTAL REVENEW" data={totalRevenew >0?processNUmber(totalRevenew)+'$':'0$'}></CounterCard>
      </div>
    </div>
  )
}

export default Counter