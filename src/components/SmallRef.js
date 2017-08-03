import React, { Component } from 'react';

class SmallRef extends Component {
  state = {
    edit: false,
    oldRef: '',
    newRef: ''
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
          <p>
            {reflection.reflectionContent}
          </p>
          <span className="time-stamp">
            {new Date(reflection.createdAt).toDateString()}
          </span>
          <button onClick={() => this.deleteReflection(reflection._id)}>
            Delete Me
          </button>
          <button onClick={this.changeRef}>Edit Me</button>
        </div>
      </div>
    );
  }
}

export default SmallRef;
