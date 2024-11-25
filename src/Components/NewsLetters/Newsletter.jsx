import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom'

function Newsletter() {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated </p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <Link  to='/Letters'>
            <button>Subscribe</button>
            </Link>
        </div>
    </div>
  )
}

export default Newsletter