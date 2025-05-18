import React from 'react';
import { AiOutlineOpenAI } from "react-icons/ai";
import "../design/habilicon/IaIcon.css";

const IaIcon = ({ className = '', label = "AI Development" }) => {
    return (
        <div className={`ia-icon-container ${className}`}>
            <AiOutlineOpenAI />
            <span className="ia-icon-label">{label}</span>
        </div>
    );
    };

export default IaIcon;