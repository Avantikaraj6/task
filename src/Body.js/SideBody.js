import React from "react";
import "./Body.css";
import Product from "./Product";
const SideBody = () => {
  return (
    <div className="side-body">
      <div className="price-div">
        <h2>
          $1,299 <span className="dis-price">$2499</span>
          <spna className="offer-price">20% OFF</spna>
        </h2>
        <p className="title-text">Flower Printed Oversized Fit</p>
        <div className="rating">
          <img
            className="star"
            src="https://as1.ftcdn.net/v2/jpg/04/78/52/52/1000_F_478525224_iSfNZgIrE4bkDVQv4yDmqVdcv3NIoK7H.jpg"
          />
          <h5>4.5 <span>2k</span></h5>
        </div>
      </div>
      <div>
        <h3 className="side-head">OFFERS</h3>
        <div className="offers-container">
        <div className="Offer-div">
          <div className="offer-image"><img src="https://www.onlygfx.com/wp-content/uploads/2017/03/best-price-sticker-300x300.png" /></div>
          <div className="offer-text">
            <h6>Buy 2 tees at just $699</h6>
            <p>Add any two tees to the cart to avail</p>
          </div>
          <div className="item">
            <h6>1/3</h6>
          </div>
        </div>

        <div className="Offer-div">
          <div className="offer-image"><img src="https://www.onlygfx.com/wp-content/uploads/2017/03/best-price-sticker-300x300.png" /></div>
          <div className="offer-text">
            <h6>Buy 2 tees at just $699</h6>
            <p>Add any two tees to the cart to avail</p>
          </div>
          <div className="item">
            <h6>1/3</h6>
          </div>
        </div>
      </div>
      </div>

      <div>
        <h3 className="side-head">COLOR-BEIGE</h3>
        <div className="carousel-img">
            <img src="https://veirdo.in/cdn/shop/files/1_134bf658-42b5-4fdd-8755-394ddac259a8_375x.progressive.jpg?v=1707376663" />
            <img src="https://veirdo.in/cdn/shop/files/1_95a41507-fe1f-45fe-90d7-32d2aeb4711b_375x.progressive.jpg?v=1707375074" />
            <img src="https://veirdo.in/cdn/shop/files/Travel-to-meet-yourself-Print-Blue-Oversize-Tshirt-Veirdo-781_375x.progressive.jpg?v=1707167910" />
            <img src="https://veirdo.in/cdn/shop/files/1_82ac4d96-0c90-4d76-85ca-73fe7ebc1837_375x.progressive.jpg?v=1707377479" />
            <img src="https://veirdo.in/cdn/shop/files/1_768bda1c-0c88-4b29-b69d-7b9f1d232ee1_375x.progressive.jpg?v=1707377614" />
            {/* <img src="https://veirdo.in/cdn/shop/files/2_232ea69e-bed2-4579-8787-b4b64abfd96c_319x.progressive.jpg?v=1707377217" />
            <img src="https://veirdo.in/cdn/shop/files/1_a4b49d31-52cd-4d1d-ac69-dc458c13161b_375x.progressive.jpg?v=1707377724" /> */}
        </div>
        <div>
            <div className="size-guide">
            <h3 className="side-head">SELECT SIZE</h3>
            <h5 className="side-head">SIZE GUIDE</h5>
            </div>
            <div className="size-button">
            <button>28</button>
            <button>30</button>
            <button>32</button>
            <button>34</button>
            <button>36</button>
            <button>38</button>
            <button>40</button>
            <button>42</button>
            </div>
        </div>
       
      </div>
      <div className="add-cart">
            <button>ADD TO CART</button>
        </div>
        <div className="delivery-details">
            <h3 className="side-head">CHECK FOR DELIVERY DETAILS</h3>
            <input type="text" placeholder="ENTER PINCODE" /><span><button>CHECK</button></span>
        </div>
        <Product />
    </div>
  );
};

export default SideBody;
