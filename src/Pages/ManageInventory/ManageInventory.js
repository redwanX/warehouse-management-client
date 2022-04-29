import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from '../Shared/Item/Item'
import Loading from '../Shared/Loading/Loading'

const ManageInventory = () => {
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(res=>{
          setItem(res.data);
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
        {
            item&& item.map(item=><Item item={item}></Item>)
        }
    </div>
  )
}

export default ManageInventory