import uuid from 'uuid/v4';
import { CREATE_GOAL, ADD_REFLECTION } from '../actions/goal';

const initialState = {
  goals: [],
  isLogged: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals,
          {
            goalName: action.name,
            id: action._id,
            reflections: []
          }
        ]
      };

    case ADD_REFLECTION:
      return {
        ...state,
        goals: state.goals.map(
          goal =>
            goal.id === action.goalId
              ? {
                  ...goal,
                  reflections: [
                    ...goal.reflections,
                    {
                      name: action.name,
                      date: Date.now(),
                      id: uuid()
                    }
                  ]
                }
              : goal
        )
      };

    default:
      return state;
  }
};
