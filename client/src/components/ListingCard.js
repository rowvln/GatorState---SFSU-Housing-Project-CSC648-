import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListingModal from './ListingModal';
import {CardStyle} from './styled';

export class ListingCard extends Component {
  render() {
    return (
    <CardStyle>
        <Card >
            <div className="row no-gutters" style={{border: '1px solid'}}>
                <div className="col-auto" >
                    <img src={this.props.todo.imgurl} height="100%" width="200" className="img-responsive" alt="{this.props.todo.address}" />
                </div>
                <Col>
                    <div className="card-block px-2" >
                        <h4 className="card-title">Address: {this.props.todo.address}</h4>
                        <h4 className="card-title">City: {this.props.todo.city}</h4>
                        <h5 className="card-text">Price: {this.props.todo.price}</h5>
                        <h5 className="card-text">Distance: {this.props.todo.distance}</h5>
                        <ListingModal todo={this.props.todo}/>
                    </div>
                </Col>
            </div>
        </Card>
    </CardStyle>
    );
  }
}

//PropTypes
ListingCard.propTypes = {
  todo: PropTypes.object.isRequired
};

export default ListingCard;
