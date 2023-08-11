// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
import { BrowserRouter as Roter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path='/'>
            <Home/>
          </Route>

          <Route path='/About'>
            <About/>
          </Route>

          <Route path='/Contact'>
            <Contact/>
          </Route>

          <Route path='/Login'>
            <Login/>
          </Route>

        </Switch> 
      </div>
    </Router>
  );
}

export default App;
