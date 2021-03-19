import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import OrderRide from './components/OrderRide/OrderRide';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/orderRide/:rideType">
              <OrderRide />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
