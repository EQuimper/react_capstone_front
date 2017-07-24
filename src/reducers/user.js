import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/user';
const info = localStorage.getItem('user');

const initialState = {
  isLogged: info != null,
  loading: false,
  info: JSON.parse(info)|| null,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        info: action.data
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
};