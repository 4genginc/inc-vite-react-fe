// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function RenderUserDetailPage({ data }) {
  // Provide default values in case some are undefined
  const {
    index = 0,
    user_id = 'Not specified',
    username = 'No username',
    role_type = 'No role defined', // Default in case it's undefined
  } = data;

  return (
    <div>
      <figure key={index}>
        <figcaption>
          <h5>User ID: {user_id}</h5>
          <h5>Username: {username}</h5>
          <h5>Role: {role_type}</h5>
        </figcaption>
      </figure>
    </div>
  );
}

RenderUserDetailPage.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    user_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // In case ID is undefined or some placeholder text is needed
    username: PropTypes.string,
    role_type: PropTypes.string,
  }).isRequired,
};

export default RenderUserDetailPage;