import {
  ADD_GOAL,
  ADD_REFLECTION,
  LOAD_GOALS,
  FETCH_GOAL,
  DELETE_GOAL,
  DELETE_REFLECTION
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
                    {
                      title: action.title,
                      reflectionContent: action.ref,
                      _id: action._id,
                      goal_id: action.goalId,
                      createdAt: action.createdAt
                    },
                    ...goal.reflections
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
        goals:
          state.goals.length === 0
            ? [...state.goals, action.payload.data]
            : state.goals.map(
                goal =>
                  goal._id === action.payload.data._id
                    ? {
                        ...goal,
                        ...action.payload.data
                      }
                    : goal
              )
      };

    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal._id !== action.goalID)
      };

    case DELETE_REFLECTION:
      return {
        ...state,
        goals: state.goals.map(
          goal =>
            goal._id === action.goalId
              ? {
                  ...goal,
                  reflections: goal.reflections.filter(
                    ref => ref._id !== action.refId
                  )
                }
              : goal
        )
      };
    default:
      return state;
  }
};
