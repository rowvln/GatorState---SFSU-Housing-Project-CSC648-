import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MapContainer from '../components/Map';
import axios from 'axios';
import {ResultText} from '../components/styled';
import { updateSearch, finishedSearch, submittedSearch } from '../components/redux/actions/searchActions';


class Results extends Component {
  state = {
    searchInput: '',
    searchState: '',
    data: null,
    searchState: 'LOADING',
    todos: [],
    resultsTotal: 0,
  };

  componentDidMount() {
    this.authenticate();
  }
  

  authenticate = async () => {
    this.setState({
      searchState: 'LOADING',
      searchInput: this.props.searchValue
    });

    var urlString;
    const searchInput = this.props.searchValue;


    // urlString = `http://gatorstate.tk/api/listings`;

    if (searchInput === "" || searchInput === null || searchInput === undefined) {
        urlString = `http://gatorstate.tk/api/listings`;
    //   urlString = `http://localhost:5000/listings`;
    }
     else {
         urlString = `http://gatorstate.tk/api/listingsSearch/${this.props.searchValue}`
     }
    // urlString = `http://localhost:5000/listings`;

    if (searchInput === "" || searchInput === null || searchInput === undefined) {
      urlString = `http://gatorstate.tk/api/listings`;
      // urlString = `http://localhost:5000/listings`;
    }
    else {
      urlString = `http://gatorstate.tk/api/listingsSearch/${searchInput}`
      // urlString = `http://localhost:5000/listingsSearch/${searchInput}`;
    }

    await axios
      .get(urlString)
      .then(response => {
        const resData = response.data;
        console.log('Response');
        console.log(response);
        console.log(response.data);
        var i = 1;
        this.setState({
          todos: []
        });

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

      this.props.finishedSearch();
      // this.props.searchState = 'SEARCH_FINISHED';
  };

  render() {
    if(this.props.searchState === 'SEARCH_SUBMITTED' && this.state.searchState !== 'LOADING')
    {
        this.authenticate();
    }

    console.log('Search State:')
    console.log(this.props.searchState)
    return (
      <div>
        {/* {this.state.authenticate} */}
        <NavbarResultPage />
        <Container fluid >
          <Row style={{ background: "#AADAFF" }}>
            <Col className="px-0">
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
            <Col className="px-0" >

              {this.state.searchState === 'AUTHENTICATED' &&
              this.state.todos.length !== 0 && 
              <MapContainer todos={this.state.todos}/>
              }
              
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
    searchValue: state.searchReducer.searchValue,
    searchState: state.searchReducer.searchState
  };
};

const mapDispatchToProps = {
  updateSearch,
  finishedSearch,
  submittedSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
