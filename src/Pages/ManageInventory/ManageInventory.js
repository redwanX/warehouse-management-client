import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Item from '../Shared/Item/Item'
import Loading from '../Shared/Loading/Loading'
import TableData from '../TableData/TableData'
import './TableData.css'
const ManageInventory = () => {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(res=>{
          setItems(res.data);
          setLoading(false);
        })
    },
    [])
  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
        {
            loading?<Loading></Loading>:""
        }
        <div className='d-flex justify-content-end'>
        <button className='btn btn-dark rounded-pill fw-bold px-3 py-2 my-2 ' onClick={()=>navigate('/addItem')} >Add Item +</button>
        </div>
        


<Table bordered hover className='table mt-3'>
  <thead className='text-center'>
    <tr>
      <th>ID</th>
      <th>Image</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Sold</th>
      <th>Price</th>
      <th>Supplier</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {items.map(item=><TableData key={item._id} item={item}></TableData>)}
  </tbody>
</Table>

    </div>
  )
}

export default ManageInventory