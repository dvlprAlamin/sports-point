import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './League.css'
const League = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [league, setLeague] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0] || {}))
    }, [idLeague])
    return (
        <Card className="single-league">
            <Card.Img variant="top" src={league.strLogo} />
            <Card.Body>
                <Card.Title className="text-white">{strLeague}</Card.Title>
                <Card.Text className="text-warning">Sports type: {strSport}</Card.Text>

            </Card.Body>
            <Card.Footer className="border-0">
                <Button as={Link} to={`/league/${idLeague}`} className="explore-btn" variant="dark">
                    Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default League;