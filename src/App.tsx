import { Link, Outlet } from '@tanstack/react-location';
import reactLogo from '@/assets/react-logo.svg';
import viteLogo from '@/assets/vite-logo.svg';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <AppProvider>
      <div className="h-full py-16 bg-gray-700 text-neutral-100">
        <header className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-4">Hello vite-react!</h1>
          <div className="flex justify-center pl-8">
            <img src={viteLogo} alt="vite-logo" className="w-40" />
            <img src={reactLogo} alt="react-logo" className="w-72" />
          </div>
        </header>
        <main className="py-8 flex flex-col items-center bg-gray-700">
          <section className="w-2/5 mb-4">
            <h2 className="text-2xl mb-3">Features</h2>
            <ul className="list-disc pl-6">
              <li>Vite with React, TypeScript and have already set up absolute path</li>
              <li>Styled by Tailwind CSS v3</li>
              <li>Use ESLint, Prettier</li>
              <li>Test by Jest</li>
              <li>Request mocking by msw for development environment</li>
              <li>Setup github actoins(CI) which makes test, lint, type check run</li>
            </ul>
          </section>
          <section className="w-2/5">
            <h2 className="text-2xl mb-3">Routing Example</h2>
            <div>
              <Link className="underline mr-2" to="/" activeOptions={{ exact: true }}>
                Home
              </Link>
              <Link className="underline" to="todos">
                Todos
              </Link>
            </div>
            <Outlet />
          </section>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
