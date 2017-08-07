import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal, loadGoals } from '../actions/goal';
import Goal from './Goal';
import Register from './Register';
import { Grid, Input, Button } from 'material-ui';
import '../App.css';

class Dashboard extends Component {
  state = {
    goalName: ''
  };

  componentDidMount() {
    if (!this.props.appStore.hasFetched) {
      this.props.loadGoals();
    }
  }

  onChangeGoal = e => {
    this.setState({
      goalName: e.target.value
    });
  };

  onSubmitGoal = e => {
    e.preventDefault();

    this.props.addGoal(this.state.goalName);

    this.setState({
      goalName: ''
    });
    console.log(this.props.appStore);
  };

  renderGoals() {
    if (!this.props.appStore.goals) {
      return <div>loading</div>;
    } else {
      return this.props.appStore.goals.map(goal =>
        <Goal key={goal._id} goalContent={goal} />
      );
    }
  }

  render() {
    return (
      <div className="main">
        <Grid container spacing={24}>
          <Grid className="dashboard" xs={12}>
            <h1>Get ready to rumble</h1>
            <form onSubmit={this.onSubmitGoal} action="">
              <div>
                <Input
                  onChange={this.onChangeGoal}
                  type="text"
                  placeholder="add a goal"
                  value={this.state.goalName}
                />
              </div>
              <div>
                <Button type="submit">Submit a goal</Button>
              </div>
            </form>
          </Grid>

          <Grid item xs={12}>
            <div className="goal-container dashboard">
              {this.renderGoals()}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appStore: state.goal,
    isLogged: state.user.isLogged
  };
}

export default connect(mapStateToProps, { addGoal, loadGoals })(Dashboard);
