import { axiosWithAuth } from '../../api';

// Action Types
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// Action Creators
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const fetchUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export const updateUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData
});

export const updateUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});


// Thunk for fetching specific user details
export const fetchUserDetails = (userId) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const response = await axiosWithAuth().get(`/users/${userId}`);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.response ? error.response.data : error.message));
  }
};

// Thunk for updating user details
export const updateUserDetails = (userId, userData) => async (dispatch) => {
  try {
    const response = await axiosWithAuth().put(`/users/${userId}`, userData);
    dispatch(updateUserSuccess(response.data));
  } catch (error) {
    dispatch(updateUserFailure(error.response ? error.response.data : error.message));
  }
};
