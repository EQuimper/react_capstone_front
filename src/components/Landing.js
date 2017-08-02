import React, { Component } from 'react';
import Navbar from './Navbar';

class Landing extends Component {
  render(){
    return(
      <div className="dashboard">
      <Navbar/>
      Welcome to your goal setting paradise
      </div>
    )
  }
}

export default Landing;