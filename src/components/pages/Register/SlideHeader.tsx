import { } from 'react';

import { cn } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export interface ISlideHeaderProps {
  step: number;
}

export default function SlideHeader({ step }: ISlideHeaderProps) {
  const router = useRouter();

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

  const convertToSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  return (
    <div className='mt-8'>
      <span className='mr-3'>
        Step 0{step} of 05:
      </span>
      <span className='text-text-1 font-semibold'>{listStep[step - 1].title}</span>
      <div className='slide w-full flex justify-between mt-2 gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Tooltip
            key={index}
          >
            <TooltipTrigger
              className={cn('w-1/5 h-2 rounded-full', index < step ? 'bg-blue-1' : 'bg-green-1')}
              onClick={() => { router.push(`/${convertToSlug(listStep[index].title)}`) }} >
            </TooltipTrigger>
            <TooltipContent>
              {listStep[index].title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

    </div>
  );
}
