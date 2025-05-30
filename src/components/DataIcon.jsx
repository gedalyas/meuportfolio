import React from 'react';
import { AiFillFund } from "react-icons/ai";
import "../design/habilicon/DataIcon.css";

const DataIcon = ({ className = '', label = <strong>Data Science</strong> }) => {
    return (
        <div className={`data-icon-container ${className}`}>
            <AiFillFund />
            <span className="data-icon-label">{label}</span>
        </div>
    );
};

export default DataIcon