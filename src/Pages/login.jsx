 import React from 'react';
 import './style.css';
 import { Link } from 'react-router-dom'
 //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
 export default function Login() {
   return (
     <div>
      <body>
    <div class="backimage">
      <header>
        <div class="topnav">
          <Link to ="/Login" class="active">Login</Link>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
        </div>
      </header>
      <main class="about">
        <div class="login-card-wrapper">
          <div class="login-card">
            <div class="login-card-inner">
              <marquee class="card title main">Put Your Details</marquee>
              <h1 class="card-title">Login</h1>
              <input
                class="user-name-input input-field"
                placeholder="Username..."
                type="text"
                name="name"
              />
              <input
                class="user-pass-input input-field"
                placeholder="Password..."
                type="password"
                name="pass"
              />
              <button class="submit-btn" type="submit">Sign in</button>
              <a class="fogot-pass-link" href="#">Fogot Your Password?</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Contact us at: contact@restaurant.com</p>
        {/* <!-- Add more footer content --> */}
      </footer>
      <script src="scripts.js"></script>
    </div>
  </body>
     </div>
   )
 }
 
 //export default Login;