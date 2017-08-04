import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactPlayer from 'react-player';
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="dashboard">
        <h3>Welcome</h3>
        <div className="video">
        </div>
      </div>
    );
  }
}

export default Landing;
