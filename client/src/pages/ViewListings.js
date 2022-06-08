import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MapContainer from '../components/Map';
import axios from 'axios';
import { ResultText } from '../components/styled';
import { updateSearch } from '../components/redux/actions/searchActions';
import styled from "styled-components";

const Title = styled.h1`
    margin: auto;
    text-align:center;
`


class ViewListings extends Component {
    state = {
        userid: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        todos: [],
        resultsTotal: 0,
        searchState: 'LOADING'
    };

    componentDidMount() {
        this.authenticate();
        console.log(this.props)
    }

    authenticate = async () => {
        //http://localhost:5000/userListings/2
        
        var urlString = `http://localhost:5000/userListings/${this.props.user.userid}`;

        await axios
            .get(urlString)
            .then(response => {
                const resData = response.data;
                console.log('Response');
                console.log(response);
                console.log(response.data);
                var i = 1;

                if (resData[0].street_address != null) {
                    (resData).forEach(element => {
                        this.state.todos.push({
                            id: i,
                            address: `${element.street_address}, ${element.zip_code}`,
                            zipcode: element.zip_code,
                            price: element.price,
                            city: element.city,
                            date: '4/27/2019',
                            imgurl: `${element.image_url}`,
                            homeType: element.home_type,
                            description: element.description,
                        })
                        i++;

                    });

                    i = i - 1;
                    this.setState({
                        searchState: 'AUTHENTICATED',
                        data: resData,
                        resultsTotal: i,
                    });
                    console.log('Stuffs was authenticated');
                    console.log(this.state.todos);
                }
                else {
                    this.setState({
                        searchState: 'DENIED'
                    });
                }
                // console.log(`data: ${this.state.data}`);
            })
            .catch(e => {
                console.log('error');
                this.setState({
                    searchState: 'DENIED'
                });
            });
    };

    render() {
        return (
            <div>
                {/* {this.state.authenticate} */}
                <NavbarResultPage />
                <Container fluid >
                    <Title>Your Listings</Title>
                    <Row style={{ background: "#AADAFF" }}>
                        <Col className="px-0">

                            {this.state.searchState === 'AUTHENTICATED' &&
                                this.state.todos.length !== 0 &&
                                <MapContainer todos={this.state.todos} />

                            }
                        </Col>
                        <Col className="px-0" >
                            <div>
                                {this.state.searchState === 'LOADING' &&
                                    <div><h1>Loading Listings</h1>
                                    </div>}
                                {this.state.searchState === 'AUTHENTICATED' &&
                                    <div>
                                        <ResultText>
                                            Number of results: {this.state.resultsTotal}
                                        </ResultText>

                                        <Listing todos={this.state.todos} />
                                    </div>
                                }
                                {this.state.searchState === 'DENIED' &&
                                    <div>No results</div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        user: state.userReducer.user,
        loggedIn: state.userReducer.loggedIn
    };
};

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewListings);
