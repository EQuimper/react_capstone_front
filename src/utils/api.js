import axios from 'axios';

const baseURL = "http://localhost:8080";

axios.defaults.baseURL = baseURL;

class GoalApi {
  constructor(){
    this.path = '/goals/596382a77054b80ad400aec5'
  }

  insertGoal(data){

    return axios.post(this.path, {
      goal_name: data.goal_name
    }, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  }

  loadGoal(){
    return axios.get('/users/596382a77054b80ad400aec5')
  }
}

class ReflectionApi {
  constructor(){
    this.path = '/reflections'
  }

  insertReflection(data, goalId){
    return axios.post(`${this.path}/${goalId}`,{
      reflection_content: data
    })
  }
}

class UserApi {
  constructor(){
    this.path = '/api'
  }

  registerUser(userInput){
    return axios.post(`${this.path}/register`, userInput)
  }

  loginUser(userInput){
    return axios.post(`${this.path}/login`, userInput)
  }
}

export const Goal = new GoalApi();
export const Reflection = new ReflectionApi();
export const User = new UserApi();