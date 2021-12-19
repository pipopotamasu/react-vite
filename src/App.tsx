import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
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
