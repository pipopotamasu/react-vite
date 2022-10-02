import { render } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
  it('renders', async () => {
    const { findByText } = render(<About />);
    await findByText('Hello vite-react!');
  });
});
