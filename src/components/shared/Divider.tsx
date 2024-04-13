import { cn } from '@/lib/utils';
import * as React from 'react';

export interface IDividerProps {
  className?: string;
}

export default function Divider({ className }: IDividerProps) {
  return <hr className={cn('m-0 border-border-1', className)} />;
}
