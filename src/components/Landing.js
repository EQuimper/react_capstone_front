import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactPlayer from 'react-player';
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <h3>Welcome</h3>
        <div className="video">
        <ReactPlayer volume={0} playing url='https://www.youtube.com/watch?v=ZXsQAXx_ao0/'/>
        </div>
      </div>
    );
  }
}

export default Landing;
