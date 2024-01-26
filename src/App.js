//import logo from './logo.svg';
import { BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/home" element ={<Home/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
