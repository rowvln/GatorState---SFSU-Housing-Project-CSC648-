import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ContactModal from '../components/ContactModal';
import Col from 'react-bootstrap/Col';
import RegisterModal from './RegisterModal';

export default class ListingModal extends Component{
    constructor(props, context){
        super(props, context);
        
        this.state = {
            lgShow: false, 
        }
    }
    render(){
        let lgClose = () => this.setState({lgShow: false});     
        return(
            <div>
            <Button block onClick={() => this.setState({lgShow: true})}>View Listing Details</Button>
            <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                <h3 > {this.props.todo.address}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <img 
                            src={this.props.todo.imgurl}
                            className="img-responsive"
                            width="100%"
                            />
                            <h2>$: {this.props.todo.price}</h2>
                            <h4>Bed: # of beds </h4>
                            <h4> Bath: # of baths</h4>  
                            <h5>{this.props.todo.address}</h5>
                            <h5>About: {this.props.todo.description}</h5>
                            <small id="photo" class="form-text text-muted" align="left">uploaded a week ago</small>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button> Contact Seller </Button> */}
                <ContactModal/>
                
            </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
