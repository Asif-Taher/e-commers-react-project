import React from "react";
import "./UnforgettableMoment.css";
import picture_9 from "../../Assets/picture_9.png";
import picture_10 from "../../Assets/picture_10.png";
import picture_11 from "../../Assets/picture_11.png";
import picture_12 from "../../Assets/picture_12.png";
export default function UnforgettableMoment() {
  return (
    <div className="unforgettable-moment">
        <p>Gellary</p>
        <h2>Unforgettable moment</h2>
      <div className="unforgettable-moment-container">
        <div className="unforgettable-left">
          <img src={picture_9} alt="" />
        </div>
        <div className="unforgettable-right">
          <img src={picture_10} alt="" />
          <div className="ufforgetable-right-first">
            <div className="left">
              <img src={picture_11} alt="" />
            </div>
            <div className="right">
              <img src={picture_12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
