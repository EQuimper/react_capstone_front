import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReflection} from '../actions/goal';
import { Input, Button, Grid } from 'material-ui';

class SmallRef extends Component {
  
  state = {
    edit: false,
    content: this.props.reflection.reflectionContent 
  };

  onChange = (e) => {    
    this.setState({
      content: e.target.value
    })
  }

    updateReflection = () => {
    this.props.updateReflection(this.props.goalId, this.props.reflection._id, {reflectionContent: this.state.content});
    this.setState({
      edit: false
    })
  };



  deleteReflection = id => {
    this.props.deleteReflection(this.props.goalId, id);
    console.log(id);
  };

  changeRef = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    const { reflection } = this.props;
    if (!this.state.edit) {
      <div>hidden</div>;
    }
    return (
      <div className="timeline-item">
        <div className="timeline-icon">
          <i className="fa fa-envelope-o" aria-hidden="true" />
        </div>
        <div className={`timeline-content ${this.props.leftright}`}>
          <h2>
            {reflection.title}
          </h2>
          {this.state.edit
            ? <Input value={this.state.content} onChange={this.onChange}/>
            : <p>
                {this.state.content}
              </p>
            }
          <span className="time-stamp">
            {new Date(reflection.createdAt).toDateString()}
          </span>
          <br/>
          <br/>
          <Button onClick={() => this.deleteReflection(reflection._id)}>
            Delete Me
          </Button>
          <Button onClick={this.changeRef}>Edit Me</Button>
          <Button onClick={this.updateReflection}>Update me</Button>
        </div>
      </div>
    );
  }
}

export default connect(null, {updateReflection})(SmallRef);
