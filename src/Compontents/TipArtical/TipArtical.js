import React from 'react'
import './TipArtical.css';
import picture_19 from '../../Assets/picture_19.png'
export default function TipArtical() {
  return (
    <div className='tip-artical'>
        <div className="tip-artical-container">
            <div className="tip-artical-first">
                <div className=' tip-articl-first-left'>
                <h2>Tips & Article</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
              
                <div className='tip-artical-first-right'>
                    <button>View More</button>
                </div>
            </div>
            <div className="tip-artical-second">
                    <div className="tip-artical-second-left">
                            <div className="tip-artical-cart">
                                <p>Perfect | Tips</p>
                                <h2>9 Popular Travel <br /> Destintion on Sale in 2022</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna</p>
                                <button>Read More</button>
                            </div>
                            <div className="tip-artical-cart">
                                <p>Perfect | Tips</p>
                                <h2>How Are We Going to <br /> Travel in 2022</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna</p>
                                <button>Read More</button>
                            </div>
                    </div>
                    <div className="tip-artical-second-right">
                                <div className="tip-artical-right-cart">
                                    <img className='tip-cart-image' src={picture_19} alt="" />
                                    <p>Stories | Tips</p>
                                    <h2>Travel Stories For Now and the Future</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</p>
                                    <button>Read More</button>
                                </div>
                    </div>
            </div>
        </div>
      
    </div>
  )
}
