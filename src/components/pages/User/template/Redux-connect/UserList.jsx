import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <div key={user.user_id || index} className="container">
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
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default UserList;
