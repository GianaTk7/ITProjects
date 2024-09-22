import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated </p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter