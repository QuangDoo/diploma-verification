import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

function Title({ title, icon }: { title: string; icon?: ReactNode }) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center gap-x-1">
        {icon}

        <h2
          className={cn('text-gradient whitespace-nowrap font-bold uppercase', {
            'text-base md:text-xl lg:text-2xl': !icon,
            'text-sm md:text-base lg:text-lg': !!icon,
          })}
        >
          {title || '-'}
        </h2>
      </div>

      <div className="h-0.5 w-full bg-custom-gradient md:h-1" />
    </div>
  );
}

export default Title;
