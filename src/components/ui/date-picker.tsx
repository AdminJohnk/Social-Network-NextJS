'use client';

import * as React from 'react';
import { DateRange } from 'react-day-picker';
import { FaCalendar } from 'react-icons/fa';
import { useFormatter, useLocale } from 'next-intl';
import * as locales from 'date-fns/locale';

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
  const locale = useLocale();
  const format = useFormatter();

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
                  {format.dateTime(dateStart, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}{' '}
                  -{' '}
                  {format.dateTime(dateEnd, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </>
              ) : (
                format.dateTime(dateStart, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='center'>
          <Calendar
            initialFocus
            locale={locales[locale as keyof typeof locales]}
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
