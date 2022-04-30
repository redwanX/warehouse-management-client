import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import useProdutcs from '../../Hooks/useProducts/useProdutcs'
import processNUmber from '../../utils/processnumber';


const Counter = () => {
  const [items,loading,setItems] = useProdutcs();
  const [totalProduct,setTotalProduct] = useState(-1);
  const [totalSell,setTotalSell] = useState(-1);
  const [totalRevenew,setTotalRevenew] = useState(-1);
  
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
    <div className='container'>
      <h1 className=' my-3 secondery-text fw-bolder text-center'>COUNTS</h1>
        <hr></hr>
      <div className=' row row-cols-1 g-4 row-cols-lg-3'>


    <Col>
      <Card
      className="h-100 dark-bg text-white mb-2"
    >
      <Card.Header className='text-center'>TOTAL PRODUCTS</Card.Header>
      <Card.Body>
        <Card.Title className='display-1 text-center fw-bold'>{totalProduct>0?totalProduct:0} </Card.Title>
      </Card.Body>
    </Card>
    </Col>
    
    <Col >
    <Card
      className=" h-100 dark-bg text-white mb-2"
    >
      <Card.Header className='text-center'>TOTAL SELLS</Card.Header>
      <Card.Body>
        <Card.Title className='display-1 text-center fw-bold'>{totalSell>0?totalSell:0} </Card.Title>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card
      className="h-100 dark-bg text-white mb-2"
    >
      <Card.Header className='text-center'>TOTAL REVENEW</Card.Header>
      <Card.Body>
        <Card.Title className='display-1 text-center fw-bold'>{totalRevenew >0?processNUmber(totalRevenew):""}$ </Card.Title>
      </Card.Body>
    </Card>
    </Col>


      </div>
    </div>
  )
}

export default Counter