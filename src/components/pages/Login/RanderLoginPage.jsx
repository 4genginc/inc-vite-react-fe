// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { FormButton, FormInput } from '../../common';

const RenderLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const credentials = { username, password };
      const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
      const { token, role, username: userResp } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", userResp);

      // Uncomment and use correct navigation method depending on your router setup
      // this.props.history.push('/protected');

      console.log('Login successful:', response);
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelId="username"
          name="username"
          placeholder="Username"
          value={username}
          handleInput={handleChange}
          disabled={isSubmitting}
        />
        <FormInput
          labelId="password"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          handleInput={handleChange}
          disabled={isSubmitting}
        />
        <FormButton
          buttonText={isSubmitting ? 'Logging in...' : 'Log in'}
          handleButtonClick={handleSubmit}
          isDisabled={isSubmitting}
          classType="primary"
        />
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </form>
    </div>
  );
};

export default RenderLoginPage;
