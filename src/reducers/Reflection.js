import uuid from 'uuid/v4';
import { ADD_REFLECTION, CREATE_GOAL } from '../actions/Reflection';

const initialState = {
  goals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFLECTION:
      return {
        ...state,
        goals: state.goals.map(goal => 
          goal.id === action.goalId ?
            {
              ...goal,
              reflections: [
                ...goal.reflections,
                {
                  name: action.name,
                  date: Date.now(),
                  id: uuid()
                }
              ]
            }: goal)
      };

    case CREATE_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals,
          {
            goalName: action.name,
            id: uuid(),
            reflections: []
          }
        ]
      };

    default:
      return state;
  }
};