export const ADD_REFLECTION = "ADD_REFLECTION";

export function addReflection(ref) {
  return {
    type: ADD_REFLECTION,
    ref
  }
}

export const CREATE_GOAL = "CREAT_GOAL";

export function createGoal(goal){
  return{
    type: CREATE_GOAL,
    goal
  }
}