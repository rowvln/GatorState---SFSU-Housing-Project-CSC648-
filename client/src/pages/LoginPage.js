import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import RegisterModal from '../components/RegisterModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


import { loginUser } from '../components/redux/actions/userActions';
import { props } from 'bluebird';


const ModalContent = styled.div`
    margin:auto;
`
class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            user : {
                userid: '',
                username: '',
                firstName: '',
                lastName: '',
                email: '',
            },
            loggedIn: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        var urlString = `http://localhost:5000/sessions`;

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;

        console.log('username:')
        console.log(username)
        console.log('password:')
        console.log(password)

        var user = 'nada';

        if (username && password) {
            await axios.post(urlString, {
                username: username,
                password: password
            })
                .then(function (response) {
                    alert(response.data.message);
                    console.log(response);
                    user = response.data.user;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        console.log('user:')
        console.log(user);

        if(user !== 'nada')
        {
            this.setState({
                user: {
                    userid: user.id,
                    username: user.username,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                },
                loggedIn: true
            })
    
            console.log('state user:')
            console.log(this.state.user)
            this.props.loginUser(this.state.user, this.state.loggedIn)

            localStorage.setItem('userid', this.state.user.userid)
            localStorage.setItem('username', this.state.user.username)
            localStorage.setItem('firstName', this.state.user.firstName)
            localStorage.setItem('lastName', this.state.user.lastName)
            localStorage.setItem('email', this.state.user.email)
            localStorage.setItem('loggedIn', this.state.loggedIn)
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <ModalContent className="col-md-6 col-md-offset-3">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" placeholder="Username" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block"style={{color:'red'}}>*Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" placeholder="Password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block"style={{color:'red'}}>*Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <ButtonToolbar>
                            <button className="btn btn-primary">Login</button> &nbsp; <RegisterModal /> </ButtonToolbar>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }

                    </div>
                </form>
            </ModalContent>
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
)(LoginPage);
