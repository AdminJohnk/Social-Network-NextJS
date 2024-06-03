import { } from 'react';

import { cn } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { showErrorToast } from '@/components/ui/toast';
import { useGetStartedStore } from '@/store/getStarted';

export interface ISlideHeaderProps {
  step: number;
  canRoute?: boolean;
}

export default function SlideHeader({ step, canRoute = true }: ISlideHeaderProps) {
  const router = useRouter();

  const { step: maxStep, setStep } = useGetStartedStore();

  if (step > maxStep) {
    setStep(step);
  }

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
              onClick={() => { (canRoute && maxStep > index) ? router.push(`/${convertToSlug(listStep[index].title)}`) : showErrorToast("Please complete this side and press 'Continue'") }} >
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
