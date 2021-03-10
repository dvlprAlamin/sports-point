import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import maleBanner from '../../images/male.png';
import femaleBanner from '../../images/female.png'
import './LeagueDetails.css'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars, faRss } from '@fortawesome/free-solid-svg-icons';
const LeagueDetails = () => {
    const { id } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0] || {}))
    }, [id])
    const { strLogo, strLeague, strSport, strGender, strCountry, intFormedYear, strDescriptionEN, strFacebook, strRSS, strTwitter, strYoutube } = league;
    return (
        <>
            <Banner logo={strLogo} />
            <div className="container mb-5">
                <div className="league-details my-4 d-flex justify-content-between flex-lg-row flex-column">
                    <div className="league-info">
                        <h3 className="py-2">{strLeague}</h3>
                        <p><FontAwesomeIcon className="info-icon" icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon className="info-icon" icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon className="info-icon" icon={faFutbol} /> Sports Type: {strSport}</p>
                        <p><FontAwesomeIcon className="info-icon" icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="league-img text-lg-right text-center">
                        {strGender === 'Male' && <img src={maleBanner} alt="" />}
                        {strGender === 'Female' && <img src={femaleBanner} alt="" />}
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-icons text-center mt-4">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={strRSS} target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faRss} /></a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </>
    );
};

export default LeagueDetails;