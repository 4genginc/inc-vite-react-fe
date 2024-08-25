import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userListReducer from './userListReducer.jsx';
import userDetailReducer from './userDetailReducer.jsx';

const rootReducer = combineReducers({
  auth: authReducer,
  userListReducer: userListReducer,
  userDetailReducer: userDetailReducer
});

export default rootReducer;