import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, loadGoals, addReflection } from '../actions/goal';
import Goal from './Goal';

import '../App.css';

class Dashboard extends Component {
  state = {
    goalName: ''
  };

componentDidMount(){
  const myFunction = () => {
    console.log('something')
  }
    this.props.loadGoals();
  myFunction();
}

  onChange = e => {
    this.setState({
      goalName: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createGoal(this.state.goalName);
    this.setState({
      goalName: ''
    });
  };

  renderGoals() {
    return this.props.goalState.goals.map(goal =>
      <Goal key={goal.id} goal={goal} />
    );
  }

  render() {
    return (
      <div className="dashboard">
        <form action="" onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="enter a goal"
            value={this.state.goalName}
          />
          <button type="submit">Create a Goal</button>
        </form>
        <div>
          {this.renderGoals()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goalState: state.goal
  };
}

export default connect(mapStateToProps, { createGoal, loadGoals, addReflection })(Dashboard);
