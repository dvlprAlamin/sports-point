import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'
const Banner = ({ logo }) => {
    const history = useHistory();
    return (
        <>
            {
                history.location.pathname !== "/" &&
                <button 
                onClick={()=> history.push("/")}
                className="btn btn-light back-btn">Go Back</button>
            }
            <div className="banner">
                <img src={logo} alt="" />
            </div>
        </>
    );
};

export default Banner;