import React from 'react'
import Item from '../../Shared/Item/Item'
import { useNavigate } from 'react-router-dom';

const HomeInventory = ({homeItem}) => {
  const navigate = useNavigate()

  return (
    <div id="items" className='container py-5'>
        <h1 className=' py-3 secondery-text fw-bolder text-center'>ITEMS</h1>
        <hr></hr>
        <div className='mb-3  g-4 row row-cols-1 row-cols-lg-3'>
        {
            homeItem && homeItem.slice(0,6).map(item=><Item key={item._id} item={item}></Item>)
        }
        </div>
        <div className='w-100 mb-3 d-flex justify-content-center'>
        <button className='btn btn-dark rounded-pill fw-bold px-3 py-2 my-2 mx-auto ' onClick={()=>navigate('/manageInventory')} >Manage Inventory</button>
        </div>
    </div>
  )
}

export default HomeInventory