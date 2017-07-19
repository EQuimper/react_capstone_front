import { Goal, Reflection } from '../utils/api';
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
  return async dispatch => {
    try {
      const res = await Reflection.insertReflection(name, goalId)
      console.log(res)
      return dispatch({
        type: ADD_REFLECTION,
        name,
        goalId,
        _id: res.data._id
      })
    } catch (error) {
      throw error
    }
  }
}

export const LOAD_GOALS = 'LOAD_GOALS';

export function loadGoals() {
  return async dispatch => {
    try {
      const res = await Goal.getGoal();
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

