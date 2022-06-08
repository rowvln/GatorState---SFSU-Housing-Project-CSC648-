import styled from "styled-components";
import lib from 'images/lib.jpg';

//Listing
export const ResultText = styled.h1`
font-size: 1.5em;
text-align:center;
`
export const ListingDiv = styled.div`
    overflow: auto;
    height: 100vh;
`
//Map
export const mapStyles = {
    height: '100%',
};
//ListingCard
export const CardStyle = styled.div`
    width: '100%',
    background: 'grey',
    padding: '1%',
    border: '1px solid',
    borderRadius: '3px',
    margin: '5px'
`
//Home
export const Greeting = styled.div`
    padding: 4em ;
    background-image: url(${lib});
    background-position: 50%;
    width: 100%;
    height: 582px;
    background-repeat: no-repeat;
    background-color: grey;
`
export const MessageBackground = styled.div`
    
    background:black;
    margin: auto;
    opacity: .9;
    width: 45%;
    border: 5px solid;
    border-color:white;
    position:relative;
    
`

export const Title = styled.h1`
    padding: 10px;
    font-size: 60px;
    text-align: center;
    color: white;
    font-family: Coustard;
    text-decoration: underline;
`
export const Message = styled.h2`
    padding: 10px;
    font-size: 48px;
    text-align: center;
    color: white;
    font-family: Coustard;
`
export const Disclaimer = styled.h5`
    margin: auto;
    text-align:center;
`
//Navbar
export const NavButton = styled.button`
    display: inline-block;
    font-size: 1em;
    color: white;
    background: rgb(0, 123, 255);
    border: none;
    border-radius: 3px;
    font: sans serif;
    text-align: center;
    line-height: 36px;
    margin: 0 .25em;
`

//Upload Listing
export const UploadListingButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`