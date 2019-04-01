import React from 'react';
import {Link} from 'react-router-dom';
import GoogAuth from './GoogAuth';
//import Routes from './Routes';
//import { Nav, NavItem, Navbar } from 'react-bootstrap';
//
const Header = () => {
  return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <Link to="/" className="navbar-brand">Streamy</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button"
                data-toggle="collapse" data-target="#navb" aria-expanded="true">
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="fas fa-user" /> Sign Up</a>
            </li>
            <li className="nav-item">
              <Link to="/googauth" className="nav-link"><span className="fas fa-sign-in-alt" />
                <GoogAuth />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  };


  export default Header;

      // <Navbar>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //        <h1>Streamy</h1>
      //     </Navbar.Brand>
      //   </Navbar.Header>
      //     <Nav>
      //       <NavItem href="/signup">Streams</NavItem>
      //       <NavItem href="/signup">Signup</NavItem>
      //       <NavItem href="/login">Login</NavItem>
      //     </Nav>
      // </Navbar>
      // {/*<Routes />*/}
