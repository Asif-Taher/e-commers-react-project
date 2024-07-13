import React from 'react'
import './AboutTeam.css';
import icon_12 from '../../Assets/icon_12.png';
import icon_13 from '../../Assets/icon_13.png';
import icon_14 from '../../Assets/icon_14.png';
export default function AboutTeam() {
  return (
    <div className='about-team'>
      <div className="about-team-container">
        <div className="about-team-cart">
            <img src={icon_12} alt="" />
            <h2>Great team work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. </p>
       </div>
        <div className="about-team-cart">
            <img src={icon_13} alt="" />
            <h2>Great team work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. </p>
       </div>
        <div className="about-team-cart">
            <img src={icon_14} alt="" />
            <h2>Great team work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. </p>
       </div>
      </div>
    </div>
  )
}
