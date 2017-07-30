import { Goal, Reflection } from '../utils/api.js';

export const ADD_GOAL = 'ADD_GOAL';

export function addGoal(goal_name) {
  return async dispatch => {
    try {
      const { data } = await Goal.insertGoal({ goal_name });
      return dispatch({
        type: ADD_GOAL,
        goal_name,
        _id: data._id
      });
    } catch (error) {
      throw error;
    }
  };
}

export const ADD_REFLECTION = 'ADD_REFLECTION';

export function addReflection(ref, goalId) {
  return async dispatch =>{
    try {
      const res = await Reflection.insertReflection(ref, goalId)
      return dispatch({
           type: ADD_REFLECTION,
            ref,
            goalId,
            _id: res.data._id
      })
    } catch (error) {
      
    }
  }
}

export const LOAD_GOALS = 'LOAD_GOALS';

export function loadGoals() {
  return async dispatch => {
    try {
      const res = await Goal.loadGoal();
      console.log("res",res);
      if (res.data) 
        return dispatch({
          type: LOAD_GOALS,
          goalsArray: res.data
        });
    } catch (error) {throw error}
  };
}
