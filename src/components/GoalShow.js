import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoal } from '../actions/goal';

class GoalShow extends Component {
  
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchGoal(id)

    console.log('========================================')
    
  }
  
  render() {
    const {goal} = this.props;
    if(!goal){
      return <div> Loading </div>
    }
    return <div></div>;
  }
}

function mapStateToProps({goal}) {
  return {
    goal
  };
}

export default connect(mapStateToProps, { fetchGoal })(GoalShow);
