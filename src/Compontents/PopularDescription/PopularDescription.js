import React from 'react'
import './PopularDescription.css';
import { popular_des } from '../../Assets/Assets';
import PackageCart from '../../Cart/PackageCart';

export default function PopularDescription() {
  return (
    <div className='popular-description'>
      <div className="popular-description-container">
        <div className="popular">
            <div className="popular-left">
            <h2>Popular Destination</h2>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className="popular-right">
                <button>Discover More</button>
            </div>   
        </div>

        <div className='popular-cart'>
        {
            popular_des.map(item=> <PackageCart
            key = {item.id}
            item = {item} 
            ></PackageCart> )
        }
        </div>
       
        
      </div>
    </div>
  )
}
