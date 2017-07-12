import {ADD_REFLECTION } from '../actions/Reflection';

export default (state = [], action ) => {
  switch (action.type) {
    case ADD_REFLECTION:
      return [...state, action.ref]
    default: 
    return state;
  }
}