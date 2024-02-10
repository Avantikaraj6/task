import React from "react";
import "./Navbar.css";
import { Row,Col } from "react-bootstrap";
const NavImages = () => {
  return (
    <Row className="nav-div">
        <Col md={2}>
      <img 
      className="nav-logo"
      src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jv0awjqlyz34qayxikwn" />
     </Col>
     <Col md={10}>
      <ul className="nav-items">
        <li>NEW ARRIVALS</li>
        <li>MEN</li>
        <li>WINTER COLLECTION</li>
        <li>SHOP BY MERCH</li>
        <li>UNISEX</li>
      </ul>
      </Col>
    </Row>
  );
};

export default NavImages;
