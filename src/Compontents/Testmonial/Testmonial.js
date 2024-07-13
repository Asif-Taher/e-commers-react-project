import React, { useState } from 'react'
import './Testmonial.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { cart_list } from '../../Assets/Assets';
import TestmonialCart from '../../Cart/TestmonialCart';


export default function Testmonial() {

  return (
    <div className='testmonial'>
        <div className="testmonial-one">
        <h4>TESTIMONIAL</h4>
      <h1>What our client say</h1>
      <p>Create  a visual identity for your company and a overall brand</p>
        </div>
     <div className="testmonial-two">
        <div className="textmonial-left">
        <FontAwesomeIcon className='textmonial-left-icon' icon={faCaretLeft}></FontAwesomeIcon>
        </div>
        <div className="textmonial-right">
            <FontAwesomeIcon className='textmonial-left-icon' icon={faCaretRight}></FontAwesomeIcon>
        </div>
     </div>

        <div className="testmonial-three">
            {
                cart_list.map(item=><TestmonialCart
                key = {item.id}
                item = {item} 
                ></TestmonialCart>
                  
                )
            }
        </div>

    </div>
  )
}
