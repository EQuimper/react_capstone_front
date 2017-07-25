import {REGISTER
  , REGISTER_SUCCESS
  , REGISTER_ERROR
  , LOGIN
  , LOGIN_ERROR
  , LOGIN_SUCCESS} from '../actions/user';
const info = localStorage.getItem('user');

const initialState = {
  isLogged: info != null,
  loading: false,
  info: JSON.parse(info)|| null,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        loading: true,
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        info: action.data
      };
      
    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }

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