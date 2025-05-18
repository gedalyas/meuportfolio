import React from 'react';
import { TiCogOutline } from "react-icons/ti";
import "../design/habilicon/AutIcon.css";
const AutIcon = ({ className = '', label = "Data automation" }) => {
    return (
        <div className={`aut-icon-container ${className}`}>
            <TiCogOutline />;
            <span className="aut-icon-label">{label}</span>
        </div>
    );
};

export default AutIcon