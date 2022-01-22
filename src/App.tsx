import reactLogo from '@/assets/react-logo.svg';
import viteLogo from '@/assets/vite-logo.svg';

function App() {
  return (
    <div className="h-full py-16 bg-gray-700 text-neutral-100">
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-4">Hello vite-react!</h1>
        <div className="flex justify-center pl-8">
          <img src={viteLogo} alt="vite-logo" className="w-40" />
          <img src={reactLogo} alt="react-logo" className="w-72" />
        </div>
      </header>
      <main className="py-8 flex justify-center">
        <section className="w-2/5">
          <h2 className="text-2xl underline mb-3">Features</h2>
          <ul className="list-disc pl-6">
            <li>Vite with React, TypeScript and have already set up absolute path</li>
            <li>Styled by Tailwind CSS v3</li>
            <li>Use ESLint, Prettier</li>
            <li>Test by Jest</li>
            <li>Setup github actoins(CI) which makes test, lint, type check run</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
