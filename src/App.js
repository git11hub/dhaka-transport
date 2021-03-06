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
import Signup from './components/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext();
//test
export const VehiclesContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  //test
  const [vehicle, setVehicle] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <VehiclesContext.Provider value={[vehicle, setVehicle]}>        
        <Container>
          <Router>
            <Header />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/orderRide/:destination">
                <OrderRide />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>

            </Switch>
          </Router>
        </Container>
      </VehiclesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
