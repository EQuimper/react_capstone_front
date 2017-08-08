import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import RaisedButton from 'material-ui/RaisedButton';

import '../App_nav.css';

class Navbar extends Component {
  clearCache = () => {
    console.log('this worked');
    localStorage.removeItem('token');
    this.props.logout();
  };

  render() {
    return (
      <div className="cssMenu">
        <nav>
          <ul>
            <li>
              <RaisedButton>
                <Link to="/login">Login</Link>
              </RaisedButton>
            </li>
            <li>
              <RaisedButton >
                <Link onClick={this.clearCache} to="/landing">
                  Logout
                </Link>
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

export default connect(null, { logout })(Navbar);
