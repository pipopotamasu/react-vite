import { renderApp } from '@/test/testUtils';

describe('About', () => {
  it('renders', async () => {
    const { findByText } = renderApp({ route: '/' });
    await findByText('Hello vite-react!');
  });
});
