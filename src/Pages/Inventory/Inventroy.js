import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Item from '../Shared/Item/Item';
import Loading from '../Shared/Loading/Loading';

const Inventroy = () => {
  const id=useParams().id;
  const [item,setItem] = useState({})
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    axios.get(`http://localhost:5000/singleProduct/${id}`)
    .then(res=>{
      setItem(res.data);
      setLoading(false);
    })
  },
  [])
  
  useEffect(()=>{
    axios.put(`http://localhost:5000/Update`,item)
    .then(res=>{
    })
  },[item])
  
  const soldUpdate = ()=>{
      const {quantity,sold,...rest}=item;
      const newQuantity = parseInt(quantity)-1;
      const newSold = parseInt(sold)+1;
      if(newQuantity>=0){
        setItem({...rest,quantity:newQuantity,sold:newSold});
      }else{
        toast("OUT OF STOCK");
      }
  }


  const updateQuantity =(e)=>{
    e.preventDefault();
    const inc=e.target.quantity.value;
    const {quantity,...rest}=item;
    const newquantity = parseInt(quantity)+parseInt(inc)
    setItem({...rest,quantity:newquantity})
  }
  return (
    <div className='container mb-3'>
      {
        loading?
        <Loading></Loading>
        :
        ""
      }
      <div className='row row-cols-1 g-4 row-cols-lg-2'>
      <Item item={item} invetory={true}></Item>
      <div>
        <button className='btn btn-dark w-100 py-3' onClick={soldUpdate}>Delivered</button>
        <Form onSubmit={updateQuantity}>
        <Form.Group className='mt-3'>
            <Form.Control className='secondery-bg' type="number" name="quantity" placeholder="Quantity" required />
          </Form.Group>
        <Button className='btn btn-dark w-100 py-3' type="submit">Update Quantity</Button>
      </Form>
      </div>
      </div>
    </div>
  )
}

export default Inventroy