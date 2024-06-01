import { cn } from '@/lib/utils';
import { } from 'react';

export interface ISlideHeaderProps {
  step: number;
}

export default function SlideHeader({ step }: ISlideHeaderProps) {

  const listStep = [
    {
      title: 'Get started',
    },
    {
      title: 'Select Interest',
    },
    {
      title: 'Select Communities',
    },
    {
      title: 'Follow People',
    },
    {
      title: 'Complete Profile',
    },
  ]

  return (
    <div className='mt-8'>
      <span className='mr-3'>
        Step 0{step} of 05:
      </span>
      <span className='text-text-1 font-semibold'>{listStep[step - 1].title}</span>
      <div className='slide w-full flex justify-between mt-2 gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={cn('w-1/5 h-2 rounded-full', index < step ? 'bg-blue-1' : 'bg-green-1')}
          ></div>
        ))}
      </div>

    </div>
  );
}
