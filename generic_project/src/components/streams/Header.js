import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import GoogAuth from './GoogAuth';
import SearchBar from './SearchBar';
import { fetchStream } from '../../actions';
import streams from '../../apis/streams';

//import Routes from './Routes';
//import { Nav, NavItem, Navbar } from 'react-bootstrap';
//

class Header extends React.Component {
    //this.setState({images:response.data.results})
        //promise .then(response => {console.log(response.data.results)})
  render(){
    return (
        <div className="ui secondary pointing menu">
            <Link to = "/" className="item">
              Streamy
            </Link>
            <div className="item">
              <SearchBar onSSubmit={this.onSearchSubmit} />
            </div>
            <div className="right menu">
              <Link to="/" className="item">
                All Streams
              </Link>
                <GoogAuth />
            </div>
        </div>
    )
  }
};

const mapStateToProps = state => {
  return ({streams:Object.values(state.streams),
          currentUserId:state.auth.userId,
          isSignedIn:state.auth.isSignedIn
          });
}
export default connect(mapStateToProps, {fetchStream})(Header);

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
