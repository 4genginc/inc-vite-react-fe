import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer.jsx';

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer: userReducer
});

export default rootReducer;