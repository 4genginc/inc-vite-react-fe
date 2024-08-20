import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/authActions';

const initialState = {
  username: '',
  password: '',
  isSubmitting: false,
  error: null,
  userData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, isSubmitting: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isSubmitting: false, userData: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isSubmitting: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
