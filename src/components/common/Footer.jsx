// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'antd';
const FooterPart = (props) => {

  return (
    <Footer style={{ textAlign: 'center' }}>
      {props.footerText}
    </Footer>
  );
};

export default FooterPart;

FooterPart.propTypes = {
  footerText: PropTypes.string.isRequired,
};

