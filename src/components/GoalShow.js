import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal } from '../actions/goal';

class GoalShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props.fetchGoal(id));
  }

  render() {
    const { title, reflections } = this.props.appStore;
    console.log('reflections', reflections);
    
    if(!title){
      return <div>loading</div>
    }
    return (
      <div>
        {title}
        <ul>
          {this.props.appStore.reflections.map(ref => {
            return (
              <li>
                {ref.reflectionContent}
              </li>
            );
          })}
        </ul>
      <Link to="/">Back To Index</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appStore: state.goal
  };
}

export default connect(mapStateToProps, { fetchGoal })(GoalShow);
