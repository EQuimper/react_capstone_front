import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App_nav.css';

class Navbar extends Component {
  clearCache() {
    console.log('this worked');
    window.localStorage.clear();
    window.location.reload();
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

export default Navbar;
