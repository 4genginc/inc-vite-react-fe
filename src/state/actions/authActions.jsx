import axios from 'axios';

// Action Types
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

// Thunk for handling login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://inc-node-js-be-cb1cdbebd389.herokuapp.com/api/auth/login', credentials);
    const { token, role, username: userResp } = response.data;

    console.log(response.data);

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("username", userResp);
    dispatch(loginSuccess({ token, role, username: userResp }));
    // Add navigation redirection here if needed
  } catch (error) {
    dispatch(loginFailure(error.response ? error.response.data : error.message));
  }
};
