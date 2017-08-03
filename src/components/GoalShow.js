import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal, deleteGoal, deleteReflection } from '../actions/goal';
import Reflection from './Reflection';
import SmallRef from './SmallRef';
import '../App.css';

class GoalShow extends Component {



  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGoal(id);
  }

  deleteGoal = () => {
    this.props.deleteGoal(this.props.match.params.id);
    this.props.history.push('/');
  };

  render() {
    if (!this.props.goal) {
      return <h1>Loading....</h1>;
    }
    const { title, reflections } = this.props.goal;
    const right = 'right';
    const left = 'left';
    console.log('reflections', reflections);

    return (
      <div className="timeline-container">
        <br />
        <button onClick={this.deleteGoal}>delete me!</button>
        <Link to="/">Back To Index</Link>
        <Reflection goalId={this.props.match.params.id} />

        <h1 className="project-name">
          {title}
        </h1>
        <div className="timeline">
          {reflections.map((ref, i) => {
            switch (i % 2) {
              case 0:
                return (
                  <SmallRef
                    key={ref._id}
                    reflection={ref}
                    goalId={this.props.match.params.id}
                    deleteReflection={this.props.deleteReflection}
                    leftright={"right"}
                  />
                );
              default:
               return (
                  <SmallRef
                    key={ref._id}
                    reflection={ref}
                    goalId={this.props.match.params.id}
                    deleteReflection={this.props.deleteReflection}
                    leftright={"left"}
                  />
                );
            }
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    goal: state.goal.goals.find(g => g._id === ownProps.match.params.id)
  };
}

export default connect(mapStateToProps, {
  fetchGoal,
  deleteGoal,
  deleteReflection
})(GoalShow);
