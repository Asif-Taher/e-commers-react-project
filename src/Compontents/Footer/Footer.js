import React from 'react'
import './Footer.css';
import footer_logo from '../../Assets/footer_logo.png';
import icon_9 from '../../Assets/icon_9.png';
import icon_10 from '../../Assets/icon_10.png';
import icon_11 from '../../Assets/icon_11.png';
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-first">
      <h2>Subcribe to get special price</h2>
        <p>Dont wanna miss something? subscribe right now and get special <br /> promotion and monthly newsletter</p>
        <div className="footer-first-input">
          <input type="text" placeholder='Enter your email'/>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-second">
            <div className="footer-sceond-img">
              <img className='footer-logo' src={footer_logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque pharetra condimentum.</p>
            </div>
            <div className="footer-second-contact">
              <h2>Contact Information</h2>
              <p><img src={icon_10} alt="" />383 shohid taj uddin ahammend shoroni, Dhaka</p>
                <p><img src={icon_9} alt="" />016271619...</p>
                <p><img src={icon_11} alt="" />info@info.com</p>
            </div>
            <div className="footer-second-quicklink">
              <h2>Quick Link</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tours</li>
                <li>Contact</li>
              </ul>
            </div>
      </div>
      <div className="footer-thired">
          <p>Copyright © All rights reserved (Website Developed & Managed by creativechroma)</p>
      </div>
       
        
    </div>
  )
}
