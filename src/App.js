import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";  
import Login from './components/Login/Login';
import Destination from './components/Desitinaiton/Destination';
import StartRide from './components/StartRide/StartRide';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App(props) {
  const [ loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <h1>User Email: {loggedInUser.email}</h1>
        <Switch>
          
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path = "/destination/:rideKey">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path = "/startRide/:rideKey">
            <StartRide></StartRide>
          </PrivateRoute>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
