import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import Navbar from './Navbar';
import '../App.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChangeUser = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmitLogin = async e => {
    e.preventDefault();

    try {
      await this.props.login(this.state);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }

    console.log('boom');
  };

  render() {
    console.log(this.props);
    return (
      <div className="dashboard">
        <h1>Please Login</h1>
        <form onSubmit={this.onSubmitLogin} action="">
          <input
            onChange={this.onChangeUser}
            type="text"
            placeholder="enter username"
            value={this.state.username}
          />
          <input
            onChange={this.onChangePassword}
            type="password"
            placeholder="enter password"
            value={this.state.password}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    appStore: state.user
  };
}

export default connect(mapStateToProps, { login })(Login);
