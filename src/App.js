// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
// import { Route,Switch } from 'react-router';
// import { Switch } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <div>
        // <Switch>

        //   <Route path='/'>
        //     <Home/>
        //   </Route>

        //   <Route path='/About'>
        //     <About/>
        //   </Route>

        //   <Route path='/Contact'>
        //     <Contact/>
        //   </Route>

        //   <Route path='/Login'>
        //     <Login/>
        //   </Route>

        // </Switch> 
    //   </div>
    // </Router>
    <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Home />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
  );
}

export default App;
