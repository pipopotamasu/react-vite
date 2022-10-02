import { Link as Base, type LinkProps } from '@tanstack/react-location';
import clsx from 'clsx';

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <Base
      className={clsx('hover:underline hover:decoration-1', className)}
      getActiveProps={() => ({
        className: 'text-sky-400',
      })}
      {...props}
    >
      {children}
    </Base>
  );
};
