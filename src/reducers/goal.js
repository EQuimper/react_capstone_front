import { ADD_GOAL, ADD_REFLECTION, LOAD_GOALS } from '../actions/goal';
import uuid from 'uuid';

const initialState = {
  goals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals,
          {
            _id: action._id,
            goal_name: action.goal_name,
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
                      reflection_content: action.ref,
                      date: Date.now(),
                      _id: action._id,
                      goal_id: action.goalId
                    }
                  ]
                }
              : goal
        )
      };

      case LOAD_GOALS:
      return{
        ...state,
        goals:[...state.goals, ...action.goalsArray ]
      };

    default:
      return state;
  }
};