import React, { Component } from 'react';
import {connect} from 'react-redux';
import { register } from '../actions/user';
import '../App.css';
import Login from './Login';
import Navbar from './Navbar';

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
      <Navbar/>
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