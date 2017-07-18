import { Goal } from '../utils/api';

export const CREATE_GOAL = 'CREAT_GOAL';

export function createGoal(name) {
  return async dispatch => {
    try {
      const {data} = await Goal.insertGoal({ name })
      return dispatch({
        type: CREATE_GOAL,
        name,
        _id: data._id
      });
    } catch (error) {
      throw error
    }
  };
}

export const ADD_REFLECTION = 'ADD_REFLECTION';

export function addReflection(name, goalId) {
  return {
    type: ADD_REFLECTION,
    name,
    goalId
  };
}
