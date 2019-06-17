import React, { Component } from 'react';
import Header from './Header';
import './styles/App.scss'; 
import Page1 from './page1';
import Page2 from './page2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return ( 
      <div className="app">
        <Router>
          <Header />
          <div className="content-wrapper">
              <Route path="/" exact>
                  { ({ match }) => <Page1 show={match !== null} /> }
              </Route>
              <Route path="/page2" exact>
                  { ({ match }) => <Page2 show={match !== null} /> }
              </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App; 
