import React, { useEffect, useState } from 'react'
import Item from '../../Shared/Item/Item'
import Loading from '../../Shared/Loading/Loading'

const HomeInventory = () => {
  const [homeItem,setHomeItem] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
      fetch('items.json')
      .then(res=>res.json())
      .then(data=>{
        setHomeItem(data);
        setLoading(false);
      })
  },
  [homeItem])
  
  return (
    <div className='container'>
        <h1 className=' my-3 secondery-text fw-bolder text-center'>ITEMS</h1>
        <hr></hr>
        {
          loading?<Loading></Loading>:""
        }
        <div className='mb-3 mx-auto g-4 row row-cols-1 row-cols-lg-3'>
        {
            homeItem&& homeItem.map(item=><Item key={item._id} item={item}></Item>)
        }
        </div>
    </div>
  )
}

export default HomeInventory