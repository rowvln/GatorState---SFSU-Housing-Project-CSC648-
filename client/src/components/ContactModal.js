import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ContactSeller from '../components/ContactSeller';

class ContactModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        regShow: false,
      };
    }
  
    render() {
      let regClose = () => this.setState({ regShow: false });
  
      return (
        <ButtonToolbar>
          <Button onClick={() => this.setState({ regShow: true })}>
            Contact Seller
          </Button>
  
          <Modal
            size= "lg"
            show={this.state.regShow}
            onHide={regClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Contact Seller
              </Modal.Title>
            </Modal.Header>
            <Modal.Body> <ContactSeller/> </Modal.Body>
          </Modal>
        </ButtonToolbar>
      );
    }
  }

 export default ContactModal;