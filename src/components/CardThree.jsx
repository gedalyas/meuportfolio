import React from 'react';
import '../design/CardThree.css';
import { AiFillOpenAI } from "react-icons/ai";

const CardThree = () => {
  return (
    <div className="card-three">
      <div className="on-content">
        <span><AiFillOpenAI/></span>
      </div>
      <div className="tw-content">
        <span>IA developer</span>
      </div>
    </div>
  );
}

export default CardThree