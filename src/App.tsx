import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { sum } from '@/utils/sample';
import logo from '@/assets/logo.svg';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <button onClick={() => alert(sum(1, 2))}>click me</button>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
