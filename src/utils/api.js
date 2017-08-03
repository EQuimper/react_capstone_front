import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

axios.defaults.baseURL = baseURL;

class GoalApi {
  constructor() {
    this.path = `/goals`;
  }

  insertGoal(data) {
    return axios.post(
      this.path,
      {
        title: data.goal_name
      },
      {
        headers: {
          authorization: localStorage.getItem('token')
        }
      }
    );
  }

  loadGoal() {
    return axios.get(`/me/goals`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  }
  fetchGoal(id) {
    return axios.get(`/goals/${id}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  }
  deleteGoal(id) {
    return axios.delete(`/goals/${id}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  }
}

class ReflectionApi {
  constructor() {
    this.path = '/reflections';
  }

  insertReflection(data, goalId) {
    return axios.post(
      `${this.path}/${goalId}`,
      {
        reflectionContent: data
      },
      {
        headers: {
          authorization: localStorage.getItem('token')
        }
      }
    );
  }

    deleteReflection(goalId, id) {
    return axios.delete(`/goals/${id}/reflections/${id}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  }
}

class UserApi {
  constructor() {
    this.path = '/';
  }

  registerUser(userInput) {
    return axios.post(`${this.path}/register`, userInput);
  }

  loginUser(userInput) {
    return axios.post(`/users/login`, userInput);
  }
}

export const Goal = new GoalApi();
export const Reflection = new ReflectionApi();
export const User = new UserApi();
