import React from 'react'
import './Breadcrum.css'
import product from '../Assets/product'
const  Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='Breadcrum'>
        HOME <img src='breadcrum_arrow.png' alt='arrow'/> SHOP <img src='breadcrum_arrow.png' alt='arrow'/>
    </div>
  )
}

export default Breadcrum