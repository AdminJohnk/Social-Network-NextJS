'use client';

import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import { DataTableFacetedFilter } from '../data-table-faceted-filter';
import { RxCross2 } from 'react-icons/rx';
import { DataTableViewOptions } from '../data-table-view-options';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <input
          placeholder='Search'
          value={(table.getColumn('author')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('author')?.setFilterValue(event.target.value)}
          className={cn(classStyleInput, 'h-8 w-[150px] lg:w-[250px]')}
        />
        {/* {table.getColumn('status') && (
          <DataTableFacetedFilter column={table.getColumn('status')} title='Status' options={statuses} />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter column={table.getColumn('priority')} title='Priority' options={roles} />
        )} */}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 text-text-1 lg:px-3'>
            Reset
            <RxCross2 className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
