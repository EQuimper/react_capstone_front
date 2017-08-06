import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';
import { Button } from 'material-ui';

class App extends Component {
  render() {
    return (
      <div>
        <Button> Something here</Button>
        <h1>Hello World</h1>
        <Home />
      </div>
    );
  }
}

export default connect()(App);
