import React from 'react'
import Display from './Display'
import SideBody from './SideBody'
import { Col, Row } from 'react-bootstrap'

const Body = () => {
  return (
    <Row className="body">
        <Col md={8}>
        <Display />
        </Col>
        <Col md={4}>
        <SideBody />
        </Col>
    </Row>
  )
}

export default Body