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
│  │	│    └── usersAction.jsx 
│  │	├── contexts 
│  │	│    └── index.jsx 
│  │	└── reducers 
│  │	     ├── usersReducer.jsx 
│  │	     └── index.jsx 
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

`.env`

```
VITE_EXAMPLE_URL=https://jsonplaceholder.typicode.com/photos?albumId=1

VITE_API_KEY=KT3Z0MwqIQrw0OA_NecrvIUMIwpgl0fFXs-HRczlgN8

VITE_BASE_URL=https://node-js-api-ad1fa2d2125b.herokuapp.com/api
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

`src/api/index.jsx`
```
// Define the API URLs using the environment variables
import axios from 'axios';

// const apiUrl = `${import.meta.env.VITE_API_URI}/profiles`;
const apiUrl = import.meta.env.VITE_EXAMPLE_URL;
const exampleUrl = import.meta.env.VITE_EXAMPLE_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

console.log('exampleUrl: ', exampleUrl)
console.log('baseUrl: ', baseUrl)

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(exampleUrl)
    .then(response => response.data);
};

const axiosWithAuth = ()=> {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: baseUrl
  });
}

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};
const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};
export { sleep, axiosWithAuth, getExampleData, getProfileData };
```

`src/components/common/index.jsx`
```
import FormButton from './FormButton';
import FormInput from './FormInput';
import List from './List';
import LoadingComponent from './LoadingComponent';
import Button from './Button';

// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export { FormButton, FormInput, List, LoadingComponent, Button };

```

`src/components/common/List.jsx`
```
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Here is an example of a reusable list component.
// We are passing all of its functions through props to keep our component clean & testable
// Feel free to add to this component with some more advanced features of your own
const List = ({ LoadingComponent, RenderItems, getItemsData }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    // Here we are performing our GET request through the use of our
    // Axios helper function that we will receive through props
    getItemsData()
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getItemsData]);

  // Here we return a loading component while our request is fetching
  // or we render our list of items from the data we receive from our successful request
  // We can change and swap these out through props!
  return isFetching ? <LoadingComponent /> : <RenderItems data={items} />;
};

export default List;

List.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  RenderItems: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired,
};

```


`src/components/pages/ProfileList/index.jsx`
```
export { default as ProfileListPage } from './ProfileListContainer';

```

`src/components/pages/ProfileList/ProfileListContainer.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { useOktaAuth } from '@okta/okta-react';

import { getExampleData } from '../../../api';

import { List } from '../../common';
import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  // const { authState } = useOktaAuth();

  return (
    <List
      // Use the getExampleData function to fetch data
      getItemsData={getExampleData}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Profiles...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderProfileListPage}
    />
  );
};

export default ProfileList;

```

`src/components/pages/ProfileList/RenderProfileListPage.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RenderProfileListPage = (props) => (
  <div>
    <p>
      <Link to="/">Home</Link>
    </p>
    {/*{props.data.map((item) => (*/}
    {/*  <figure key={item.id}>*/}
    {/*    <img src={item.avatarUrl} alt={item.name} />*/}
    {/*    <figcaption>*/}
    {/*      <h3>{item.name}</h3>*/}
    {/*    </figcaption>*/}
    {/*  </figure>*/}
    {/*))}*/}
    {/* hard code from RenderExampleListPage*/}
    {props.data.map((item) => (
      <figure key={item.id}>
        <img src={item.thumbnailUrl} alt={item.title} />
        <figcaption>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>
    ))}
  </div>
);

export default RenderProfileListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderProfileListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
};

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

`src/components/pages/UserList/UserListContainer.jsx`
```
import { useEffect } from 'react';
import PropTypes from 'prop-types'; // Ensure this is uncommented
import { axiosWithAuth } from '../../../api';
import RanderUserPage from "./RanderUserPage"

function UserList({ users, setUsers }) {

  useEffect(() => {
    axiosWithAuth()
      .get('/users/')
      .then(resp => {
        setUsers(resp.data);
      })
      .catch(err => {
        console.error(err); // Changed from console.log to console.error for error logging
      });
  }, [setUsers]); // Added setUsers to dependencies array to adhere to exhaustive-deps rule

  return (
    <div>
      {users.map((user, index) =>
        <RanderUserPage key={user.id || index} user={user} />,
      )}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // Include other user object properties if needed
  })).isRequired,
  setUsers: PropTypes.func.isRequired
};

export default UserList;

```

