export const ADD_GOAL = "ADD_GOAL";

export function addGoal(goalName) {
  return{
    type: ADD_GOAL,
    goalName
  }
}