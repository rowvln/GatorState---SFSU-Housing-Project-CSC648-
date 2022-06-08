/*
It will show this route when there's no specified path.
*/

import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import { Greeting, MessageBackground, Title, Message } from '../components/styled';
import styled from "styled-components";

import { connect } from 'react-redux';
import { loginUser } from '../components/redux/actions/userActions';
import About from '../components/About';

const Disclaimer = styled.h5`
    margin: auto;
    text-align:center;
`

//import {Greeting,MessageBackground,Title,Message,Disclaimer} from '../components/styled';




class Home extends Component {
    componentDidMount() {

        if (localStorage.getItem('loggedIn') !== null) { //&& localStorage.getItem('loggedIn') === true) {
            if (localStorage.getItem('loggedIn')) {
                console.log('local loggedIn')
                console.log(localStorage.getItem('loggedIn'))
                console.log('local user')
                // console.log(localStorage.getItem('userid'))
                // console.log(localStorage.getItem('username'))
                // console.log(localStorage.getItem('firstName'))
                // console.log(localStorage.getItem('lastName'))
                // console.log(localStorage.getItem('email'))
                // console.log(localStorage.getItem('loggedIn'))
                // const loggedIn = localStorage.getItem('loggedIn')
                // const username = localStorage.getItem('user').username
                // console.log('home username:')
                // console.log(username)

                var user = {
                    userid: localStorage.getItem('userid'),
                    username: localStorage.getItem('username'),
                    firstName: localStorage.getItem('firstName'),
                    lastName: localStorage.getItem('lastName'),
                    email: localStorage.getItem('email')
                }

                console.log(user)

                this.props.loginUser(user, localStorage.getItem('loggedIn'))
            }
        }
    }

    render() {

        return (
            <div>
                <Disclaimer>SFSU Software Engineering Project CSC 648-848, Spring 2019.  For Demonstration Only</Disclaimer>
                <Navbar />
                <Greeting>
                    <MessageBackground>
                        <Title>
                            Gator State
                </Title>
                        <Message>
                            Find your home away from home.<br />
                        </Message>
                    </MessageBackground>
                </Greeting>
                <About />
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
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);