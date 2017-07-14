import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reflection from './Reflection';
 

class Goal extends Component {
  
  
  render() {
    return (
      <div>
        <Reflection />
      </div>
    );
  }
}


export default connect()(Goal);