import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { sum } from '@/utils/sample';
import reactLogo from '@/assets/react-logo.svg';
import viteLogo from '@/assets/vite-logo.svg';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="h-full py-16">
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-4">Hello vite-react!</h1>
        <div className="flex justify-center pl-8">
          <img src={viteLogo} alt="vite-logo" className="w-40" />
          <img src={reactLogo} alt="react-logo" className="w-72" />
        </div>
      </header>
      <main className="py-8 flex justify-center">
        <div className="w-2/5">
          <button onClick={() => alert(sum(1, 2))}>click me</button>
          <Suspense fallback="loading...">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
