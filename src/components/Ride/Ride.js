import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Ride = (props) => {
    const { imgUrl, title, rideType } = props.vehicle;

    const history = useHistory();

    const handleBook = (rideType) => {
        history.push(`/orderRide/${rideType}`);
    }
    return (
        <div onClick={() => handleBook(rideType)}>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Ride;