import React from 'react';
import {Link} from 'react-router-dom';
import GoogAuth from './GoogAuth';
//import Routes from './Routes';
//import { Nav, NavItem, Navbar } from 'react-bootstrap';
//
const Header = () => {
  return (
        <div className="ui secondary pointing menu">
            <Link to = "/" className="item">
              Streamy
            </Link>
            <div className="right menu">
              <Link to="/" className="item">
                All Streams
              </Link>
                <GoogAuth />
            </div>
        </div>
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
