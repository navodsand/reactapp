import React from 'react'
import { Link } from 'react-router-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <body>
    <div class="backimage">
      <header>
        <div class="topnav">
          <Link to ="/Login">login</Link>
          <Link to="/Home">Home</Link>
          <Link to="/About" class="active">About</Link>
        </div>
      </header>

      <main class="about">
        {/* <!-- About Us content --> */}
        <section class="about-section">
          <div class="title"><h1>About Our Restaurant</h1></div>
          <p>
            Welcome to Restaurant, where we bring the authentic flavors of Sri
            Lanka to your table. Nestled in the heart of Sri Lanka, our
            restaurant is a culinary haven for those seeking a taste of the
            vibrant and diverse Sri Lankan cuisine. At Restaurant, we take pride
            in offering a menu that celebrates the rich heritage of Sri Lankan
            culinary traditions. From fragrant rice dishes to spicy curries,
            each dish is crafted with carefully selected spices and ingredients
            that embody the essence of Sri Lankan flavors. Our chefs, trained in
            the art of Sri Lankan cooking, infuse passion into every recipe,
            ensuring an experience that tantalizes your taste buds and
            transports you to the bustling streets of Colombo or the serene
            landscapes of Kandy. Beyond our delectable dishes, we strive to
            create an ambiance that reflects the warmth and hospitality of Sri
            Lanka. Whether you're sharing a meal with family, celebrating a
            special occasion, or simply exploring new flavors, our welcoming
            atmosphere promises an unforgettable dining experience. We are
            committed to using fresh, locally sourced ingredients, maintaining
            authenticity in our recipes, and providing exceptional service to
            our guests. Your satisfaction is our utmost priority, and we aim to
            exceed your expectations with every visit. Join us at Restaurant as
            we invite you on a culinary journey through Sri Lanka, where every
            bite tells a story and every meal is a celebration of flavor,
            tradition, and community."
          </p>
          {/*  */}
        </section>
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

//export default About;