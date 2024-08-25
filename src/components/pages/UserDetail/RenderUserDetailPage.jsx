// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function RenderUserDetailPage({ data }) {
  return (
    <div>
        <figure key={data.index} >
          <figcaption>
            <h5>User ID: {data.user_id}</h5>
            <h5>Username: {data.username}</h5>
            <h5>Role: {data.role_type}</h5>
          </figcaption>
        </figure>
    </div>
  );
}

RenderUserDetailPage.propTypes = {
  data: PropTypes.object.isRequired,
};



export default RenderUserDetailPage;