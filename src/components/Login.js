import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import { Input, Button } from 'material-ui';
import 'typeface-roboto'
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
          <div>
            <Input
              onChange={this.onChangeUser}
              type="text"
              placeholder="enter email"
              value={this.state.username}
            />
          </div>
          <br/>
          <div>
            <Input
              onChange={this.onChangePassword}
              type="password"
              placeholder="enter password"
              value={this.state.password}
            />
          </div>
          <br/>
          <div>
            <Button raised color="primary" type="submit">
              Login
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

export default connect(mapStateToProps, { login })(Login);
