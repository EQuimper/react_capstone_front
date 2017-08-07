import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import { Input, Button } from 'material-ui';
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
              <Button raised color="primary">
                <Link to="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button raised color="secondary">
                <Link onClick={this.clearCache} to="/landing">
                  Logout
                </Link>
              </Button>
            </li>
            <li>
              <Button raised color="default">
                <Link to="/register">Register</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(null, { logout })(Navbar);
