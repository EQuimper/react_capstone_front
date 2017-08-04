import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../actions/user';
import '../App_nav.css';

class Navbar extends Component {


  clearCache = () => {
    console.log('this worked');
    localStorage.removeItem('token')
    this.props.logout();
  }

  render() {
    return (
      <div className="cssMenu">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link onClick={this.clearCache} to="/landing">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(null, {logout})(Navbar);
