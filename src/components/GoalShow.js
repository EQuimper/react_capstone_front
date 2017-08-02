import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal } from '../actions/goal';
import Reflection from './Reflection';
import '../App.css';

class GoalShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGoal(id);
  }

  render() {
    if (!this.props.goal) {
      return <h1>Loading....</h1>;
    }
    const { title, reflections } = this.props.goal;
    console.log('reflections', reflections);

    return (
      <div className="timeline-container">
        <br />
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
                  <div className="timeline-item" key={ref._id}>
                    <div className="timeline-icon">
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                    </div>
                    <div className="timeline-content right">
                      <h2>Reflection Title</h2>
                      <p>
                        {ref.reflectionContent}
                      </p>
                      <span className="time-stamp">
                        {ref.createdAt}
                      </span>
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="timeline-item" key={ref._id}>
                    <div className="timeline-icon">
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                    </div>
                    <div className="timeline-content left">
                      <h2>Reflection Title</h2>
                      <p>
                        {ref.reflectionContent}
                      </p>
                      <span className="time-stamp">
                        {ref.createdAt}
                      </span>
                    </div>
                  </div>
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

export default connect(mapStateToProps, { fetchGoal })(GoalShow);
