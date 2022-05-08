import React from 'react'

const TableDataActivity = (props) => {
    const {name,date,action} = props.item;
    return (
    <tr className='secondery-bg mb-lg-0 mb-5'>
    <td className='fw-bold text-center' data-lebel="Product Name">{name}</td>
    <td className='fw-bold text-center' data-lebel="Date">{date}</td>
    <td className='fw-bold text-center' data-lebel="Action">{action === 'delete'?<span className=' btn light-text fw-bold bg-danger'>DELETED</span>:<span className=' btn light-text fw-bold bg-success'>ADDED</span>}</td>

  </tr>
  )
}

export default TableDataActivity