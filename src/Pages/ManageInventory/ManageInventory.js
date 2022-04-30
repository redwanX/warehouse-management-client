import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useProdutcs from '../../Hooks/useProducts/useProdutcs'
import Loading from '../Shared/Loading/Loading'
import TableData from '../TableData/TableData'
import './TableData.css'
const ManageInventory = () => {
    const navigate = useNavigate()
    const [items,loading,setItems] = useProdutcs();
    if(loading){
      return <Loading></Loading>
    }
    const deleteItem = (id)=>{
        const confirm = window.confirm("Confirm Delete This Item?");
        if(confirm){
          console.log("confirmed");
        axios.delete(`http://localhost:5000/deteteItem/${id}`)
        .then(res=>{
          toast("Item Deleted Succesfully!")
          setItems(items.filter((item)=>item._id !==id));
        })
        }
    }


  return (
    <div  style={{minHeight: 'calc(100vh - 116px - 74px)'}} className='container mb-3'>
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
      {items.map(item=><TableData key={item._id} deleteItem={deleteItem} item={item}></TableData>)}
  </tbody>
</Table>

    </div>
  )
}

export default ManageInventory