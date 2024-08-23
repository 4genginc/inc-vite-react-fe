// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RenderUserListPage({ data }) {
  return (
    <div>
      {data.map((user, index) => (
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
  data: PropTypes.array.isRequired,
};

export default RenderUserListPage;
