//import logo from './logo.svg';
import { BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import React, { useState } from 'react';
import MyComponentToRender from './Components/MyComponentToRender';

function App() {

  const [isComponentVisible, setComponentVisible] = useState(false);

  function handleButtonClick() {
    setComponentVisible(true);
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/home" element ={<Home/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

      <div>
      <h1>React Component Rendering Example</h1>
      <button onClick={handleButtonClick}>Render Component</button>

      {isComponentVisible && <MyComponentToRender />}
    </div>

    </div>
  );
}


export default App;
