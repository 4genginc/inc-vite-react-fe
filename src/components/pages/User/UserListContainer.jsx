import React from 'react';
import { fetchUsers } from '../../../state/actions/userActions.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RanderUserPage from './RanderUserPage';

function UserList({ fetchUsers, users, isLoading, error }) {

  React.useEffect(() => {
    // Dispatch the fetchUsers thunk action
    fetchUsers(); // This action updates the Redux store state
  }, [fetchUsers]);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      {users.map((user, index) => 
        <RanderUserPage key={user.id || index} user={user} />
      )}
    </div>
  );
}

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired, // Define prop types
  users: PropTypes.array, // Assuming users is an array, adjust as necessary
  isLoading: PropTypes.bool,
  error: PropTypes.string // Adjust the type based on what `error` really is, e.g., object or string
};

const mapStateToProps = (state) => {
  return (
    {
      users: state.userReducer.user || [], // Fallback to empty array if undefined
      isLoading: state.userReducer.loading,
      error: state.userReducer.error
    }
  )
}

const mapDispatchToProps = {
  fetchUsers
};

const ConnectedUserListContainer  = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default ConnectedUserListContainer;