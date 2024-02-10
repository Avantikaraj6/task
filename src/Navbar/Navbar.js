import React from 'react'
import NavImages from './NavImages'
import NavSearch from './NavSearch'
import NavCart from './NavCart'
import { Row,Container,Col} from 'react-bootstrap'

const Navbar = () => {
  return (
    <Container fluid>
    <Row className="nav-container">
        <Col md={6}>
        <NavImages />
        </Col>
        <Col md={4}>
    <NavSearch />
    </Col>
    <Col md={2}>
    <NavCart />
    </Col>
    </Row>
    </Container>
  )
}

export default Navbar