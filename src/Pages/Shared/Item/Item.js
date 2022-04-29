import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const {_id,email,name,image,desc,quantity,supplier,price} = props.item;
    const navigate = useNavigate()
    const redirectToUpdate = ()=>{
        navigate(`/inventory/${_id}`);
    }
  return (
    <Col>
      <Card className=" position-relative col-12 col-lg-12 shadow h-100">
        <Card.Img style={{height:"400px"}} variant="top" src={image}/>
        <Card.Body className="mb-5 secondery-bg shadow-sm">
        <Card.Text> 
          <span className='d-flex justify-content-between'>
          <span className='d-block fw-bold fs-5 secondery-text'>{name}</span>
          <span className='d-block  fs-5 primary-text'>{price}</span>
          </span>
          <span className='d-block  my-0 secondery-text fw-bold fs-6'>Supllier: {supplier}</span>
          <span className='d-block  secondery-text fw-bold fs-6'>Quantity: {quantity}</span>
          <span>
            <small className='d-block'>{desc}</small>
          </span>
          </Card.Text>
          <button  onClick={redirectToUpdate} className=' rounded-bottom position-absolute py-2 btn-dark start-0 bottom-0 w-100'>Update</button>
        </Card.Body>
      </Card>
    </Col>

  )
}

export default Item