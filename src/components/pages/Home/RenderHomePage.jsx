// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../../common';
import { Button } from 'antd';

function RenderHomePage(props) {
  const {
    // eslint-disable-next-line react/prop-types
    userInfo,
    // authService
  } = props;
  return (<>

    <div >
      <h1>Welcome to Labs Basic SPA</h1>
      {/* eslint-disable-next-line react/prop-types */}
      <h3>Hi {userInfo.name}, you are more than welcome!</h3>
      <div>
        <p>
          This is an example of a common example of how we&apos;d like for you to
          approach components.
        </p>
        <p>
          <Link to="/user-list">UserList</Link>
        </p>
        <p>
          <Link to="/users">(demo: UserList via Redux legacy)</Link>
        </p>
        <p>
          <Link to="/images">Images</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
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

export default RenderHomePage;
