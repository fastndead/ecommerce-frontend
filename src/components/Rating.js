import React from "react";
import "./Rating.scss";

function Rating({ rating }) {
  return (
    <div className="rating">
        <div className={ rating >= 1 ? "checked-star" : "unchecked-star"}></div>
        <div className={ rating >= 2 ? "checked-star" : "unchecked-star"}></div>
        <div className={ rating >= 3 ? "checked-star" : "unchecked-star"}></div>
        <div className={ rating >= 4 ? "checked-star" : "unchecked-star"}></div>
        <div className={ rating >= 5 ? "checked-star" : "unchecked-star"}></div>
    </div>
  );
}

export default Rating;
