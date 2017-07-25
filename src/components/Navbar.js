import React, { Component } from 'react';
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
        <button className="cssItems">Login</button>
        <button type="submit" onClick={this.clearCache} className="cssItems">Logout</button>
      </ul>
      </nav>
      </div>
    )
  }
}

export default Navbar;