import React from 'react'
import './ChooseUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import icon_1 from '../../Assets/icon_1.png';
import icon_2 from '../../Assets/icon_2.png';
import icon_3 from '../../Assets/icon_3.png';

export default function ChooseUs() {
  return (
    <div className='choose-us'>
      <div className="choose-container">
        <h2 className='choose-container-fh2'>Why Choose Us?</h2>
        <p className='choose-container-fp'>our services have been trusted by world travelers.</p>
        <div className="choose-arrow">
            <div className="choose-img-left">
                <FontAwesomeIcon  className='choose-icon-left' icon={faCaretLeft}></FontAwesomeIcon>
            </div>
            <div className="choose-img-rignt">
                    <FontAwesomeIcon className='choose-icon-right' icon={faCaretRight}></FontAwesomeIcon>
            </div>
        </div>
        <div className="choose-cart-items">
            <div className="cart-item">
                <img src={icon_1} alt="" />
                <h1>Best Service</h1>
                <p>our service is reliable and convenient, our service is quality.</p>               
           </div>
            <div className="cart-item">
                <img src={icon_2} alt="" />
                <h1>Price Guarantee</h1>
                <p>our service is reliable and convenient, our service is quality.</p>               
           </div>
            <div className="cart-item">
                <img src={icon_3} alt="" />
                <h1>Handpicked Hotels</h1>
                <p>our service is reliable and convenient, our service is quality.</p>               
           </div>
        </div>
      </div>
    </div>
  )
}
