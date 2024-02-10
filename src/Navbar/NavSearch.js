import React from 'react'
import { Row } from 'react-bootstrap'

const NavSearch = () => {
  return (
    <Row className="search-box">
        <input type="text" className="input-box" placeholder="Try searching 'T-shirts'"/>
        <img className="search-icon" src="https://cdn.vectorstock.com/i/1000x1000/27/83/search-flat-violet-color-icon-vector-6082783.webp" />
   </Row>
  )
}

export default NavSearch