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

import { getExampleProfileData } from '../../../api';

import { List } from '../../common';
import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  // const { authState } = useOktaAuth();

  return (
    <List
      // Use the getExampleData function to fetch data
      getItemsData={getExampleProfileData}
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

`src/components/pages/User/index.jsx`
```
export { default as UserListPage } from './UserListContainer.jsx';
```

`src/components/pages/User/RenderUserListPage.jsx`
```
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RenderUserListPage({ fetchUsers, users, isLoading, error }) {
  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="container">
          <div className="card">
            <h5>User ID: {user.user_id}</h5>
            <h5>Username: {user.username}</h5>
            <h5>Role: {user.role_type}</h5>

            <Link to={`/user/${user.user_id}`}>
              <input type="button" value="View" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

RenderUserListPage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default RenderUserListPage;

```

`src/components/pages/User/UserListContainer.jsx`
```
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userActions.jsx';
import RenderUserListPage from './RenderUserListPage.jsx';
// import { List } from '../../common';


// import { useOktaAuth } from '@okta/okta-react';

// Here is an example of using our reusable List component to display some list data to the UI.
// const ProfileList = () => {
//   // const { authState } = useOktaAuth();
//
//   return (
//       // <List
//       //   // Use the getExampleData function to fetch data
//       //   getItemsData={fetchUsers}
//       //   // Here we are passing in a component we want to show whilst waiting for our API request
//       //   // to complete.
//       //   LoadingComponent={() => <div>Loading User Profiles...</div>}
//       //   // Here we are passing in a component that receives our new data and returns our JSX elements.
//       //   RenderItems={RenderUserListPage}
//       // />
//     <RenderUserListPage  fetchUsers={fetchUsers} users={users}/>
//   );
// };


const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderUserListPage);


```


