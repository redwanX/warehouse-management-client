import React from 'react'
import { useNavigate } from 'react-router-dom';

const TableData = (props) => {
    const {_id,image,name,quantity,sold,price,supplier,desc} = props.item;
    const {deleteItem }=props;
    const myItems = props?.myItems?props.myItems:false;
    const navigate = useNavigate()
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
    <td className='flex-column align-items-center justify-content-center'><button className='btn btn-dark mb-1  w-100' onClick={()=>deleteItem(_id)}>Delete</button>
    {myItems?<button className='btn btn-dark  w-100' onClick={()=>navigate(`/inventory/${_id}`)}>Update</button>:""}
    </td>
  </tr>
  )
}

export default TableData