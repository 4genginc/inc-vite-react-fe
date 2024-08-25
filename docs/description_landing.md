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
│  │	├── ProfileListContainer.test.jsx 
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
│  │	     ├── Landing 
│  │	     │     ├── LandingContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderLandingPage.jsx 
│  │	     ├── Login 
│  │	     │     ├── index.jsx 
│  │	     │     ├── LoginContainer.jsx 
│  │	     │     └── RanderLoginPage.jsx 
│  │	     ├── ProfileList 
│  │	     │     ├── index.jsx 
│  │	     │     ├── ProfileListContainer.jsx 
│  │	     │     └── RenderProfileListPage.jsx 
│  │	     ├── UserList 
│  │	     │     ├── index.jsx 
│  │	     │     ├── RanderUserPage.jsx  
│  │	     │     └── UserListContainer.jsx
│  │	     └── NotFound 
│  │	           ├── index.jsx 
│  │	           └── NotFoundPage.jsx 
│  ├── state 
│  │	├── actions 
│  │	│    ├── authActions.jsx 
│  │	│    └── usersAction.jsx 
│  │	└── reducers 
│  │	     ├── authReducer.jsx 
│  │	     ├── index.jsx 
│  │	     └── usersReducer.jsx 
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
import React, { useState } from 'react';
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
import { ProfileListPage } from './components/pages/ProfileList';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { ImageList } from './components/pages/ImageList';

import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';


import { UserListPage } from './components/pages/UserList'


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

  const [users, setUsers] = useState([]);

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/images" component={ImageList} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/profile-list" component={ProfileListPage} />
      <Route path="/datavis" component={ExampleDataViz} />
      <Route path="/users"> <UserListPage users = { users } setUsers = { setUsers } /> </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
}
```

`src/components/pages/UserList/index.jsx`
```
export { default as UserListPage } from './UserListContainer';
```

`src/components/pages/UserList/RanderUserPage.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RanderUserPage = ({ user }) => {
  const { user_id, username, role_type } = user;

  return (
    <div className="class-wrapper">
      <div>
        <h5> {user_id} </h5>
        <h5> {username} </h5>
        <h5> {role_type} </h5>
      </div>

      <Link to={`/user/${user_id}`} >
        <input type="button" value="View"/>
      </Link>
    </div>
  );
};

RanderUserPage.propTypes = {
  user: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role_type: PropTypes.string.isRequired
  }).isRequired
};

export default RanderUserPage;

```

`src/components/pages/ProfileList/index.jsx`
```
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userActions.jsx';
import ProfileListContainer from './ProfileListContainer.jsx';

const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

// Use named export here
export const ProfileListPage = connect(mapStateToProps, mapDispatchToProps)(ProfileListContainer);
```

`src/components/pages/ProfileList/ProfileListContainer.jsx`
```
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../common';
import RenderUserListPage from './RenderProfileListPage.jsx';

// import { useOktaAuth } from '@okta/okta-react';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileListContainer = ({ users, isLoading, error, fetchUsers }) => {
    // const { authState } = useOktaAuth();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const getUsersData = () => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(error);
      } else {
        resolve(users);
      }
    });
  };

  if (isLoading) {
    return <div>Loading User Profiles...</div>;
  }

  return (
    <List
      getItemsData={getUsersData}
      LoadingComponent={() => <div>Loading...</div>}
      RenderItems={RenderUserListPage}
    />
  );
};

ProfileListContainer.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired
};
  export default ProfileListContainer;
```

`src/components/pages/ProfileList/RenderProfileListPage.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../styles/General/index.less'

function RenderProfileListPage({ data }) {
  const { url } = useRouteMatch();

  return (
    <div className='items-list-wrapper'>
      {/*{props.data.map((item) => (*/}
      {/*  <figure key={item.id}>*/}
      {/*    <img src={item.avatarUrl} alt={item.name} />*/}
      {/*    <figcaption>*/}
      {/*      <h3>{item.name}</h3>*/}
      {/*    </figcaption>*/}
      {/*  </figure>*/}
      {/*))}*/}
      {/* hard code from RenderExampleListPage*/}
      {data.map((item, index) => (
        <figure key={index} className='item-card'>
          <figcaption className="card">
            <h5>User ID: {item.user_id}</h5>
            <h5>Username: {item.username}</h5>
            <h5>Role: {item.role_type}</h5>

            <Link to={`${url}/${item.user_id}`}>
              <input type="button" value="View" />
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

RenderProfileListPage.propTypes = {
  data: PropTypes.array.isRequired,
};



export default RenderProfileListPage;
```

