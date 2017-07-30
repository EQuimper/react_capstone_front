import React, { Component } from 'react';
import Reflection from './Reflection';

class Goal extends Component {
  render() {
    console.log(reflections)
    const { title, _id, reflections } = this.props.goalContent;
    return (
      <div>
        <h1>
          {title}
        </h1>
        <Reflection goalId={_id} />
        <ul>
        {reflections.map(ref=>
          <li key={ref.id}>{ref.reflectionContent}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Goal;
