import { render } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('count up', async () => {
    const { findByText } = render(<App />);
    await findByText('Hello vite-react!');
  });
});
