import uuid from 'uuid/v4';
import { CREATE_GOAL, ADD_REFLECTION, LOAD_GOALS } from '../actions/goal';

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
            goal._id === action.goalId
              ? {
                  ...goal,
                  reflections: [
                    ...goal.reflections,
                    {
                      reflection_content: action.name,
                      date: Date.now(),
                      _id: action._id
                    }
                  ]
                }
              : goal
        )
      };

      case LOAD_GOALS:
      return {
        ...state,
        goals: [...state.goals, ...action.goals]
      } 

    default:
      return state;
  }
};
