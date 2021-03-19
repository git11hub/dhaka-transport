import React from 'react';
import { Row } from 'react-bootstrap';
import Ride from '../Ride/Ride';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

    const vehicles = [
        {
            title: 'Journey by Bike',
            description: 'Standard Single vehicle are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://i.ibb.co/4PMVywf/Frame.png',
            bed: 1,
            capacity: 1,
            rideType: 'Bike',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Journey by Bus',
            description: 'Superior Double vehicle are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/RQZyV6w/Frame-1.png',
            bed: 1,
            capacity: 2,
            rideType: 'Bus',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Journey by Car',
            description: ' Have lots of in-vehicle facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/yVw9rwn/Frame-2.png',
            bed: 2,
            capacity: 4,
            rideType: 'Car',
            avatar: 'F',
            price: 199
        },
        {
            title: 'Journey by Train',
            description: ' Have lots of in-vehicle facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/9bDYbXg/Group.png',
            bed: 2,
            capacity: 4,
            rideType: 'Train',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        // <div style={style}>
        //     {
        //         vehicles.map(vehicle => <vehicle key={vehicle.rideType} vehicle={vehicle}></vehicle>)
        //     }
        // </div>


        <Row>
            {
                vehicles.map(vehicle => <Ride key={vehicle.rideType} vehicle={vehicle}></Ride>)
            }
        </Row>
    );
};

export default Home;