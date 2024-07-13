import React from 'react'
import './AboutGroup.css';
import icon_15 from '../../Assets/icon_15.png';
import icon_16 from '../../Assets/icon_16.png';
import icon_17 from '../../Assets/icon_17.png';
import icon_18 from '../../Assets/icon_18.png';
export default function AboutGroup() {
  return (
    <div className='about-group'>
        <div className="about-group-container">
            <div className="about-group-first">
                <img src={icon_15} alt="" />
                <div className="about-group-right">
                    <h2>126 +</h2>
                    <p>Satisfied Client</p>
                </div>
            </div>
            <div className="about-group-first">
                <img src={icon_16} alt="" />
                <div className="about-group-right">
                    <h2>250 +</h2>
                    <p>New Traveller</p>
                </div>
            </div>
            <div className="about-group-first">
                <img src={icon_17} alt="" />
                <div className="about-group-right">
                    <h2>230 +</h2>
                    <p>Destination</p>
                </div>
            </div>
            <div className="about-group-first">
                <img src={icon_18} alt="" />
                <div className="about-group-right">
                    <h2>230 +</h2>
                    <p>Award</p>
                </div>
            </div>
        </div>
    </div>
  )
}
