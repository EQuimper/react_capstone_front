import uuid from 'uuid/v4';
import { ADD_REFLECTION, CREATE_GOAL } from '../actions/Reflection';

const initialState = {
  reflections: [],
  goalsContainer: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFLECTION:
      return {
        reflections: [
          ...state.reflections,
          { reflectionContent: action.ref, id: uuid() }
        ]
      };

    case CREATE_GOAL:
      return {
        ...state,
        goalsContainer:[...state.goalsContainer, action.goal]
        
      };

    default:
      return state;
  }
};
