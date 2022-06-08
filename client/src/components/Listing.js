import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {ListingDiv} from './styled';

class Listing extends Component {
  state = {
    searchInput: '',
    todos: [],
  };

  listingCardClicked = e => {
    alert('Clicked')
  }

  //In this render method we map the todos array to another component that extracts
  //the info and displays them in a card
  //
  render() {
    var listingCards;
      listingCards = this.props.todos.map(todo => {
        return (
            <ListingCard key={todo.id} todo={todo} />
        );
      });
    
    return (
      <Container>
        <ListingDiv>{listingCards}</ListingDiv>
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
