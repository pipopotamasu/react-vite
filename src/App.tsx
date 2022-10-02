import { Outlet } from '@tanstack/react-location';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-700 text-neutral-100">
      <AppProvider>
        <Outlet />
      </AppProvider>
    </div>
  );
}

export default App;
