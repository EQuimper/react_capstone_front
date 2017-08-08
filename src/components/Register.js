import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/user';
import '../App.css';
import { Input, Button, TextField } from 'material-ui';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  onChangeUser = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmitRegister = e => {
    e.preventDefault();

    this.props.register(this.state);

    console.log('boom');
  };

  render() {
    console.log(localStorage.getItem('user'));
    return (
      <div className="dashboard">
        <form onSubmit={this.onSubmitRegister} action="">
          <div>
            <Input
              onChange={this.onChangeUser}
              type="text"
              placeholder="enter username"
              value={this.state.username}
            />
          </div>
          <div>
            <Input
              onChange={this.onChangeEmail}
              type="text"
              placeholder="enter email"
              value={this.state.email}
            />
          </div>
          <div>
            <Input
              onChange={this.onChangePassword}
              type="password"
              placeholder="enter password"
              value={this.state.password}
            />
          </div>
          <br />
          <div>
            <Button raised color="primary" type="submit">
              Register
            </Button>
          </div>
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

export default connect(mapStateToProps, { register })(Register);
