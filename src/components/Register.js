import React, { Component } from 'react';
import {connect} from 'react-redux';
import { register } from '../actions/user';
import '../App.css';
import Login from './Login';

class Register extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  onChangeUser = e => {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmitLogin = e => {
    e.preventDefault();

    this.props.register(this.state)

    console.log('boom')
  }



  render(){
    console.log(localStorage.getItem("user"));
    return(
      <div className="dashboard">
      <h1>Please Login</h1>
      <form onSubmit={this.onSubmitLogin} action="">
      <input onChange={this.onChangeUser} type="text" placeholder="enter username" value={this.state.username}/>
      <input onChange={this.onChangeEmail} type="email" placeholder="enter email" value={this.state.email}/>
      <input onChange={this.onChangePassword} type="text" placeholder="enter password" value={this.state.password}/>
      <button type="submit">Register</button>
      </form>
      <h1>Login</h1>
      <Login/>
      </div>
    )
  }
}

export function mapStateToProps(state){
  return {
  appStore: state.user
  }
}

export default connect(mapStateToProps, {register})(Register);