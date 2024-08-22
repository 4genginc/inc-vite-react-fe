// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RanderUserPage = ({ user }) => {
  const { user_id, username, role_type } = user;

  return (
    <div className="container">
      <div className="card">
        <h5> {user_id} </h5>
        {/* <img src={'https://www.uncommongoods.com/images/items/47400/47435_1_360px.jpg'} alt={''} /> */}
        <h5> {username} </h5>
        <h5> {role_type} </h5>

        <Link to={`/user/${user_id}`}>
          <input type="button" value="View" />
        </Link>
      </div>
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
