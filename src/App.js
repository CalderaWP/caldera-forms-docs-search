import React from 'react';
import  { Component } from 'react';
import DocSearch from './DocSearch';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <DocSearch
              apiRoot={this.props.apiRoot}
          />
      </div>
    );
  }
}

export default App;
