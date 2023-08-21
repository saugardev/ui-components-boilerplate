import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('renders text prop', () => {
  render(<MyComponent text="Hello, World!" />);
  const textElement = screen.getByText(/Hello, World!/i);
  expect(textElement).toBeInTheDocument();
});
