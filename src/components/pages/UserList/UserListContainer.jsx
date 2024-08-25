// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../common';
import RenderUserListPage from './RenderUserListPage.jsx';

// import { useOktaAuth } from '@okta/okta-react';

const UserListContainer = ({ users, isLoading, error, fetchUsers }) => {
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

UserListContainer.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired
};
export default UserListContainer;