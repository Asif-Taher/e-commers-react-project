import React from 'react'
import './ContactInfo.css';
import icon_9 from '../../Assets/icon_9.png';
import icon_10 from '../../Assets/icon_10.png';
import icon_11 from '../../Assets/icon_11.png';
export default function ContactInfo() {
  return (
    <div className="contact-details">
        <div className="contact-details-left">
                <form>
                    <input type="text" placeholder='Your name'/>
                    <input type="email" name="email" id="" placeholder='Enter Your password'/>
                    <input type="text" placeholder='Subject'/>
                    <textarea name="textarea" id="" placeholder='Enter your details'></textarea>
                    <button>Send Message</button>
                </form>
        </div>
        <div className="contact-details-right">
            <h2 className='contact-details-right-h2'>Get In Touch</h2>
            <p className='contact-details-right-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</p>
            <div className="contact-info">
                    <div className="contact-info-left">
                        <div className="contact-info-left-first">
                        <div className="contact-cart">
                            <h2>Lhoksemawe, Aceh</h2>
                            <p><img src={icon_9} alt="" />+01883270...</p>
                            <p><img src={icon_11} alt="" />rakib20@gmail.com</p>
                            <p><img src={icon_10} alt="" />shohid taj uddin ahammed shoroni, bara moghbazar Dhaka-1217 </p>
                            </div>
                           
                        </div>
                        <div className="contact-info-left-second">
                        <div className="contact-cart">
                            <h2>Lhoksemawe, Aceh</h2>
                            <p><img src={icon_9} alt="" />+01883270...</p>
                            <p><img src={icon_11} alt="" />rakib20@gmail.com</p>
                            <p><img src={icon_10} alt="" />shohid taj uddin ahammed shoroni, bara moghbazar Dhaka-1217 </p>
                            </div>
                        </div>

                    </div>
                    <div className="contact-info-right">
                            <div className="contact-info-right-first">
                            <div className="contact-cart">
                            <h2>Lhoksemawe, Aceh</h2>
                            <p><img src={icon_9} alt="" />+01883270...</p>
                            <p><img src={icon_11} alt="" />rakib20@gmail.com</p>
                            <p><img src={icon_10} alt="" />shohid taj uddin ahammed shoroni, bara moghbazar Dhaka-1217 </p>
                            </div>
                            </div>
                            <div className="contact-info-right-second">
                            <div className="contact-cart">
                            <h2>Lhoksemawe, Aceh</h2>
                            <p><img src={icon_9} alt="" />+01883270...</p>
                            <p><img src={icon_11} alt="" />rakib20@gmail.com</p>
                            <p><img src={icon_10} alt="" />shohid taj uddin ahammed shoroni, bara moghbazar Dhaka-1217 </p>
                            </div>
                         </div>
                    </div>
            </div>
        </div>
      </div>
  )
}
