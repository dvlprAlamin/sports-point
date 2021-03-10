import React from 'react';
import Banner from '../Banner/Banner';
import Leagues from '../Leagues/Leagues';
import logo from '../../images/logo.png'
const Home = () => {
    return (
        <div>
            <Banner logo={logo}/>
            <Leagues/>
        </div>
    );
};

export default Home;