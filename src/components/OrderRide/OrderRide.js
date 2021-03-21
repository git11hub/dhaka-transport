import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { VehiclesContext } from '../../App';
import { vehicles } from './../Home/Home';

const OrderRide = () => {

    const [show, setShow] = useState(true);

    const { destination } = useParams();
    // console.log(destination);

    //test
    const [vehicle, setVehicle] = useContext(VehiclesContext);
    // console.log(vehicle);

    const transport = vehicles.map(vehicle => vehicle).filter(d => d.rideType === destination);
    // console.log(transport[0]);
    const {rideType, imgUrl} = transport[0];
    return (
        <Row>
            <Col xs={6} md={4}>
                {show ? <Row>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Pick From" />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="Pick To" />
                        <br />
                        <Button onClick={() => setShow(!show)} variant="danger" size="lg" block>Search</Button>
                    </Form.Group>
                </Row> :

                    <Row className="mt-5">
                        <h3>Uttara to Farmgate:</h3>
                        <Row className="mt-4">
                            <Col md={3}><img className="w-50" src={imgUrl} alt="" /></Col>
                            <Col md={2}><h4>{destination}</h4></Col>
                            <Col md={1}><h4>2</h4></Col>
                            <Col md={2}><h4>$100</h4></Col>
                        </Row>
                        <Row>
                            <Col md={3}><img className="w-50" src={imgUrl} alt="" /></Col>
                            <Col md={2}><h4>{destination}</h4></Col>
                            <Col md={1}><h4>2</h4></Col>
                            <Col md={2}><h4>$100</h4></Col>
                        </Row>
                        <Row>
                            <Col md={3}><img className="w-50" src={imgUrl} alt="" /></Col>
                            <Col md={2}><h4>{destination}</h4></Col>
                            <Col md={1}><h4>2</h4></Col>
                            <Col md={2}><h4>$100</h4></Col>
                        </Row>
                    </Row>}
            </Col>
            <Col xs={6} md={4}>
                <img src="https://i.ibb.co/2cd3CM8/Map.png" alt="" />
            </Col>
        </Row>
    );
};

export default OrderRide;