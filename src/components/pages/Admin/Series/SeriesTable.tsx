'use client';

import { useMemo, useState } from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState
} from '@tanstack/react-table';
import { Skeleton } from '@mui/material';

import { DataTablePagination } from '../data-table-pagination';
import { DataTableToolbar } from '../Posts/data-table-toolbar';
import { useGetAllSeriesAdmin, useGetNumberOfPostsAdmin, useGetNumberOfSeriesAdmin } from '@/hooks/query';
import { seriesColumns } from '../columns';
import { ISeries } from '@/types';
// import { cn } from '@/lib/utils';

export function SeriesTable() {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

  const { numberOfSeries } = useGetNumberOfSeriesAdmin();
  const { allSeries, isFetchingAllSeries, isLoadingAllSeries } = useGetAllSeriesAdmin(
    pagination.pageIndex,
    pagination.pageSize
  );

  const defaultData = useMemo(() => [] as ISeries[], []);

  const table = useReactTable({
    data: allSeries ?? defaultData,
    columns: seriesColumns,
    rowCount: numberOfSeries ?? 0,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination
    },
    // columnResizeMode: 'onChange',
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });

  return (
    <div className='space-y-4'>
      {isLoadingAllSeries ? (
        <div className='flex items-center justify-between'>
          <div className='flex flex-1 items-center space-x-2'>
            <Skeleton
              className='!h-8 !w-[150px] !bg-foreground-2 lg:!w-[250px]'
              variant='text'
              width='150px'
              height='100%'
            />
          </div>
          <Skeleton className='!h-9 !w-16 !bg-foreground-2' variant='text' width='100%' height='100%' />
        </div>
      ) : (
        <DataTableToolbar table={table} />
      )}
      <div className='rounded-md border border-border-1'>
        {isFetchingAllSeries ? (
          <Table /* style={{ width: table.getCenterTotalSize() }} */>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        <Skeleton className='!bg-foreground-2' variant='text' width='100%' height='100%' />
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: seriesColumns.length }).map((_, index) => (
                    <TableCell key={index}>
                      <Skeleton className='!h-8 !bg-foreground-2' variant='text' width='100%' height='100%' />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table /* style={{ width: table.getCenterTotalSize() }} */>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan} /* style={{ width: header.getSize() }} */
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {/* <div
                        onDoubleClick={() => header.column.resetSize()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={cn(
                          'absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none select-none bg-foreground-1 opacity-0 hover:opacity-100',
                          header.column.getIsResizing() && 'bg-primary'
                        )}
                      /> */}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} /* style={{ width: cell.column.getSize() }} */>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={seriesColumns.length} className='h-24 text-center'>
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
      {isLoadingAllSeries ? (
        <div className='flex items-center justify-between'>
          <div className='flex flex-1 items-center space-x-2'>
            <Skeleton
              className='!h-8 !w-[150px] !bg-foreground-2 lg:!w-[250px]'
              variant='text'
              width='150px'
              height='100%'
            />
          </div>
          <Skeleton className='!h-9 !w-36 !bg-foreground-2' variant='text' width='100%' height='100%' />
        </div>
      ) : (
        <DataTablePagination table={table} setPagination={setPagination} />
      )}
    </div>
  );
}
