import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CounterCard = ({color,title,data}) => {
    return (
      
        <Col>
              <Card
              className={`h-100 ${color}-bg text-white mb-2`}
              >
              <Card.Header className='text-center'>{title}</Card.Header>
              <Card.Body>
                  <Card.Title className='fs-1 text-center fw-bold'>{data} </Card.Title>
              </Card.Body>
      </Card>
      </Col>

    )
  }

export default CounterCard