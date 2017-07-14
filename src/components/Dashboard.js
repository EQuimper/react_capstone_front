import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Goal from './Goal';
// import goalForm from './goalForm';
import Goal from './Goal';
import Reflection from './Reflection';
import { createGoal } from '../actions/Reflection';

class Dashboard extends Component {

  state = {
    goalName: ''
  }

   changeGoalName = (e) => {
    this.setState({
      goalName: e.target.value
    })

  }
  
  submitGoal = (e) => {
    e.preventDefault();

    this.props.createGoal(this.state.goalName)

      this.setState({
        goalName: ''
      })

  }
  
  render() {
    return (
        <div>
        <form onSubmit={this.submitGoal} action="">
          <input onChange={this.changeGoalName}type="text" placeholder="create a goal" value={this.state.goalName}/>
          <button type="submit">Submit a goal</button>
        </form>

        <ul>
        {this.props.reflection.goals.map( (goal, i) =>(
          <div key={i}> 
          <h1>{goal.goalName}</h1>
          <Reflection goalId={goal.id}/>
          {goal.reflections.map(ref =>(
            <li key={ref.id}>
            <h2>{ref.name}</h2>
            </li>
          ))}
          </div>
        ))}
        </ul>

        </div>
        
        
    );
  }
}

function mapStateToProps(state){
  return{
    reflection: state.reflection
  }
}


export default connect( mapStateToProps, {createGoal})(Dashboard);