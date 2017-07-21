import React, { Component } from 'react';
import Goal from './Goal';
import '../App.css';

class Dashboard extends Component {
  
  state = {
    goalName: ''
  }
  
  render(){
    return(
      <div className="dashboard">
      <h1>Get ready to rumble</h1>
      <form action="">
      <input type="text" placeholder="add a goal"/>
      <button>Submit a goal</button>
      </form>
      <Goal />
      </div>
    )
  }
}

export default Dashboard;