import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userListReducer from './userListReducer.jsx';
import userDetailReducer from './userDetailReducer.jsx';
import dashboardReducer from './dashboardReducer.jsx';

const rootReducer = combineReducers({
  auth: authReducer,
  userListReducer: userListReducer,
  userDetailReducer: userDetailReducer,
  dashboardReducer: dashboardReducer
});

export default rootReducer;