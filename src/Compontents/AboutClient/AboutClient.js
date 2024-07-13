import React from 'react'
import './AboutClient.css';
import picture_8 from '../../Assets/picture_8.png';
export default function AboutClient() {
  return (
    <div className='about-client'>
        <div className="about-client-container">
            <div className="client-container-letf">
            <img src={picture_8} alt="" />

            </div>
            <div className="client-container-rignt">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor sapien et urna tincidunt fringilla. Vivamus at augue interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna. Suspendisse suscipit est et neque.</p>
                <p>Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a, accumsan justo.</p>
                <h2>Siti Sarah</h2>
                <p></p>
            </div>
        </div>
    </div>  
  )
}
