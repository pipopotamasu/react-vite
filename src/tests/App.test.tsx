import { render } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('renders', async () => {
    const { findByText } = render(<App />);
    await findByText('Hello vite-react!');
  });
});
