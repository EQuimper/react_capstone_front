export const CREATE_GOAL = 'CREAT_GOAL';

export function createGoal(name) {
  return {
    type: CREATE_GOAL,
    name
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
