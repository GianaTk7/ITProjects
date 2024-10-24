import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer-div">
      <div className="footer-logo">
        <img src="logo_big.png" alt="footer" />
        <p>JM Store</p>
      </div>
      <ul className="Footer-links">
        <div className="contact">
          <li>Company</li>
          <p>JM</p>
          <p>Partnerships</p>
        </div>

        <div className="contact" id="storeitems">
          <li>Products</li>
          <p>clothes</p>
          <p>for all</p>
        </div>

        <div className="contact">
          <li>offices</li>
          <p> 26 greyville Alberton </p>
          <p>code:2804</p>
        </div>
        <div className="contact">
          <li>About Us</li>
          <p>Started since</p>
          <p>2018/05/7</p>
        </div>
        <div className="contact">
          <li>Contact</li>
          <p>Email:Jmgenia@gmail.com</p>
          <p>0680108268</p>
        </div>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href ="https://www.instagram.com/archive3x/?hl=en">
          <img src="instagram_icon.png" alt="Instagram Icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://za.pinterest.com/search/pins/?q=clothes&rs=typed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="pintester_icon.png" alt="Pinterest Icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <img src="whatsapp_icon.png" alt="whatApp Icon" />
        </div>
      </div>
      <div className="footer-copyright-div">
        <hr />
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
