/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./Components/Users";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
    <div className="main">
      <div className="indent"></div>
      <nav className="navigation">
        <div className="first-block">
          <a href="#">
            <img src="./signature.png" alt={"logo"} />
          </a>
        </div>
        <div className="second-block">
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
