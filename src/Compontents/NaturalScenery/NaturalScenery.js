import React from 'react'
import './NaturalScenary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import picture_1 from '../../Assets/picture_1.png';
import picture_2 from '../../Assets/picture_2.png';
import picture_3 from '../../Assets/picture_3.png';

export default function NaturalScenery() {
  return (
    <div className='natural-scenary'>
        <h2 className='natural-scenary-h2'>Explore new worlds with <br />exotic natural scenery</h2>
        <hr />
        <p className='natural-scenary-p'>Explore the world with what you love beautiful natural beauty.</p>
        <hr />
        <div className="natural-scenary-arrow">
            <div className="arrow-img-left">
                <FontAwesomeIcon  className='icon-left' icon={faCaretLeft}></FontAwesomeIcon>
            </div>
            <div className="arrow-img-rignt">
                    <FontAwesomeIcon className='icon-right' icon={faCaretRight}></FontAwesomeIcon>
            </div>
        </div>
        <div className="natural-scenary-image">
            <img src={picture_1} alt="" />
            <div className="middle-img">
                <img src={picture_2} alt="" />
                <h2>Bali, Indonesia.</h2>
                <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
            </div>
            <img src={picture_3} alt="" />
        </div>
    </div>
  )
}
