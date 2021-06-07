import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path ='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
