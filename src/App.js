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

          <DocSearch/>

      </div>
    );
  }
}

export default App;
