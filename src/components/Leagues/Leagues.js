import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Leagues.css'
const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=> {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    return (
        <div className="container leagues-container">
            {
                leagues.map(league => <League key={league.idLeague} league={league} />)
            }
        </div>
    );
};

export default Leagues;