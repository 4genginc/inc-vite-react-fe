// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RenderProfileListPage({ data }) {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      {/*{props.data.map((item) => (*/}
      {/*  <figure key={item.id}>*/}
      {/*    <img src={item.avatarUrl} alt={item.name} />*/}
      {/*    <figcaption>*/}
      {/*      <h3>{item.name}</h3>*/}
      {/*    </figcaption>*/}
      {/*  </figure>*/}
      {/*))}*/}
      {/* hard code from RenderExampleListPage*/}
      {data.map((user, index) => (
        <figure key={index} className="container">
          <figcaption className="card">
            <h5>User ID: {user.user_id}</h5>
            <h5>Username: {user.username}</h5>
            <h5>Role: {user.role_type}</h5>

            <Link to={`/user/${user.user_id}`}>
              <input type="button" value="View" />
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

RenderProfileListPage.propTypes = {
  data: PropTypes.array.isRequired,
};



export default RenderProfileListPage;