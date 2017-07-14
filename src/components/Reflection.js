import React, { Component } from 'react';
import { connect } from 'react-redux';

// import logo from './logo.svg';
import '../App.css';
import { addReflection} from '../actions/Reflection';

class Reflection extends Component {

  state = {
    reflection: '',
  }

  onChangeReflection = (e) => {
    this.setState({
      reflection: e.target.value
    })
  }

  onSubmitReflection = (e) => {
    e.preventDefault();

    this.props.addReflection(this.state.reflection, this.props.goalId);

    this.setState({
      reflection: ''
    })

  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.onSubmitReflection}>
        <input onChange={this.onChangeReflection}type="text" placeholder="add a reflection" value={this.state.reflection}/>
        <button type="submit" >Submit a reflection</button>
      </form>
      <ul>
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    container: state.reflection
  }
}


export default connect(mapStateToProps, {addReflection})(Reflection);
