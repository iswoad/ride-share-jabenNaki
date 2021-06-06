import './App.css';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
