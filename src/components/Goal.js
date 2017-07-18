import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reflection from './Reflection';

class Goal extends Component {
  render() {
    const { goal } = this.props;
    return (
      <div>
        <h1>
          {goal.goalName}
        </h1>
        <Reflection goalId={goal.id} />
        {goal.reflections.map(ref =>
          <li key={ref.id}>
            <h2>
              {ref.name}
            </h2>
          </li>
        )}
      </div>
    );
  }
}

export default connect()(Goal);
