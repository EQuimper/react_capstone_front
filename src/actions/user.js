import { User } from '../utils/api'; 

export function login(userInput) {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN' });

    try {
      const { data } = await User.registerUser(userInput);
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      
      console.log(data);
      return dispatch(loginSuccess(data));
    } catch (error) {
      return dispatch(loginError(error));
    }
  }
}

function loginSuccess(data) {
  return {
    type: 'LOGIN_SUCCESS',
    data
  }
}

function loginError(error) {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}


