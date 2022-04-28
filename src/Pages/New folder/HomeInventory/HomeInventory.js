import React, { useEffect, useState } from 'react'
import Item from '../../Shared/Item/Item'

const HomeInventory = () => {
  const [homeItem,setHomeItem] = useState([])
  useEffect(()=>{
      fetch('items.json')
      .then(res=>res.json())
      .then(data=>setHomeItem(data))
  },
  [homeItem])
  
  return (
    <div>
        <h1 className='secondery-text fw-bolder text-center'>ITEMS</h1>
        <hr></hr>
        <div className='mb-3 container mx-auto g-4 row row-cols-1 row-cols-lg-3'>
        {
            homeItem&& homeItem.map(item=><Item key={item._id} item={item}></Item>)
        }
        </div>
    </div>
  )
}

export default HomeInventory