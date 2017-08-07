import React, { Component } from 'react';
import Reflection from './Reflection';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui';

class Goal extends Component {
  render() {
    console.log(reflections);
    const { title, _id, reflections } = this.props.goalContent;
    if (!title) {
      return <div>loading</div>;
    }
    return (
      <div className="goal">
        <Card>
          <h1>
          <CardHeader title={title}>
          
          </CardHeader>
            <Link to={`/goals/${_id}`}>
              See More
            </Link>
          </h1>
        </Card>
      </div>
    );
  }
}

export default Goal;
