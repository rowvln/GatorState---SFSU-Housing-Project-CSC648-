import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FilterSelection from './FilterSelection';

import { connect } from 'react-redux';
import { updateSearch } from '../components/redux/actions/searchActions';

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

class Register extends Component {


  render() {
    
    return (
      <div className="App">
          <Container style={{width: '150px'}}>
  
                    <LinkButton to="/register" style={{ textDecoration: 'none', color: 'white' }}>Registration</LinkButton>
                  
          </Container>
      </div>
    );
  }
}



export default connect()(Register);
