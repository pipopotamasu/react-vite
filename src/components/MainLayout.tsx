import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-location';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-gray-700 h-full">
      <aside className="w-48 border-r border-slate-400 p-8">
        <ul className="text-xl">
          <li className="mb-2">
            <Link to="/" className="hover:underline hover:decoration-1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/todos" className="hover:underline hover:decoration-1">
              Todos
            </Link>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
};
