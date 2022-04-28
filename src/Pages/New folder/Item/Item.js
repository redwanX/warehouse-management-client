import React from 'react'
import { Card, Col } from 'react-bootstrap';

const Item = (props) => {
    const {_id,email,name,image,desc,quantity,supplier,price} = props.item;
  return (
    <Col>
      <Card className="col-12 col-lg-12 shadow h-100">
        <Card.Img className='h-100' variant="top" src={image}/>
        <Card.Body className="shadow-sm border border-top">
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
        </Card.Body>
      </Card>
    </Col>

  )
}

export default Item