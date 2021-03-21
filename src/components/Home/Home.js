import React, { useContext, useEffect, useState } from 'react';
import { VehiclesContext } from '../../App';
import { Container, Row } from 'react-bootstrap';
import Ride from '../Ride/Ride';

export const vehicles = [
    {
        title: 'Journey by Bike',
        imgUrl: 'https://i.ibb.co/4PMVywf/Frame.png',
        capacity: 1,
        rideType: 'Bike',
        price: 119
    },
    {
        title: 'Journey by Bus',
        imgUrl: 'https://i.ibb.co/RQZyV6w/Frame-1.png',
        capacity: 2,
        rideType: 'Bus',
        price: 149
    },
    {
        title: 'Journey by Car',
        imgUrl: 'https://i.ibb.co/yVw9rwn/Frame-2.png',
        capacity: 4,
        rideType: 'Car',
        price: 199
    },
    {
        title: 'Journey by Train',
        imgUrl: 'https://i.ibb.co/9bDYbXg/Group.png',
        capacity: 4,
        rideType: 'Train',
        price: 199
    }
]

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

    
    //test
    // const [vehicle, setVehicle] = useState([]);

    // const [vehicle, setVehicle] = useContext(VehiclesContext);

    // useEffect(() => {
    //     vehicles.map(vehicle => setVehicle(vehicle))
    //     // setVehicle(vehicles)
    // }, []);


    // console.log(vehicle);

    return (
        <>
            <Row className="d-flex justify-content-center mt-5">
                <div><h1>Dhaka Transport</h1></div>
            </Row>
            <Row className="mt-5">

                {
                    vehicles.map(vehicle => <Ride key={vehicle.rideType} vehicle={vehicle}></Ride>)
                }
            </Row>
        </>
    );
};

export default Home;