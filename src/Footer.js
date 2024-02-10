import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first">
        <div>
          <h1>
            JOIN OUR
            <br />
            VEIRDO FAM
          </h1>
          <p>
            Here is the space for marketing bro's to use some combination of
            <br />
            alphabets to convince people to give on their mail.
          </p>
        </div>
        {/* <div className="footer-input">
          <input type="text" placeholder="vierdo@yahoo.com" />
          <span>
            <button className="subscribe-btn">SUBSCRIBE</button>
          </span>
        </div> */}
        
      </div>
      <div className="social-media">
            <li>INSTAGRAM</li>
            <li>LINKEDIN</li>
            <li>WHATSAPP</li>
            <li>TWITTER</li>
        </div>
        <div className="categories">
      <div>
        <h5>CATEGORIES</h5>
        <div>
            <li>NEW ARRIVALS</li>
            <li>BESTSELLERS</li>
            <li>WINTER WEAR</li>
            <li>T-SHIRTS</li>
            <li>SHORTS</li>
        </div>
        
      </div>
      <div>
        <li>SWEATSHIRTS</li>
        <li>T-SHIRTS</li>
        <li>VEST</li>
        <li>OVERSIZED T-SHIRTS</li>
        <li>UNISEX</li>
        </div>
      <div>
        <h5>COMPANY</h5>
        <div>
            <li>ABOUT US</li>
            <li>BLOG</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>
            <li>WORK WITH US</li>
        </div>
      </div>
      <div>
        <h5>FOR CUSTOMERS</h5>
        <div>
            <li>CONTACT US</li>
            <li>FAQ'S</li>
            <li>TRACK ORDER</li>
            <li>RETURN POLICY</li>
            <li>SHIPPING POLICY</li>
        </div>
      </div>
      </div>
        
      <p className="copyright-text">@2023 VIERDO, All Rights Reseved by Pratyaya E-Commerce Pvt. Ltd.</p>
    </div>
  );
};

export default Footer;
