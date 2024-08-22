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
    user_id: PropTypes.number,
    username: PropTypes.string.isRequired,
    role_type: PropTypes.string.isRequired
  }).isRequired
};

export default RanderUserPage;
