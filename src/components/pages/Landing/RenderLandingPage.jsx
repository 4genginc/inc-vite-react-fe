// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../common';
// import { Button as AntButton } from 'antd';

import '../../../styles/LandingPageStyles/index.less';

function RenderLandingPage() {
  return (
    <div className="landing-main-text">
      <h1>Welcome to Labs Basic SPA</h1>
      <div className="landing-main-text">
        <p>
          This is <span>an example</span> of how we&apos;d like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>

        <Button
          // handleClick={() => authService.logout()}
          buttonText="common button"
        />

        {/*<AntButton type="primary">Primary Button</AntButton>*/}

      </div>
    </div>
  );
}

export default RenderLandingPage;
