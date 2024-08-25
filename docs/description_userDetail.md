# Project description

-   Structure
```
/vite-react-js
├── src 
│  ├── __test__ 
│  │	├── ExampleListContainer.test.jsx 
│  │	├── FormButton.test.jsx 
│  │	├── FormInput.test.jsx 
│  │	├── List.test.jsx 
│  │	├── LoadingComponent.test.jsx 
│  │	├── NotFoundPage.test.jsx 
│  │	├── Readme.md 
│  │	├── RenderExampleListPage.test.jsx 
│  │	├── RenderHomePage.test.jsx
│  │	└── setupTests.jsx
│  ├── api 
│  │	├── Data.jsx 
│  │	└── index.jsx  
│  ├── assets 
│  │	├── react.svg
│  │	└── vite.svg 
│  ├── components 
│  │	├── common 
│  │	│    ├── Footer 
│  │	│    │     ├── FooterContainer.jsx 
│  │	│    │     ├── index.jsx 
│  │	│    │     └── RenderFooterPage.jsx 
│  │	│    ├── Header 
│  │	│    │     ├── HeaderContainer.jsx 
│  │	│    │     ├── index.jsx 
│  │	│    │     └── RenderHeaderPage.jsx 
│  │	│    ├── Button.jsx 
│  │	│    ├── FormButton.jsx 
│  │	│    ├── FormInput.jsx 
│  │	│    ├── index.jsx 
│  │	│    ├── List.jsx 
│  │	│    └── LoadingComponent.jsx 
│  │	└── pages 
│  │	     ├── ExampleList 
│  │	     │     ├── ExampleListContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderExampleListPage.jsx 
│  │	     ├── Home 
│  │	     │     ├── HomeContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderHomePage.jsx 
│  │	     ├── Landing 
│  │	     │     ├── LandingContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderLandingPage.jsx 
│  │	     ├── Login 
│  │	     │     ├── index.jsx 
│  │	     │     ├── LoginContainer.jsx 
│  │	     │     └── RanderLoginPage.jsx 
│  │	     ├── NotFound 
│  │	     │     ├── index.jsx 
│  │	     │     └── NotFoundPage.jsx 
│  │	     ├── ProfileList 
│  │	     │     ├── index.jsx 
│  │	     │     ├── ProfileListContainer.jsx 
│  │	     │     └── RenderProfileListPage.jsx 
│  │	     └── template 
│  │	           ├── Redux-connect 
│  │	           └── Redux-useSelectore 
│  ├── state 
│  │	├── actions 
│  │	│    ├── authActions.jsx 
│  │	│    ├── userDetailActions.jsx 
│  │	│    └── userListActions.jsx 
│  │	└── reducers 
│  │	     ├── authReducer.jsx 
│  │	     ├── index.jsx 
│  │	     ├── userDetailReducer.jsx 
│  │	     └── userListReducer.jsx 
│  ├── styles 
│  │	├── Footer 
│  │	│    └── index.less
│  │	├── Landing 
│  │	│    └── index.less
│  │	├── inc-site-theme.js
│  │	├── index.less
│  │	├── theme-overrides.less
│  │	└── variables.less 
│  ├── utils 
│  │	├── oktaConfig.jsx
│  │	└── Readme.md 
│  └── index.jsx
├── index.html
├── .env 
├── .eslintrc.cjs 
├── package.json 
├── vitest.config.js 
└── …
```

`src/index.jsx`
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './styles/index.less';
import 'antd/dist/antd.less';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Corrected import
import rootReducer from './state/reducers';

// Apply middleware to the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

import { ExampleListPage } from './components/pages/ExampleList';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { ImageList } from './components/pages/ImageList';

import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';
import { UserListPage } from './components/pages/UserList';
import { UserDetailPage } from './components/pages/UserDetail';

import UserList from './components/pages/template/Redux-connect/UserList_connect';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Header />
          <App />
          <Footer />
        </Layout>
      </React.StrictMode>
    </Router>
  </Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
function App() {

  return (
    <Switch>
      <Route path="/user-list/:user_id" component={UserDetailPage} />
      <Route path="/user-list" component={UserListPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/images" component={ImageList} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/datavis" component={ExampleDataViz} />

      <Route path="/users" component={UserList} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
```



`src/components/pages/UserDetail/index.jsx`
```
import { connect } from 'react-redux';
import { fetchUserDetails } from '../../../state/actions/userDetailActions.jsx';
import UserDetailContainer from './UserDetailContainer.jsx';

const mapStateToProps = (state) => {
  return ({
      user: state.userDetailReducer.user || {},
      isLoading: state.userDetailReducer.loading,
      error: state.userDetailReducer.error,
  });
};

const mapDispatchToProps = {
  fetchUserDetails,
};

// Use named export here
export const UserDetailPage = connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);
```

`src/components/pages/UserDetail/RenderUserDetailPage.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

function RenderUserDetailPage({ data }) {
  const { url } = useRouteMatch();

  return (
    <div>

      {data.map((item, index) => (
        <figure key={index} >
          <figcaption>
            <h5>User ID: {item.user_id}</h5>
            <h5>Username: {item.username}</h5>
            <h5>Role: {item.role_type}</h5>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

RenderUserDetailPage.propTypes = {
  data: PropTypes.array.isRequired,
};



export default RenderUserDetailPage;
```

`src/components/pages/UserDetail/UserDetailContainer.jsx`
```
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from '../../common';
import RenderUserDetailPage from './RenderUserDetailPage';

// import { useOktaAuth } from '@okta/okta-react';

const UserDetailContainer = ({ user, isLoading, error, fetchUserDetails }) => {
  // const { authState } = useOktaAuth();

  const { user_id } = useParams();
  const History = useHistory();

  if (!user) {
    History("/landing");  // Redirect to home if no items exist
    return null;
  }

  // const user = items.find(item => item.id === parseInt(itemID));
  // if (!item) {
  //   return <div>Item not found!</div>;
  // }


  useEffect(() => {
    fetchUserDetails(user_id);
  }, [fetchUserDetails]);

  const getUserData = () => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  };

  if (isLoading) {
    return <div>Loading User Profiles...</div>;
  }

  return (
    <List
      getItemsData={getUserData}
      LoadingComponent={() => <div>Loading...</div>}
      RenderItems={RenderUserDetailPage}
    />
  );
};

UserDetailContainer.propTypes = {
  user: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchUserDetails: PropTypes.func.isRequired
};
export default UserDetailContainer;
```

`src/state/actions/userDetailActions.jsx`
```
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
    const response = await axiosWithAuth().get(`/user/${userId}`);
    console.log('Debug - response.data:', response.data)
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

```

`src/state/reducers/userDetailreducers.jsx`
```
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
  } from '../actions/userDetailActions.jsx';
  
  const initialState = {
    loading: false,
    user: {},
    error: null
  };
  
  const userDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userDetailReducer;
  
```
