import { Outlet } from '@tanstack/react-location';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}

export default App;
