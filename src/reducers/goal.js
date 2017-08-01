import {
  ADD_GOAL,
  ADD_REFLECTION,
  LOAD_GOALS,
  FETCH_GOAL
} from '../actions/goal';
import uuid from 'uuid';

const initialState = {
  goals: [],
  hasFetched: false
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
            title: action.goal_name,
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
                      reflectionContent: action.ref,
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
      return {
        ...state,
        goals: [...state.goals, ...action.goalsArray],
        hasFetched: true
      };

    case FETCH_GOAL:
      return {
        ...state,
        goals: state.goals.length === 0 ? [
          ...state.goals,
          action.payload.data,
        ] : state.goals.map(goal => 
          goal._id === action.payload.data._id ?
            {
              ...goal,
              ...action.payload.data
            } : goal
        )
      };

    default:
      return state;
  }
};


