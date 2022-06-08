import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from 'react-geocode';
import { mapStyles } from './styled';


Geocode.setApiKey("AIzaSyBe7J1RZpb8hX6N1zpT43hn9LvAnrx2o2k");

// Geocode.fromAddress("Los Angeles").then(
//     response => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//     },
//     error => {
//       console.error(error);
//     }
// );
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectPlace: {},
        locations: [],
        latS: 37.7219,
        lngS: -122.4782,
        authenticationState: 'DEFAULT',
        previousAuthenticationState: 'DEFAULT',
        positions: []
    };
    //Used to show the info window pop up which is from 
    //the google-maps-react library

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    //Closing the infowindow once a user clicks on the close button
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    componentDidMount() {
        this.getGeoLoc();
    }

    getGeoLoc = address => {
        // console.log('todos:');
        // console.log(this.props.todos);
        // var i = 0;
        // this.props.todos.forEach(element => {
        //     Geocode.fromAddress(`${element.address}`).then(
        //         response => {
        //             // console.log("address:")
        //             // console.log(element.address)
        //             // console.log("response");
        //             // console.log(response.results);
        //             const { lat, lng } = response.results[0].geometry.location;

        //             this.state.locations.push({
        //                 lats: lat,
        //                 lngS: lng
        //             })

        //             i++
        //             if (i === 0) {

        //                 this.setState({
        //                     latS: lat,
        //                     lngS: lng
        //                 });
        //             }
        //             else if (i === this.props.todos.length) {
        //                 this.setState({
        //                     authenticationState: 'AUTHENTICATED'
        //                 });
        //                 // console.log("locations:")
        //                 // console.log(this.state.locations)
        //             }
                    
        //             document.append()

        //             this.state.positions.push(this.props.position)

        //             // console.log(lat, lng);
        //         },
        //         error => {
        //             console.error(error);
        //         }
        //     );
        // });
            Geocode.fromAddress(`${this.props.todos[0].address}`).then(
            response => {
                console.log("response");
                console.log(response.results);
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({
                 latS: lat,
                 lngS: lng,
                 authenticationState: 'AUTHENTICATED'
              });

              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
        );
    };

    render() {
        // if (this.state.authenticationState === 'AUTHENTICATED' && this.state.previousAuthenticationState === 'DEFAULT') {
        //     var markers;
        //     var i = 0;
        //     console.log('positions')
        //     console.log(this.state.positions)
        //     console.log(this.props.location)
        //     markers = this.props.todos.map(todo => {
        //         // this.props.location = this.state.locations[i];
        //         return (
        //             <Marker
        //                 onClick={this.onMarkerClick}
        //                 position={this.state.positions[i]}
        //                 name={todo.address}
        //             />
        //         )
        //         i++;
        //     })

        //     this.setState({
        //         previousAuthenticationState: 'AUTHENTICATED'
        //     });
        // }

        return (
            <div>
                {this.state.authenticationState === 'AUTHENTICATED' &&
                    <Map
                        google={this.props.google}
                        zoom={12}
                        style={mapStyles}
                        //Initial coordinates are set to SFSU
                        initialCenter={{
                            lat: this.state.latS,
                            lng: this.state.lngS
                        }}
                    >
                        {/*When a marker is clicked it will display the address of what was clicked */}
                        <Marker
                            onClick={this.onMarkerClick}
                            position={this.props.location}
                            name={this.props.todos[0].address}
                        />
                        {/*Info window displays address for marker when its clicked*/}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </Map>
                }
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe7J1RZpb8hX6N1zpT43hn9LvAnrx2o2k'
})(MapContainer);