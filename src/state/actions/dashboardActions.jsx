// src/state/actions/dashboardActions.jsx
import axios from 'axios'; // Ensure axios is installed or use another HTTP client

// Action Types
export const FETCH_DASHBOARD_DATA_BEGIN = 'FETCH_DASHBOARD_DATA_BEGIN';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

// Action Creators
export const fetchDashboardDataBegin = () => ({
  type: FETCH_DASHBOARD_DATA_BEGIN
});

export const fetchDashboardDataSuccess = data => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  payload: { data }
});

export const fetchDashboardDataFailure = error => ({
  type: FETCH_DASHBOARD_DATA_FAILURE,
  payload: { error }
});

// Thunk function for fetching dashboard data
export const getDashboardData = () => {
  return dispatch => {
    dispatch(fetchDashboardDataBegin());
    // Simulate API call
    axios.get('https://api.example.com/dashboard')
      .then(response => {
        // Handle data in the response
        dispatch(fetchDashboardDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDashboardDataFailure(error.message));
      });
  };
};

