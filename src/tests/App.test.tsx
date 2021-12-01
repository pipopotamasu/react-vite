import { render, fireEvent } from '@testing-library/react';
import App from 'App';

describe('App', () => {
  it('count up', () => {
    const { getByText } = render(<App />);
    const counter = getByText('count is: 0');
    fireEvent.click(counter);
    getByText('count is: 1');
  });
});