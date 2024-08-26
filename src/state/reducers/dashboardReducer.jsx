// src/state/reducers/dashboardReducer.jsx
import {
  FETCH_DASHBOARD_DATA_BEGIN,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from '../actions/dashboardActions.jsx';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_BEGIN:
      // Mark the state as "loading" so we show spinner.
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_DASHBOARD_DATA_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server.
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };

    case FETCH_DASHBOARD_DATA_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore.
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        data: [] // depending on how you want to handle errors, you might want to keep the existing data
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default dashboardReducer;
