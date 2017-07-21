import {ADD_GOAL} from '../actions/goal';

const initialState = {
  goals: []
}

export default(state = initialState, action ) => {
  switch(action.type){
  
  case ADD_GOAL:
  return{
    ...state,
    goals:[...state.goals, action.goalName]
  }

  default:
  return state
  }
}