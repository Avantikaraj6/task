import React from "react";
import Progressbar from "./Progressbar";
import { Row, Col } from "react-bootstrap";
import "./Product.css";
import "./Body.css";
import { Collapse } from "bootstrap";
const Product = () => {
  return (
    <>
      <div className="product-container">
        <h3 className="side-head">PRODUCT INFORMATION</h3>
        <Row className="product-block">
          <Col>
            <img src="https://scontent.fdbd5-1.fna.fbcdn.net/v/t39.30808-6/294777821_443014171168123_813635475802266012_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kgnOFrn66csAX8qOa5J&_nc_ht=scontent.fdbd5-1.fna&oh=00_AfCO06OyJol7QDR_PmOkoXzVtBp2Z1A5Yeif6wPBw4J05w&oe=65CB2A34" />
          </Col>
          <Col className="product-desc">
            <h5>Product Description</h5>
            <p>Manufacture,Care and Fit</p>
          </Col>
          <Col md={2}>
          <button>+</button>
          </Col>
        </Row>
        <Row  className="product-block">
          <Col>
            <img src="https://scontent.fdbd5-1.fna.fbcdn.net/v/t39.30808-6/294777821_443014171168123_813635475802266012_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kgnOFrn66csAX8qOa5J&_nc_ht=scontent.fdbd5-1.fna&oh=00_AfCO06OyJol7QDR_PmOkoXzVtBp2Z1A5Yeif6wPBw4J05w&oe=65CB2A34" />
          </Col>
          <Col className="product-desc">
            <h5>Free Shipping</h5>
            <p>We offer free shipping across India</p>
          </Col>
          <Col md={2}>
          <button>+</button>
          </Col>
        </Row>
        <Row className="product-block">
          <Col>
            <img src="https://scontent.fdbd5-1.fna.fbcdn.net/v/t39.30808-6/294777821_443014171168123_813635475802266012_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kgnOFrn66csAX8qOa5J&_nc_ht=scontent.fdbd5-1.fna&oh=00_AfCO06OyJol7QDR_PmOkoXzVtBp2Z1A5Yeif6wPBw4J05w&oe=65CB2A34" />
          </Col>
          <Col className="product-desc">
            <h5>14 Days Returns & Exchange</h5>
            <p>Know about return & exchange policy</p>
          </Col>
          <Col md={2}>
          <button>+</button>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="side-head">CUSTOMER RATING AND REVIEWS</h3>
        <div className="customer-review">
          <div>
            <h1>4.0</h1>
            <h5>84 reviews</h5>
            <div className="star-rating">
              {[...Array(5)].map((ele, i) => {
                return (
                  <div>
                    {" "}
                    <img
                      className="star"
                      src="https://as1.ftcdn.net/v2/jpg/04/78/52/52/1000_F_478525224_iSfNZgIrE4bkDVQv4yDmqVdcv3NIoK7H.jpg"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="progressBar">
            <Progressbar progress="30" />
            <Progressbar progress="80" />
            <Progressbar progress="60" />
            <Progressbar progress="20" />
            <Progressbar progress="10" />
          </div>
        </div>
      </div>
      <div className="review-section">
        <p>Shravya BR <span><img className="verify-logo"src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"/>Verfified Buyer</span><span className="time-text"> 7 months Ago</span></p>
        <div className="rating">
          <img
            className="star"
            src="https://as1.ftcdn.net/v2/jpg/04/78/52/52/1000_F_478525224_iSfNZgIrE4bkDVQv4yDmqVdcv3NIoK7H.jpg"
          />
          <h5>4| Powder Blue, Size L</h5>
        </div>
        <p><p>Superb Product Great Quality and nice design. Will buy more products from Veirdo.</p></p>
        <div className="reviw-img">
        <img src="https://veirdo.in/cdn/shop/files/1_134bf658-42b5-4fdd-8755-394ddac259a8_375x.progressive.jpg?v=1707376663" />
            <img src="https://veirdo.in/cdn/shop/files/1_95a41507-fe1f-45fe-90d7-32d2aeb4711b_375x.progressive.jpg?v=1707375074" />
            <img src="https://veirdo.in/cdn/shop/files/Travel-to-meet-yourself-Print-Blue-Oversize-Tshirt-Veirdo-781_375x.progressive.jpg?v=1707167910" />
            </div>
      </div>
    </>
  );
};

export default Product;
