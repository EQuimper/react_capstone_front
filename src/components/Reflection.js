import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReflection } from '../actions/goal';
import { Input, Button, TextField } from 'material-ui';

class Reflection extends Component {
  state = {
    title: '',
    reflectionContent: ''
  };

  onChangeRef = e => {
    this.setState({
      reflectionContent: e.target.value
    });
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmitRef = e => {
    e.preventDefault();
    this.props.addReflection(
      this.state.title,
      this.state.reflectionContent,
      this.props.goalId
    );

    this.setState({
      reflectionContent: '',
      title: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitRef} action="">
          <div>
            <Input
              onChange={this.onChangeTitle}
              type="text"
              placeholder="add a title"
              value={this.state.title}
            />
          </div>
          <div>
            <Input
              onChange={this.onChangeRef}
              type="text"
              rows={3}
              placeholder="add a reflection"
              value={this.state.reflectionContent}
            />
          </div>
          <br />

          <div />
          <Button raised secondary={true} type="submit">
            submit a reflection
          </Button>
        </form>
        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appStore: state.goal
  };
}

export default connect(mapStateToProps, { addReflection })(Reflection);
