import { Button } from 'react-bootstrap';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar bg="light" variant="light">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/destination">Destination</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Button href="/login" variant="primary">Login</Button>
            </Nav>
        </Navbar>

    );
};

export default Header;