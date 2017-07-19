import { Goal } from '../utils/api';
import axios from 'axios';

export const CREATE_GOAL = 'CREAT_GOAL';

export function createGoal(name) {
  return async dispatch => {
    try {
      const { data } = await Goal.insertGoal({ name });
      return dispatch({
        type: CREATE_GOAL,
        name,
        _id: data._id
      });
    } catch (error) {
      throw error;
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

export const LOAD_GOALS = 'LOAD_GOALS';

export function loadGoals() {
  return async dispatch => {
    dispatch({
      type: LOAD_GOALS,
      goals: []
    })
    try {
      const res = await axios.get('http:localhost:8080/users/5963816df50e390e1cc182b2');
      if(res.data)
      return dispatch({
        type: LOAD_GOALS,
        goals: res.data.goals
      })
    } catch (error) {
      throw error
    }
  };
}
