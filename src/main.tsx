import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const container = document.getElementById(`root`);

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
