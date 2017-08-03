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

export function addReflection(title, ref, goalId) {
  return async dispatch => {
    try {
      const res = await Reflection.insertReflection(title, ref, goalId);
      return dispatch({
        type: ADD_REFLECTION,
        title,
        ref,
        goalId,
        createdAt: res.data.createdAt,
        _id: res.data._id
      });
    } catch (error) {}
  };
}

export const LOAD_GOALS = 'LOAD_GOALS';

export function loadGoals() {
  return async dispatch => {
    try {
      const res = await Goal.loadGoal();
      console.log('res', res);
      if (res.data)
        return dispatch({
          type: LOAD_GOALS,
          goalsArray: res.data
        });
    } catch (error) {
      throw error;
    }
  };
}

export const FETCH_GOAL = 'FETCH_GOAL';

export function fetchGoal(id) {
  return async dispatch => {
    try {
      const req = await Goal.fetchGoal(id);
      return dispatch({
        type: FETCH_GOAL,
        payload: req
      });
    } catch (error) {
      throw error;
    }
  };
}

export const DELETE_GOAL = 'DELETE_GOAL';

export function deleteGoal(id) {
  return async dispatch => {
    try {
      await Goal.deleteGoal(id);
      return dispatch({
        type: DELETE_GOAL,
        goalID: id
      });
    } catch (error) {
      throw error;
    }
  };
}

export const DELETE_REFLECTION = 'DELETE_REFLECTION';

export function deleteReflection(goalId, id) {
  return async dispatch => {
    try {
      await Goal.deleteReflection(goalId, id);
      return dispatch({
        type: DELETE_REFLECTION,
        goalId,
        refId: id
      });
    } catch (error) {
      throw error;
    }
  };
}
