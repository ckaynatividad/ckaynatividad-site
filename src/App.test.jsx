import { render, screen } from '@testing-library/react';

import App from './App';

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

test('app renders', () => {
  render(<App />);

  const heading = screen.getByText(/ckay/i);

  expect(heading).toBeInTheDocument();
});
