import { Goal } from '../utils/api.js';

export const ADD_GOAL = 'ADD_GOAL';

export function addGoal(goalName) {
  return async dispatch => {
    try {
      const { data } = await Goal.insertGoal({ goalName });
      return dispatch({
        type: ADD_GOAL,
        goalName,
        id: data._id
      });
    } catch (error) {
      throw error
    }
  };
}

export const ADD_REFLECTION = 'ADD_REFLECTION';

export function addReflection(ref, goalId) {
  return {
    type: ADD_REFLECTION,
    ref,
    goalId
  };
}
