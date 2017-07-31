import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Navbar from './Navbar';

class Home extends Component {

  renderApp(){
    if(this.props.isLogged){
      return <Dashboard/>
    } return <Landing/>
  }
  
  render(){
    return(
      <div>
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