import { ADD_GOAL, ADD_REFLECTION } from '../actions/goal';
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
            id: action._id,
            goalName: action.goalName,
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
                      reflection_content: action.ref,
                      date: Date.now(),
                      id: uuid.v4(),
                      goal_id: action.goalId
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
