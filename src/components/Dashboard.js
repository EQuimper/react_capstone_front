import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal, loadGoals } from '../actions/goal';
import Goal from './Goal';
import Register from './Register';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
            <h1>Get ready to rumble</h1>
            <form onSubmit={this.onSubmitGoal} action="">
              <div>
                <TextField
                  onChange={this.onChangeGoal}
                  type="text"
                  placeholder="add a goal"
                  value={this.state.goalName}
                />
              </div>
              <div>
                <RaisedButton type="submit">Submit a goal</RaisedButton>
              </div>
            </form>


            <div className="goal-container dashboard">
              {this.renderGoals()}
            </div>
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
