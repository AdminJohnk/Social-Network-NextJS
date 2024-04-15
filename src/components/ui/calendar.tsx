'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-text-2 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md [&:has([aria-selected].day-outside)]:bg-foreground-3 [&:has([aria-selected])]:bg-foreground-2 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(buttonVariants({ variant: 'ghost' }), 'h-9 w-9 p-0 font-normal aria-selected:opacity-100'),
        day_range_end: 'day-range-end',
        day_range_start: 'day-range-start',
        day_selected:
          'bg-background-1 text-text-1 hover:bg-background-1 hover:text-text-1 focus:bg-background-1 focus:text-text-1',
        day_today: 'bg-foreground-2 text-text-2',
        day_outside:
          'day-outside text-text-2 opacity-50 aria-selected:bg-foreground-3 aria-selected:!text-text-2 aria-selected:opacity-30',
        day_disabled: 'text-text-2 opacity-50',
        day_range_middle: 'aria-selected:bg-foreground-2 aria-selected:!text-text-2',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <FaChevronLeft className='h-4 w-4' />,
        IconRight: ({ ...props }) => <FaChevronRight className='h-4 w-4' />
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
