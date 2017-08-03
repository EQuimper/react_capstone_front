import React, { Component } from 'react';

class SmallRef extends Component {
  
    deleteReflection = id => {
    this.props.deleteReflection(this.props.goalId, id);
  };

  
  render() {

    const { reflection } = this.props;
    return (
      <div className="timeline-item">
        <div className="timeline-icon">
          <i className="fa fa-envelope-o" aria-hidden="true" />
        </div>
        <div className="timeline-content right">
          <h2>Reflection Title</h2>
          <p>
            {reflection.reflectionContent}
          </p>
          <span className="time-stamp">
            {new Date(reflection.createdAt).toDateString()}
          </span>
          <button onClick={() => this.deleteReflection(reflection._id)}>
            Delete Me
          </button>
        </div>
      </div>
    );
  }
}

export default SmallRef;
