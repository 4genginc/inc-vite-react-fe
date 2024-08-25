// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../styles/General/index.less'

function RenderUserListPage({ data }) {
  const { url } = useRouteMatch();

  return (
    <div className='items-list-wrapper'>

      {data.map((item, index) => (
        <figure key={index} className='item-card'>
          <figcaption className="card">
            <h5>User ID: {item.user_id}</h5>
            <h5>Username: {item.username}</h5>
            <h5>Role: {item.role_type}</h5>

            <Link to={`${url}/${item.user_id}`}>
              <input type="button" value="View" />
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

RenderUserListPage.propTypes = {
  data: PropTypes.array.isRequired,
};



export default RenderUserListPage;