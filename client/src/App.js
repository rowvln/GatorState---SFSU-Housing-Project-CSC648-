import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import { connect } from 'react-redux';
import Results from '../src/pages/Results';
import LoginPage from '../src/pages/LoginPage';
import RegistrationPage from '../src/pages/RegistrationPage';
import ViewListings from '../src/pages/ViewListings'
import UploadListings from '../src/pages/UploadListing';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
      <BrowserRouter>
        <div className="App">
        {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/results" component={Results} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
            <Route path="/viewListings" component={ViewListings} />
            <Route path="/uploadlistings" component={UploadListings}/>
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    // searchValue: 'hey',
    searchValue: state.searchReducer.searchValue,
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
