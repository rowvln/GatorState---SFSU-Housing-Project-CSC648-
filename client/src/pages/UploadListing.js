import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {UploadListingButton} from '../components/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UploadListing extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        console.log('You done submitted')
        alert('SUBMITTED')
    }

    submitButtonClick = async (e) => {
        var urlString = `http://gatorstate.tk/api/listings`;

        const address = document.getElementById('inputAddress').value + document.getElementById('inputAddress2').value;
        const city = document.getElementById('city').value
        const state = document.getElementById('state').value
        const zip = document.getElementById('zip').value
        const price = document.getElementById('price').value
        const homeType = document.getElementById('homeType').value
        const description = document.getElementById('description').value

        if (address && city && state && zip && price && homeType && description) {

            var listing = {
                user_id: localStorage.getItem('userid'),
                street_address: address,
                city: city,
                zip_code: zip,
                state: state,
                image_url: 'no image',
                home_type: homeType,
                price: price,
                description: description
            }

            await axios.post(urlString, listing)
                .then(function (response) {
                    alert(response.data.message);
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    render() {
        return (

            <div>
                <Navbar />
                <div align="center">
                    <p> </p>
                    <h1>Upload Listing</h1>
                    <div>
                        <form class="needs-validation" novalidate >
                            <div class="form-group" style={{ width: '40%' }} align="left">
                                <label for="inputAddress" >Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                                <small id="photo" class="form-text text-muted" align="left">*Required</small>

                            </div>
                            <div class="form-group" style={{ width: '40%' }} align="left">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                            </div>
                            <div class="form-row" style={{ width: '40%' }} align="left">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom03">City</label>
                                    <input type="text" class="form-control" id="city" placeholder="City" required></input>
                                    <div class="invalid-feedback">
                                        Please provide a valid city.
                            </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom04">State</label>
                                    <input type="text" class="form-control" id="state" placeholder="State" required></input>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                            </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom05">Zip</label>
                                    <input type="text" class="form-control" id="zip" placeholder="Zip" required></input>
                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
                            </div>

                                </div>
                            </div>




                            {/* <div class="form-group"style={{ width: '30%' }}>
                            <div class="form-check">
                            <label for="validationCustom03">Rent Price</label>
                            <input type="text" class="form-control" id="validationCustom03" placeholder="$.." required></input>
                            <div class="invalid-feedback">
                                Please input amount.
                            </div> 
                            </div>
                        </div> */}
                            <div class="form-row" style={{ width: '40%' }} align="left">
                                <div class="form-col" style={{ width: '40%' }} align="left">
                                    <label for="price" >Price</label>
                                    <input type="text" class="form-control" id="price" placeholder="$..per month"></input>
                                    <small id="photo" class="form-text text-muted" align="left">*Required</small>
                                    <div class="invalid-feedback">
                                        Please provide a valid price.
                                        </div>
                                </div>&nbsp;

                        <div class="form-col" style={{ width: '40%' }} align="left">
                                    <label for="exampleFormControlSelect1">Listing Type</label>
                                    <select class="form-control" id="homeType">
                                        <option value="apartment">Apartment</option>
                                        <option value="house">House</option>
                                        <option value="dorm">Dorm</option>
                                    </select>
                                    <small id="photo" class="form-text text-muted"   align="left">*Required</small>

                                </div>
                            </div>

                            <div class="form-group" style={{ width: '40%' }} align="left">
                                <p> </p>
                                <p> </p>
                                <label for="uploadphotos">Upload Photos</label>
                                <input type="file" class="form-control-file" id="uploadphotos"></input>
                                <small id="photo" class="form-text text-muted" align="left">Upload photos of your listing.</small>

                            </div>

                            <h4>Details</h4>


                            <div class="form-check" style={{ width: '40%' }} align="left">
                                <input class="form-check-input" type="checkbox" value="" id="pet"></input>
                                <label class="form-check-label" for="pet">
                                    Pet Friendly
                            </label>
                            </div>
                            <div class="form-check" style={{ width: '40%' }} align="left">
                                <input class="form-check-input" type="checkbox" value="" id="laundry"></input>
                                <label class="form-check-label" for="laundry">
                                    Laundry On Site
                            </label>
                            </div>

                            <div class="form-check" style={{ width: '40%' }} align="left">
                                <input class="form-check-input" type="checkbox" value="" id="garage_parking"></input>
                                <label class="form-check-label" for="garage_parking">
                                    Garage Parking
                            </label>
                            </div>
                            <div class="form-check" style={{ width: '40%' }} align="left">
                                <input class="form-check-input" type="checkbox" value="" id="street_parking"></input>
                                <label class="form-check-label" for="street_parking">
                                    Street Parking
                            </label>
                            </div>

                            <div class="form-group" style={{ width: '40%' }} align="left">
                                <p> </p>
                                <label for="description" >Description</label>
                                <textarea class="form-control" id="description" placeholder="Lorem ipsum..." rows="3"></textarea>
                            </div>

                            <button class="btn btn-primary" type="submit">Upload Listing</button>
                            {/* <Link to="/"><UploadListingButton type="submit" onClick={(e) => { this.submitButtonClick() }} >Upload Listing</UploadListingButton></Link> */}
                            {/* onSubmit={this.handleSubmit} */}
                            <h1> </h1>

                        </form>
                    </div>


                </div>
            </div>
        )
    }
}


export default UploadListing;