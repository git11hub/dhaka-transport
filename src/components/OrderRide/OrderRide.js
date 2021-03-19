import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderRide = () => {
    const {destination} = useParams();
    console.log(destination);


    // const [ride, setRide] = useState();
    // useEffect(()=>{
    //     fetch(destination)
    //     .then(res => console.log(res))
    //     .then(data => console.log(data))
    //     // console.log(res);
    // })


    return (
        <Row>
            <Col xs={6} md={4}>
                <h3>Uttara to Farmgate</h3>
                <Row>
                    <Col><img src="" alt=""/></Col>
                    <Col><h4>{destination}</h4></Col>
                    <Col><h4>2</h4></Col>
                    <Col><h4>$100</h4></Col>
                </Row>
            </Col>
            <Col xs={6} md={4}>
                <img src="https://i.ibb.co/2cd3CM8/Map.png" alt=""/>
            </Col>
        </Row>
        // <div>
        //     <h1>Let's order a {rideType} Ride</h1>
        //     <h1>Order a ride........ yahoo!</h1>
        // </div>
    );
};

export default OrderRide;