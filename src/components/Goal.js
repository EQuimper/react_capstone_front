import React, { Component } from 'react';
import Reflection from './Reflection';
import { Link } from 'react-router-dom';


class Goal extends Component {
  render() {
    console.log(reflections);
    const { title, _id, reflections } = this.props.goalContent;
    if (!title) {
      return <div>loading</div>;
    }
    return (
      <div className="goal">
        <h1>
          <Link to={`/goals/${_id}`}>
            {title}
          </Link>
        </h1>
      </div>
    );
  }
}

export default Goal;
