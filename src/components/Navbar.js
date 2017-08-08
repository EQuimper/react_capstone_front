import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { logout } from '../actions/user';
import '../App_nav.css';

class Navbar extends Component {
  clearCache = () => {
    console.log('this worked');
    localStorage.removeItem('token');
    this.props.logout();
    this._goTo('/landing');
  };

  _goTo = route => this.props.history.push(route);

  render() {
    return (
      <div className="cssMenu">
        <nav>
          <ul>
            <li>
              <RaisedButton primary={true} onClick={() => this._goTo('/login')}>
                Login
              </RaisedButton>
            </li>
            <li>
              <RaisedButton secondary={true} onClick={this.clearCache}>
                Logout
              </RaisedButton>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(connect(null, { logout })(Navbar));
