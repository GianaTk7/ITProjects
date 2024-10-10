import React from 'react'
import './location.css'
const Locations=() =>{
    return (
        <div className="location-container">
          <h1>Our Location</h1>
          <div className="location-map">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354342086184!2d144.95605431581392!3d-37.816279742021536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b8d9b5%3A0x499dd8b2ff7d7c0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1632979812121!5m2!1sen!2sau"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="location-details">
            <h2>Visit Us</h2>
            <p>26 Greyville Alberton</p>
            <p>Phone: 0680108268</p>
            <p>Email: info@company.com</p>
          </div>
        </div>
      );
}

export default Locations