import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
        <Home />
      </div>
    );
  }
}

export default connect()(App);
