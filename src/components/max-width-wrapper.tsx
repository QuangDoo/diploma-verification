import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type MaxWidthWrapperProps = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => (
  <div
    className={cn(
      'mx-auto h-full w-full max-w-screen-xl px-2.5 lg:px-8',
      className,
    )}
  >
    {children}
  </div>
);

export default MaxWidthWrapper;
