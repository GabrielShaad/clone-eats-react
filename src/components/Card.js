import React from "react";
import { Link } from "react-router-dom";

function Card({ id, img, title, category }) {
  return (
    <Link to={`/${id}`} className="place">
      <div style={{ backgroundImage: `url(/assets/${img})` }} />
      <h3>{title}</h3>
      <h4>{category}</h4>
    </Link>
  );
}

export default Card;
