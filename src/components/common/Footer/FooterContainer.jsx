// eslint-disable-next-line no-unused-vars
import React from 'react';
import DesktopFooter from './RenderDesktopFooter';
import MobileFooter from './RenderMobileFooter';
import { Layout } from 'antd';

const { Footer } = Layout;
function FooterContainer() {
  return (
    <>
      {/* Display for Desktop (is hidden at 900px screen width or below) */}

      <Footer
        className="desktop-footer"
        style={{
          padding: '40px',
          backgroundColor: '#6A0C49',
        }}
      >
        <DesktopFooter />
      </Footer>
      {/* Display for Mobile (only visible when screen width is below 900px) */}
      <Footer
        className="mobile-footer"
        style={{
          backgroundColor: '#6A0C49',
        }}
      >
        <MobileFooter />
      </Footer>
    </>
  );
}

export default FooterContainer;