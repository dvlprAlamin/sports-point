import React from 'react';
import './Banner.css'
const Banner = ({logo}) => {
    return (
        <div className="banner">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Banner;