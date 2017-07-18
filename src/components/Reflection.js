import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReflection } from '../actions/goal';

import '../App.css';

class Dashboard extends Component {
  state = {
    reflectionContent: ''
  };

  onChange = e => {
    this.setState({
      reflectionContent: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addReflection(this.state.reflectionContent, this.props.goalId);

    this.setState({
      reflectionContent: ''
    });
  };

  render() {
    return (
      <div className="reflection">
        <form action="" onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="enter a reflection"
            value={this.state.reflectionContent}
          />
          <button type="submit">Create a Goal</button>
        </form>
        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goalState: state.goal
  };
}

export default connect(mapStateToProps, { addReflection })(Dashboard);
