// RenderHomePage.test.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { HomePage } from '../components/pages/Home';
import PropTypes from 'prop-types';

const LoadingComponent = ({ message }) => <div>{message}</div>;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

describe('<HomePage /> test suite', () => {
  it('[1] renders loading component based on initial null userInfo state', () => {
    render(
      <MemoryRouter>
        <HomePage LoadingComponent={LoadingComponent} />
      </MemoryRouter>,
    );
    const loading = screen.getByText(/... fetching user profile/i);
    expect(loading.textContent).toBe('... Fetching user profile');
  });

});
