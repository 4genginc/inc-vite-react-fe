// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
// import { axiosWithAuth } from '../../../api';

import { connect } from 'react-redux';
import { fetchUsers } from '../../../../state/actions/userActions.jsx';

function UserList(
  { fetchUsers, users, isLoading, error }
) {

  React.useEffect(() => {
    // Dispatch the fetchUsers thunk action
    fetchUsers(); // This action updates the Redux store state
  }, [fetchUsers]);

  // const [users, setUsers] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  //
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   setError(null);
  //   axiosWithAuth()
  //     .get('/users/')
  //     .then(response => {
  //       setUsers(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setError(err);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      {users.map((user, index) => {
          return (
            <div key={index} className="container">
              <div className="card">
                <h5>{user.user_id}</h5>
                <h5>{user.username}</h5>
                <h5>{user.role_type}</h5>

                <Link to={`/user/${user.user_id}`}>
                  <input type="button" value="View" />
                </Link>
              </div>
            </div>
          );
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
