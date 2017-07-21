import React, { Component } from 'react';
import Reflection from './Reflection';

class Goal extends Component {
  render() {
    const { goal_name, _id, reflections } = this.props.goalContent;
    return (
      <div>
        <h1>
          {goal_name}
        </h1>
        <Reflection goalId={_id} />
        <ul>
        {reflections.map(ref=>
          <li key={ref.id}>{ref.reflection_content}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Goal;
