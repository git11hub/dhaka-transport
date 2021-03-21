import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { VehiclesContext } from '../../App';

const Ride = (props) => {
    const { imgUrl, title, rideType } = props.vehicle;

    const [vehicle, setVehicle] = useContext(VehiclesContext);
    setVehicle(imgUrl);
    
    // console.log(vehicle);
    // const imgAndRideType = { imgUrl, rideType };
    // console.log(imgAndRideType);

    const history = useHistory();

    const handleBook = (destination) => {
        history.push(`/orderRide/${destination}`);
    }
    return (
        <div onClick={() => handleBook(rideType)}>
            <Card className="m-1" style={{ width: '16rem' }}>
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