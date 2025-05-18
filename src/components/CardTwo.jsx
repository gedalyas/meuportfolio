import React from 'react';
import '../design/CardTwo.css';
import { GoGraph } from "react-icons/go";

const CardTwo = () => {
  return (
    <div className="card-two">
      <div className="one-content">
        <span><GoGraph/></span>
      </div>
      <div className="two-content">
        <span>Data Scientist</span>
      </div>
    </div>
  );
}

export default CardTwo