import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    loggedIn: false
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

    console.log('boom')
  }

  render(){
    return(
      <div>
      <form onSubmit={this.onSubmitLogin} action="">
      <input onChange={this.onChangeUser} type="text" placeholder="enter username" value={this.state.username}/>
      <input onChange={this.onChangeEmail} type="email" placeholder="enter email" value={this.state.email}/>
      <input onChange={this.onChangePassword} type="text" placeholder="enter password" value={this.state.password}/>
      <button type="submit">Register</button>
      </form>
      </div>
    )
  }
}

export default Login;