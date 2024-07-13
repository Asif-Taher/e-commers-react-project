import React from "react";
import "./PackageCart.css";
import icon_19 from "../Assets/icon_19.png";
export default function PackageCart(props) {
  const { id, name, date, description, image } = props.item;
  return (
    <div className="package-cart">
      <img className="cart-image" src={image} alt="" />
      <div className="package-cart-top">
        <h2>{name}</h2>
        <p>{date}</p>
      </div>
      <div className="package-cart-middle">
        <p>
          <small>{description}</small>
        </p>
      </div>
      <div className="package-cart-bottom">
        <div>
          <img src={icon_19} alt="" />
          <img src={icon_19} alt="" />
          <img src={icon_19} alt="" />
          <img src={icon_19} alt="" />
        </div>
        <button>Booking Now</button>
      </div>
    </div>
  );
}
