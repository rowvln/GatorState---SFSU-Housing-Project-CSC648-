import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import styled from "styled-components";

class ContactSeller extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      render(){
        return(
            <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">From:</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Your Email"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Subject:</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Subject"></input>
                </div>
            </div>

            
            <div class="form-group" align="left" >
                <p> </p>
                <label for="description" >Message: </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Lorem ipsum..." rows="25"></textarea>
             </div>
            <button class="btn btn-primary" type="submit">Send Message</button>

            </form>
        )}
}
export default ContactSeller