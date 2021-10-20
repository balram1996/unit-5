import { render, screen } from '@testing-library/react';
import App from './App';

it('should renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Counter/i);
  expect(linkElement).toBeInTheDocument();
});
