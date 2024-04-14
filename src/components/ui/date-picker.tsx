'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { FaCalendar } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  dateStart?: Date;
  dateEnd?: Date;
  onChangeDate?: (date?: DateRange) => void;
}

export function DatePickerWithRange({ className, dateStart, dateEnd, onChangeDate }: DatePickerProps) {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !dateStart && !dateEnd && 'text-text-1'
            )}>
            <FaCalendar className='mr-2 h-4 w-4' />
            {dateStart ? (
              dateEnd ? (
                <>
                  {format(dateStart, 'LLL dd, y')} - {format(dateEnd, 'LLL dd, y')}
                </>
              ) : (
                format(dateStart, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='center'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={dateStart}
            selected={{
              from: dateStart,
              to: dateEnd
            }}
            toDate={new Date()}
            onSelect={(newDate) => {
              onChangeDate && onChangeDate(newDate);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
