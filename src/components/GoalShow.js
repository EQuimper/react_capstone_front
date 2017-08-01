import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal } from '../actions/goal';
import Reflection from './Reflection';
class GoalShow extends Component {



  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGoal(id)
  }

  render() {
    if (!this.props.goal) {
      return <h1>Loading....</h1>
    }
    const { title, reflections } = this.props.goal;
    console.log('reflections', reflections);
   
    return (
      <div>
        {title}
      <Reflection goalId={this.props.match.params.id} />
        <ul>
          {reflections.map(ref => {
            return (
              <li key={ref._id}>
                {ref.reflectionContent}
              </li>
            );
          })}
        </ul>
      <Link to="/">Back To Index</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    goal: state.goal.goals.find(g => g._id === ownProps.match.params.id),
  };
}

export default connect(mapStateToProps, { fetchGoal })(GoalShow);
