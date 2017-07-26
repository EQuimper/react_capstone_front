import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {


  clearCache(){
    console.log('this worked');
    window.localStorage.clear();
    window.location.reload()
  }

  render(){
    return(
      <div className="cssMenu">
      <nav>
      <ul >
        <Link to="/login">
        Login
        </Link>
        <button type="submit" onClick={this.clearCache} className="cssItems">Logout</button>
      </ul>
      </nav>
      </div>
    )
  }
}

export default Navbar;