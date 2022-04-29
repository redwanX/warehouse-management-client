import React from 'react'

const TableData = (props) => {
    const {_id,image,name,quantity,sold,price,supplier,desc} = props.item;
    const {deleteItem }=props;
    return (
    <tr className='secondery-bg mb-lg-0 mb-5'>
    <td className='fw-normal text-center' data-lebel="ID"><small>{_id}</small></td>
    <td className='fw-normal text-center' data-lebel="Image"><img src={image} style={{width:"75px"}} alt="" /></td>
    <td className='fw-bold text-center' data-lebel="Name">{name}</td>
    <td className='fw-bold text-center' data-lebel="Quantity">{quantity}</td>
    <td className='fw-bold text-center' data-lebel="Sold">{sold}</td>
    <td className='fw-bold text-center' data-lebel="Price">{price}$</td>
    <td className='fw-normal text-center' data-lebel="Supplier">{supplier}</td>
    <td  className='fw-normal'  style={{textAlign:"justify"}} data-lebel="Description "><small>{desc}</small></td>
    <td><button className='btn btn-dark rounded-pill' onClick={()=>deleteItem(_id)}>Delete</button></td>
  </tr>
  )
}

export default TableData