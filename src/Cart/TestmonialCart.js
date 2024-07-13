import React from 'react'
import './TestmonialCart.css';
export default function TestmonialCart(props) {
    const {name,image,description,hoby} = props.item;
  return (
    <div className='testmonial-cart'>
        <div className="testmonial-cart-item">
            <img className='testmonial-img' src={image} alt="" />
            <h2>{name}</h2>
            <p>{hoby}</p>
            <p>{description}</p>
        </div>
      
    </div>
  )
}
