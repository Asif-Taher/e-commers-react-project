import React from 'react'
import './Hero.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-container">
                <h2>Make in your journey.</h2>
                <p>Explore the world with what you love beautiful natural beauty.</p>
                <div className="hero-container-input">
                    <ul className='hero-ul'>
                        <li>Location <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></li>
                        <li>Date <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></li>
                        <li>People <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></li>
                    </ul>
                    <button>Explore Now</button>
                </div>
        </div>
    </div>
  )
}
