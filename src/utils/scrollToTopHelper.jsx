import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

// Define prop types for the component
ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
