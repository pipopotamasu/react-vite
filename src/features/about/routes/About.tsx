import { MainLayout } from '@/components/MainLayout';
import reactLogo from '@/assets/react-logo.svg';
import viteLogo from '@/assets/vite-logo.svg';

export const About = () => {
  return (
    <MainLayout>
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-4">Hello vite-react!</h1>
        <div className="flex justify-center pl-8">
          <img src={viteLogo} alt="vite-logo" className="w-40" />
          <img src={reactLogo} alt="react-logo" className="w-72" />
        </div>
      </header>
      <div className="py-8 flex flex-col items-center bg-gray-700">
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
      </div>
    </MainLayout>
  );
};
