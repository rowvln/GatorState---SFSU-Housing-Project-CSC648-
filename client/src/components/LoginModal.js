import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

class LoginModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        lgShow: false,
        regShow: false,
      };
    }
  
    render() {
      let lgClose = () => this.setState({ lgShow: false });
      // let regClose = () => this.setState({ regShow: false });
  
      return (
        <ButtonToolbar>
          <Button onClick={() => this.setState({ lgShow: true })}>
            Login
          </Button>&nbsp;
          {/* <Button onClick={() => this.setState({ regShow: true })}>
            Register 
          </Button> */}
  
          <Modal
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body> <LoginPage/> </Modal.Body>
          </Modal>
  
          {/* <Modal
            show={this.state.regShow}
            onHide={regClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Register
              </Modal.Title>
            </Modal.Header>
            <Modal.Body> <RegistrationPage /> </Modal.Body>
          </Modal> */}
        </ButtonToolbar>
      );
    }
  }

 export default LoginModal;