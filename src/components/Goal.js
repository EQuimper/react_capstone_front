import React, { Component } from 'react';
import Reflection from './Reflection';
import '../App.css';

class Goal extends Component {
  render() {
    const { goalName, id, reflections } = this.props.goal;
    return (
      <div className="goalContainer">
        <h1>
          {goalName}
        </h1>
        <Reflection goalId={id} />
        <ul>
          {reflections.map(ref =>
            <li key={ref.id}>
              <h3>
                {ref.name}
              </h3>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Goal;
