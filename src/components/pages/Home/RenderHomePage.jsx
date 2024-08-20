// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../../common';
import { Button } from 'antd';
import '../../../styles/LandingPageStyles/index.less';

function RenderHomePage(props) {
  const {
    // eslint-disable-next-line react/prop-types
    userInfo,
    // authService
  } = props;
  return (
    <div className="landing-container">
      <div className="landing-main-text">
        <h1> Welcome to Home page </h1>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>Hi {userInfo.name}, I am doing!</h3>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/landing">Landing</Link>
        </p>


        {/*<Button*/}
        {/*  // handleClick={() => authService.logout()}*/}
        {/*  buttonText="Logout (common button)"*/}
        {/*/>*/}

        <Button
          type="primary"
          // // onClick={() => authService.logout()}
          // onClick={() => logout()}
        >
          Logout
        </Button>

      </div>
    </div>
  );
}

export default RenderHomePage;
