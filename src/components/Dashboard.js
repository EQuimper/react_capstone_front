import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal } from '../actions/goal';
import Goal from './Goal';
import '../App.css';

class Dashboard extends Component {
  
  state = {
    goalName: '',
  }

  onChangeGoal = (e) => {
    this.setState({
      goalName: e.target.value
    })
  }

  onSubmitGoal = (e) => {
    e.preventDefault();

    this.props.addGoal(this.state.goalName)

    this.setState({
      goalName: ''
    })
    console.log(this.props.appStore)
  }

  renderGoals(){
    return this.props.appStore.goals.map(goal=>(
      <Goal goalContent={goal}/>
    ))
  }


  render(){
    return(
      <div className="dashboard">
      <h1>Get ready to rumble</h1>
      <form onSubmit={this.onSubmitGoal} action="">
      <input onChange={this.onChangeGoal} type="text" placeholder="add a goal" value={this.state.goalName}/>
      <button type="submit">Submit a goal</button>
      </form>
      <div>
      {this.renderGoals()}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    appStore: state.goal
  }
}

export default connect(mapStateToProps, {addGoal})(Dashboard);