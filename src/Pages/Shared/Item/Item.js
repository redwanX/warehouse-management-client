import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const {_id,email,name,image,desc,quantity,supplier,price,sold} = props.item;
    const isFromInv =  props?.invetory ? true:false;
    const navigate = useNavigate()
    const redirectToUpdate = ()=>{
        navigate(`/inventory/${_id}`);
    }
  return (
    <Col>
      <Card className=" position-relative col-12 col-lg-12 shadow h-100">
        <Card.Img style={{height:"500px"}} variant="top" src={image}/>
        <Card.Body className="pb-5 secondery-bg shadow-sm">
        <Card.Text> 
          <span className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
          <span className='d-block fw-bolder fs-5 primary-text'>{name}</span>
          <span className='d-block lead fs-5 primary-text'>{price}$</span>
          </span>
          {parseInt(quantity) ===0 && isFromInv?<span className='d-block pt-2 text-danger fw-bold fs-4 primary-text'>SOLD OUT!</span>:""}
          { isFromInv?<span className='d-block pt-2 secondery-text fw-bold fs-6'>ID: <span className='fw-light'>{_id}</span></span>:""}
          <span className='d-block secondery-text fw-bold fs-6'>Quantity: <span className='fw-light'>{quantity}</span></span>
          { isFromInv?<span className='d-block secondery-text fw-bold fs-6'>Total Sold: <span className='fw-light'>{sold}</span></span>:""}
          <span className='d-block  my-0 secondery-text fw-bold  fs-6 '>Supllier : <span className='fw-light'>{supplier}</span></span>
          <span>
            <span className='d-block pt-2 fw-bold secondery-text'>Description:</span>
            <span className='d-block fw-light secondery-text'>{desc}</span>
          </span>
          </Card.Text>
          {
           isFromInv?
            ""
            :
            <button  onClick={redirectToUpdate} className=' rounded-bottom position-absolute py-2 btn-dark start-0 bottom-0 w-100'>Update</button>
          }
          
        </Card.Body>
      </Card>
    </Col>

  )
}

export default Item