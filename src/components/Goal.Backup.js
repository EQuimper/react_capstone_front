import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reflection from './Reflection';
import { createGoal } from '../actions/Reflection';
 

class Goal extends Component {
  
  state = {
    goalName: ''
  }
  
  render() {
    return (
      <div>
        <form>
        <input type="text" placeholder="enter a goal name"/>
        <button>Create Goal</button>
        </form> 
        <Reflection />
      </div>
    );
  }
}

function mapStateToProps(state){
  
}

export default connect()(Goal);