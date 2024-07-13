import React from 'react'
import './TourPartner.css';
import icon_4 from '../../Assets/icon_4.png';
import icon_5 from '../../Assets/icon_5.png';
import icon_6 from '../../Assets/icon_6.png';
import icon_7 from '../../Assets/icon_7.png';
import icon_8 from '../../Assets/icon_8.png';
export default function TourPartner() {
  return (
    <div className='tour-partner'>
      <div className="tour-container">
        <h2>Our tour partner</h2>
        <p>There are many variation of passage of lorem ipsum available but the majority have suffered alteration </p>
        <div className="tour-logo-item">
            <img src={icon_4} alt="" />
            <img src={icon_5} alt="" />
            <img src={icon_6} alt="" />
            <img src={icon_7} alt="" />
            <img src={icon_8} alt="" />
        </div>
      </div>
    </div>
  )
}
