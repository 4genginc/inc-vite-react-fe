// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userActions.jsx';
import { List } from '../../common';
import RenderUserListPage from './RenderUserListPage.jsx';

const UserListContainer = ({ users, isLoading, error, fetchUsers }) => {

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

const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

const connectedUserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

export default connectedUserListContainer;
