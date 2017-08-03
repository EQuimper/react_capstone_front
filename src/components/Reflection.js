import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReflection} from '../actions/goal';

class Reflection extends Component {
  
  state = {
    title: '',
    reflectionContent: ''
  }

  onChangeRef = (e) => {
    this.setState({
      reflectionContent: e.target.value
    })
  }

    onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmitRef = (e) => {
    e.preventDefault();
    this.props.addReflection(this.state.title, this.state.reflectionContent, this.props.goalId)

    this.setState({
      reflectionContent: '',
      title: ''
    })

  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitRef} action="">
        <input onChange={this.onChangeTitle} type="text" placeholder="add a title" value={this.state.title}/>
        <input onChange={this.onChangeRef} type="text" placeholder="add a reflection" value={this.state.reflectionContent}/>
        <button type="submit">submit a reflection</button>
        </form>
        <div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    appStore: state.goal
  }
}

export default connect(mapStateToProps, {addReflection})(Reflection);