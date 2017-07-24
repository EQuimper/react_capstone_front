import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal, loadGoals } from '../actions/goal';
import Goal from './Goal';
import Login from './Login';
import '../App.css';

class Dashboard extends Component {
  
  state = {
    goalName: '',
  }

  componentDidMount(){
    this.props.loadGoals()
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
    if(this.props.isLogged){
      return <h1>I'm Logged</h1>
    } 
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

      <div>
      <h1>Login Screen</h1>
      <Login/>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    appStore: state.goal,
    isLogged: state.user.isLogged
  }
}

export default connect(mapStateToProps, {addGoal, loadGoals})(Dashboard);