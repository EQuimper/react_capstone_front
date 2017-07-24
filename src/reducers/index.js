import { combineReducers } from 'redux';
import goal from './goal';
import user from './user';

export default combineReducers({
  goal,
  user
})