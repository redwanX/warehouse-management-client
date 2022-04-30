import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CounterCard = ({color,title,data}) => {
    return (
      <div>
          <Col>
              <Card
              className={`h-100 ${color}-bg text-white mb-2`}
              >
              <Card.Header className='text-center'>{title}</Card.Header>
              <Card.Body>
                  <Card.Title className='display-1 text-center fw-bold'>{data} </Card.Title>
              </Card.Body>
      </Card>
      </Col>
      </div>
    )
  }

export default CounterCard