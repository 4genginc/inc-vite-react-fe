// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

function RenderDashboardPage(props) {

  return (<>
    <div >
      <h3>Hi {props.username}, you are login!</h3>
      <div>

        <p>
          <Link to="/user-list">UserList</Link>
        </p>
        <p>
          <Link to="/users">(demo: UserList via Redux legacy)</Link>
        </p>

      </div> 
      <Button
        type="primary"
        // // onClick={() => authService.logout()}
        // onClick={() => logout()}
        >
        Logout
      </Button>
      
    </div>      
  </>);
}

RenderDashboardPage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RenderDashboardPage;

