import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  const container = document.getElementById('root');

  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
});
