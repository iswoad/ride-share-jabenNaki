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
import { createContext, useState } from 'react';

export const UserContext = createContext();


function App(props) {
  const [ loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Header></Header>
        <h1>Name: {loggedInUser.displayName}</h1>
        <Switch>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/destination'>
            <Destination></Destination>
          </Route>
          <Route path ='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
