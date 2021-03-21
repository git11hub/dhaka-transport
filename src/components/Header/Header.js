import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <Navbar bg="light" variant="light">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/orderRide/Bike">Order-Ride</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>

                {loggedInUser.email ?<Button href="/login" variant="primary">Log Out</Button>:
                    <Button href="/login" variant="primary">Login</Button>
                }
                <Nav.Link href="/contact">{loggedInUser.name}</Nav.Link>

            </Nav>
        </Navbar>

    );
};

export default Header;