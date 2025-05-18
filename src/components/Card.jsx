import React from 'react';
import '../design/CardOne.css';
import { TbWorldCode } from "react-icons/tb";

const Card = () => {
  return (
    <div className="card">
      <div className="first-content">
        <span><TbWorldCode/></span>
      </div>
      <div className="second-content">
        <span>Web Dev</span>
      </div>
    </div>
  );
}

export default Card;
