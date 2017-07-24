import axios from 'axios';

const baseURL = "http://localhost:8080";

axios.defaults.baseURL = baseURL;

class GoalApi {
  constructor(){
    this.path = '/goals/5963816df50e390e1cc182b2'
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
    return axios.get('/users/5963816df50e390e1cc182b2')
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
}

export const Goal = new GoalApi();
export const Reflection = new ReflectionApi();
export const User = new UserApi();