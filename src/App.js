import React from 'react';
import  { Component } from 'react';
import DocSearch from './DocSearch';
import logo from './logo.svg';
import './App.css';

import  { Nav,Navbar,NavItem } from  'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#home">
                          <img src={logo} alt="logo" style={{width:"25px"}}/>
                      </a>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="https://calderaforms.com">
                      Caldera Forms
                  </NavItem>
                  <NavItem eventKey={2} href="https://calderaforms.com/support">
                      Support
                  </NavItem>
              </Nav>
          </Navbar>

          <DocSearch/>

      </div>
    );
  }
}

export default App;
