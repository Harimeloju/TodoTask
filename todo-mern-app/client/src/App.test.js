import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/To-Do App/i);
  expect(headingElement).toBeInTheDocument();
});
