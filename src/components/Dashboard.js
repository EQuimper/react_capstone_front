import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Goal from './Goal';
import goalForm from './goalForm';
import { createGoal } from '../actions/Reflection';

class Dashboard extends Component {
  
  submitGoal = (e) => {
    e.preventDefault();

    this.props.dispatch(createGoal())
  }
  
  render() {
    return (
        <div>
        <goalForm/>

        </div>
        
        
    );
  }
}


export default connect()(Dashboard);