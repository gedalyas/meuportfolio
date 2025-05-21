import React from 'react';
import { AiFillLayout } from "react-icons/ai";
import "../design/habilicon/WebIcon.css";

const WebIcon = ({ className = '', label = <strong>Web Development</strong> }) => {
    return (
        <div className={`web-icon-container ${className}`}>
            <AiFillLayout />
            <span className="web-icon-label">{label}</span>
        </div>
    );
};

export default WebIcon;