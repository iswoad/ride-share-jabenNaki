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

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
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
      
    </div>
  );
}

export default App;
