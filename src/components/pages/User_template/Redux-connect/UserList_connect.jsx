import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUsers } from '../../../../state/actions/userActions.jsx';

function UserList({ fetchUsers, users, isLoading, error }) {
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
        <div key={ index} className="container">
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

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role_type: PropTypes.string
  })).isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = {
  fetchUsers
};



const connectedUserList = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default connectedUserList;
