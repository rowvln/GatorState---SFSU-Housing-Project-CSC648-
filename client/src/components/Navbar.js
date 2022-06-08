import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Nav from 'react-bootstrap/Nav';
import {NavButton} from './styled';
import Register from './Register';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import  {userReducer}  from './redux/reducers/userReducer'
import { logoutUser } from '../components/redux/actions/userActions';
import styled from 'styled-components';


const LinkButton = styled(Link)`
  display: inline-block;
  font-size: 1em;
  color: white;
  //background: rgb(0, 123, 255);
  border: none;
  border-radius: 3px;
  font: sans serif;
  line-height: 30px;
  text-align: center;
  //margin: auto;
  padding: 0.25em 1em;
  background: rgb(0, 123, 255);
}
`

// const NavButton = styled.button`
//   display: inline-block;
//   font-size: 1em;
//   color: white;
//   background: rgb(0, 123, 255);
//   border: none;
//   border-radius: 3px;
//   font: sans serif;
//   text-align: center;
//   line-height: 36px;
// `


class NavbarComp extends Component {

  logout = e => {
    localStorage.removeItem('userid')
    localStorage.removeItem('username')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('email')
    localStorage.removeItem('loggedIn')
    
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" className="justify-content-between" expand="lg">
          
          <Navbar.Brand style={{ color: 'white' }} href="/">
            GatorState
          </Navbar.Brand>

          <Search />

          <Nav >
          <Navbar.Collapse>
            {/* Post Button */}
           <LinkButton to="/uploadlistings" style={{ textDecoration: 'none', color: 'white' }}>Post</LinkButton>&nbsp;
           {/* Messages Button */}
            {this.props.loggedIn ? 
            <div><NavButton>Messages</NavButton>
            <Link to="/viewListings">
            {/* My Listings Button */}
            <NavButton  to="/viewListings">My Listings</NavButton></Link>
            <Link to="/">
            {/* Login Button */}
            <NavButton onClick={(e) => { this.logout() }}>Logout</NavButton>
            </Link></div>
            : <LoginModal/>} 
            {/* Register Button */}
            {this.props.loggedIn ? "" : <RegisterModal/>}
          </Navbar.Collapse>
          </Nav>
          <Navbar.Toggle style={{color:'white'}} aria-controls="basic-navbar-nav" />
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('login mapStateToProps')
  console.log(state);

  return {
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn
  };
};

const mapDispatchToProps = {
  // loginUser
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComp);

