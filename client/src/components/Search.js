import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router';
import FilterSelection from './FilterSelection';

import { connect } from 'react-redux';
import { updateSearch, finishedSearch, submittedSearch } from '../components/redux/actions/searchActions';

const LinkButton = styled(Link)`
  textDecoration: none;
  display: inline-block;
  font-size: 1em;
  color: white;
  background: rgb(0, 123, 255);
  border-radius: 3px;
  font: sans serif;
  height: 38px;
  margin: auto;
  padding: 0.25em 1em;
    
}
`

class Search extends Component {
  state = {
    searchInput: {
      search: '',
      address: '',
      zipcode: '',
      city: '',
      price: '',
      distance: '',
      type: ''
    }
  };

  onSearchHandler = event => {
    const { searchInput } = this.state;
    this.setState({
      searchInput: event.target.value
    });

    console.log(searchInput);
  };

  onSearchButtonClick = e => {
    this.props.submittedSearch();
  }


  render() {
    const { searchInput } = this.state;
    // console.log(this.state);
    return (
      <div className="App">
        <Container fluid>
          <InputGroup >
            <InputGroup.Prepend>
              <FilterSelection />
            </InputGroup.Prepend>
            <FormControl
                style={{width:'300px'}}
                maxLength="50" 
                placeholder="Search by address, zipcode, or city..."
                onChange={e => {
                  this.props.updateSearch(e.target.value);  
              }}
                
            />
            <InputGroup.Append>
              <LinkButton to="/results" onClick={(e) => { this.onSearchButtonClick() }} style={{ textDecoration: 'none', color: 'white' }}>Search</LinkButton>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('map state to props:')
  console.log(state);
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
// function searchButtonClick()  {
//   const {searchInput} = this.state;
//   this.props.router.push('/about');
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
