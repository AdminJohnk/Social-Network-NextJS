import { FaSnowflake } from 'react-icons/fa';

import { cn } from '@/lib/utils';

interface ILogoProps {
  className?: string;
  rootClassName?: string;
}

export default function Logo({ className, rootClassName }: ILogoProps) {
  return (
    <div className={cn('icon_logo', rootClassName)}>
      <FaSnowflake className={cn('text-3xl text-center', className)} />
    </div>
  );
}
