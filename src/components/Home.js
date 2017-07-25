import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Register from './Register'
import Navbar from './Navbar';

class Home extends Component {

  renderApp(){
    if(this.props.isLogged){
      return <Dashboard/>
    } return <Register/>
  }
  
  render(){
    return(
      <div>
      <Navbar/>
      {this.renderApp()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    isLogged: state.user.isLogged
  }
}

export default connect(mapStateToProps)(Home);