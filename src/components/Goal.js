import React, { Component } from 'react';
import Reflection from './Reflection';
import '../App.css';

class Goal extends Component {
  render() {
    const { goal_name, _id, reflections } = this.props.goal;
    return (
      <div className="goalContainer">
        <h1>
          {goal_name}
        </h1>
        <Reflection goalId={_id} />
        <ul>
          {reflections.map(ref =>
            <li key={ref._id}>
              <h3>
                {ref.reflection_content}
              </h3>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Goal;
