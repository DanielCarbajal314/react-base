import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Car from './Car';

describe('<Car />', () => {
  test('it should mount', () => {
    render(<Car />);
    
    const car = screen.getByTestId('Car');

    expect(car).toBeInTheDocument();
  });
});