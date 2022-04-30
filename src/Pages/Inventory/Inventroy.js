import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Item from '../Shared/Item/Item';
import Loading from '../Shared/Loading/Loading';

const Inventroy = () => {
  const id=useParams().id;
  const navigate = useNavigate()
  const [item,setItem] = useState({})
  
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/singleProduct/${id}`)
    .then(res=>{
      setItem(res.data);
      setLoading(false);
    })
    .catch(err=>{console.log("error:",err);
    setLoading(false);})
  },
  [])
  
  useEffect(()=>{
    
    axios.put(`http://localhost:5000/update`,item)
    .then(res=>{
    })
    .catch(err=>{console.log("error:",err);})
  },[item])

  if(loading){
    return <Loading></Loading>
  }
  
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
    e.target.quantity.value="";
    const {quantity,...rest}=item;
    const newquantity = parseInt(quantity)+parseInt(inc)
    setItem({...rest,quantity:newquantity})
  }
  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
      <div className='row row-cols-1 g-4 row-cols-lg-2'>
      <Item item={item} invetory={true}></Item>
      <div>
        <h3 className=' mt-5 secondery-text fw-bold text-center'>RESTOCK THE ITEM</h3>
        <Form onSubmit={updateQuantity}>
        <Form.Group className='my-3'>
            <Form.Control className='secondery-bg' min="0" type="number" name="quantity" placeholder="Quantity" required />
          </Form.Group>
        <Button className='btn btn-dark w-100 py-3' type="submit">Update Quantity</Button>
      </Form>

      <h3 className=' mt-5 secondery-text fw-bold text-center'>SELL THIS ITEM</h3>
      <button className='btn btn-dark w-100 py-3' onClick={soldUpdate}>Delivered</button>

      <h3 className=' mt-5 secondery-text fw-bold text-center'>MANAGE OTHER ITEMS</h3>
      <button className='btn btn-dark w-100 py-3' onClick={()=>navigate('/manageInventory')} >Manage Inventory</button>
      </div>
      </div>
    </div>
  )
}

export default Inventroy