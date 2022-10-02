import { Link as Base, type LinkProps } from '@tanstack/react-location';
import { twMerge } from 'tailwind-merge';

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <Base
      className={twMerge('hover:underline hover:decoration-1', className)}
      getActiveProps={() => ({
        className: 'text-sky-400 underline decoration-1',
      })}
      {...props}
    >
      {children}
    </Base>
  );
};
