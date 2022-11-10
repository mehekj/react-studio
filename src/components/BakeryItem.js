import "../App.css";
import { useState } from "react";

export default function BakeryItem(props) {
  return (
    <div
      className="BakeryItem"
      onPointerDown={(e) => props.addToCart(props.item)}
    >
      <div className="item-img-wrapper">
        <img src={props.item.image} alt=""></img>
      </div>
      <div className="item-text">
        <p>
          <b>{props.item.name}</b>
        </p>
        <p>{props.item.description}</p>
        <p style={{ alignSelf: "flex-end", justifySelf: "flex-end" }}>
          ${props.item.price}
        </p>
      </div>
    </div>
  );
}
