// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUsername, setPassword, login } from '../../../state/actions/authActions';
import { FormButton, FormInput } from '../../common';

import '../../../styles/Login/index.less';

// Define the component with a named function
function RenderLoginPage({ username, password, isSubmitting, error, setUsername, setPassword, login }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            className="login-inputs"
            labelId="username"
            name="username"
            placeholder="Username"
            value={username}
            handleInput={handleChange}
            disabled={isSubmitting}
          />
          <FormInput
            className="login-inputs"
            labelId="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            handleInput={handleChange}
            disabled={isSubmitting}
          />
          <FormButton
            className="home-btn"
            buttonText={isSubmitting ? 'Logging in...' : 'Log in'}
            isDisabled={isSubmitting}
            classType="primary"
          />
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </form>
        <p className="special-p">Don't have an account?<Link className="link-1" to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

RenderLoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  isSubmitting: state.auth.isSubmitting,
  error: state.auth.error
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  login
};

// Named connected component
const ConnectedRenderLoginPage = connect(mapStateToProps, mapDispatchToProps)(RenderLoginPage);

// Export named connected component
export default ConnectedRenderLoginPage;
