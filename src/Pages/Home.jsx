//import logo from './logo.svg';
import './style.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
       
      <body>
    <div class="backimage">
      <header>
        <div class="topnav">
          <Link to ="/Login">login</Link>
          <Link to="/Home" class="active">Home</Link>
          <Link to="/About">About</Link>
          
        </div>
      </header>

      <main class="home">
        {/* <!-- Home page content --> */}
        <section class="welcome-section">
          <div class="title"><h1>Welcome to Our Restaurant</h1></div>
        </section>
        <section class="items">
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
          <div class="item">
            <img src="item1.jpg" />
            <h4>Mix Rice</h4>
            <p>$20.00</p>
            <button>Buy</button>
          </div>
        </section>
      </main>

      <footer>
        <p>Contact us at: contact@restaurant.com</p>
        {/* <!-- Add more footer content --> */}
      </footer>

      <script src="script.js"></script>
    </div>
  </body>
    </div>
  );
}

export default Home;
