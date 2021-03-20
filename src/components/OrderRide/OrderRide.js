import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderRide = () => {
    const { destination } = useParams();
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
                <Row>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Pick From" />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="Pick To" />
                        <br />
                        <Button variant="danger" size="lg" block>Search</Button>
                    </Form.Group>
                </Row>


                <Row className="mt-5">
                <h3>Uttara to Farmgate:</h3>
                    <Row className="mt-4">
                        <Col md={3}><img className="w-50" src="https://i.ibb.co/4PMVywf/Frame.png" alt="" /></Col>
                        <Col md={2}><h4>{destination}</h4></Col>
                        <Col md={2}><h4>2</h4></Col>
                        <Col md={2}><h4>$100</h4></Col>
                    </Row>
                    <Row>
                        <Col md={3}><img className="w-50" src="https://i.ibb.co/4PMVywf/Frame.png" alt="" /></Col>
                        <Col md={2}><h4>{destination}</h4></Col>
                        <Col md={2}><h4>2</h4></Col>
                        <Col md={2}><h4>$100</h4></Col>
                    </Row>
                    <Row>
                        <Col md={3}><img className="w-50" src="https://i.ibb.co/4PMVywf/Frame.png" alt="" /></Col>
                        <Col md={2}><h4>{destination}</h4></Col>
                        <Col md={2}><h4>2</h4></Col>
                        <Col md={2}><h4>$100</h4></Col>
                    </Row>



                    {/* <h3>Uttara to Farmgate</h3>
                    <Col><img src="" alt="" /></Col>
                    <Col><h4>{destination}</h4></Col>
                    <Col><h4>2</h4></Col>
                    <Col><h4>$100</h4></Col> */}
                </Row>
                


            </Col>
            <Col xs={6} md={4}>
                <img src="https://i.ibb.co/2cd3CM8/Map.png" alt="" />
            </Col>
        </Row>
        // <div>
        //     <h1>Let's order a {rideType} Ride</h1>
        //     <h1>Order a ride........ yahoo!</h1>
        // </div>
    );
};

export default OrderRide;