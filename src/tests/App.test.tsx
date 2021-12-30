import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  it('count up', async () => {
    const { getByText, findByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await findByText('Welcome to the homepage!');
    const aboutLink = getByText('About');
    fireEvent.click(aboutLink);
    await findByText('Who are we?');
  });
});
