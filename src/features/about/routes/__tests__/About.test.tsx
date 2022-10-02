import { render } from '@/test/testUtils';
import { About } from '../About';

describe('About', () => {
  it('renders', async () => {
    const { findByText } = render({
      ui: <About />,
    });
    await findByText('Hello vite-react!');
    await findByText('Home');
  });
});
