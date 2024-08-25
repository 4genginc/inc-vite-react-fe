// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import '../../../styles/LandingPageStyles/index.less';

function RenderLandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-page__title">Welcome to Labs Basic SPA</h1>
      <div className="landing-page__content">
        <p>
          This is <span className="highlight">an example</span> of how we&apos;d like for you to approach page
          components.
        </p>
        <p>
          <Link to="/user-list">UserList</Link>
        </p>
        <p>
          <Link to="/users">(demo: UserLis by Redux legacy)</Link>
        </p>
        <Button buttonText="common button" />
      </div>
    </div>
  );
}

export default RenderLandingPage;
