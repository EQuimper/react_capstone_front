import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal, deleteGoal, deleteReflection } from '../actions/goal';
import Reflection from './Reflection';
import SmallRef from './SmallRef';
import { Input, Button, Grid } from 'material-ui';

import '../App.css';

class GoalShow extends Component {
  state = {
    reflectionText: '',
    isChanged: false
  };

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
        <Grid className="dashboard">
          <Reflection goalId={this.props.match.params.id} />
        </Grid>
        <Grid>
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
                      leftright={'right'}
                    />
                  );
                default:
                  return (
                    <SmallRef
                      key={ref._id}
                      reflection={ref}
                      goalId={this.props.match.params.id}
                      deleteReflection={this.props.deleteReflection}
                      leftright={'left'}
                    />
                  );
              }
            })}
          </div>
        </Grid>
                <Grid className="right">
          <Button raised secondary={true} onClick={this.deleteGoal}>delete me!</Button>
          <Link to="/">
                    <Button raised>Back Home
          </Button>
          </Link>
        </Grid>
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
