// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
import { BrowserRouter as Roter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Roter>
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
    <Roter/>
  );
}

export default App;
