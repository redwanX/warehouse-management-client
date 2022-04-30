import React, { useEffect, useState } from 'react'
import Item from '../../Shared/Item/Item'
import Loading from '../../Shared/Loading/Loading'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useProdutcs from '../../../Hooks/useProducts/useProdutcs';

const HomeInventory = () => {
  const navigate = useNavigate()
  const [homeItem,loading,setHomeItem] = useProdutcs("redwanistbd@gmail.com")
  return (
    <div id="items" className='container'>
        <h1 className=' my-3 secondery-text fw-bolder text-center'>ITEMS</h1>
        <hr></hr>
        {
          loading?<Loading></Loading>:""
        }
        <div className='mb-3  g-4 row row-cols-1 row-cols-lg-3'>
        {
            homeItem && homeItem.map(item=><Item key={item._id} item={item}></Item>)
        }
        </div>
        <div className='w-100 mb-3 d-flex justify-content-center'>
        <button className='btn btn-dark rounded-pill fw-bold px-3 py-2 my-2 mx-auto ' onClick={()=>navigate('/manageInventory')} >Manage Inventory</button>
        </div>
    </div>
  )
}

export default HomeInventory