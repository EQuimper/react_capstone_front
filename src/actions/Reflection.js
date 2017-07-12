export const ADD_REFLECTION = "ADD_REFLECTION";

export function addReflection(ref) {
  return {
    type: ADD_REFLECTION,
    ref
  }
}