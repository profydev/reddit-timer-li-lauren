import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (initialPath = '/') => {
  // access history as described in docs
  
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route 
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home/i)).toBeInTheDocument();
})
