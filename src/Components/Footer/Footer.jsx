import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer-container">
      <div className="footer-holder">
        <div className="Contact-div">
          <h1>
            Don't Miss <span id="out">Out</span>
          </h1>
          <p>"Style that speaks, quality that lasts."</p>
          <div className="form-div">
            <form>
              <input
                type="text"
                name="email"
                placeholder="email"
                id="emailbox"
              />
              <input type="date" name="date" placeholder="Date" id="date" />
            </form>
          </div>
          <div className="comment-section">
            <label htmlFor="comment" id="comment-text">
              Add a Comment:
            </label>
            <input
              type="text"
              id="commentbox"
              name="comment"
              placeholder="Write your comment here..."
            />
            <br />
            <button type="submit">Submit</button>
          </div>
          <p id="store-text">
            "Quality you can trust, service you can rely on." "Bringing joy to
            your doorstep, one product at a time." "Where every detail matters
            and customers come first."
          </p>
        </div>

        <div className="Credetails-div">
          <div className="Credetails">
            <h1 className="contacttext">Company</h1>
            <h3>Expert and Spokenmodels</h3>
            <h3>Address: 23 Greyville Alberton</h3>
          </div>
          <div className="Credetails">
            <h1 className="contacttext">Customer Service</h1>
            <h3>Contact Us: 0680108268</h3>
            <h3>Email: Jmstore@gmail.com</h3>
            <h3>Redeem rewards</h3>
          </div>
          <div className="Credetails">
            <h1 className="contacttext">About Us</h1>
            <h3>
              "Welcome to JM Store, where fashion meets passion! Established
              in 2024, we set out to create a unique shopping experience
              that celebrates style, comfort, and individuality."
            </h3>
          </div>
        </div>
      </div>
      <div className="media-handing-div">
        <div className="media-links">
        <FaInstagram size={20} />
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
        <FaYoutube size={20} />
        </div>
      </div>
      <div className="copyright-bottom-div">
      <p>© 2024 [JM Store]. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
