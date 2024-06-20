'use client';

import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import descArrays from '@/lib/descriptions/Tags';
import { getImageURL } from '@/lib/utils';
import { IUserInfo, IPost, ICommunity, ISeries, IQuestion } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const userColumns: ColumnDef<IUserInfo>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Fullname' />,
    cell: ({ row }) => (
      <div className='flex-start space-x-2'>
        <Image
          src={getImageURL(row.original.user_image, 'avatar')}
          alt={row.getValue('name')}
          className='h-8 w-8 rounded-full'
          width={500}
          height={500}
        />
        <span className='max-w-[200px] truncate font-medium'>{row.getValue('name')}</span>
      </div>
    )
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Email' />,
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span className='max-w-[200px] truncate font-medium'>{row.getValue('email')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: 'role',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Role' />,
    cell: ({ row }) => {
      const isAdmin = row.getValue<string[]>('role')?.includes('0101');

      if (!isAdmin) {
        return (
          <div className='flex items-center'>
            <FaUser className='mr-2 size-4 text-text-1' />
            <span>User</span>
          </div>
        );
      }

      return (
        <div className='flex items-center'>
          <MdAdminPanelSettings className='mr-2 size-4 text-text-1' />
          <span>Admin</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: 'alias',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Alias' />,
    cell: ({ row }) => <span>{row.getValue('alias')}</span>
  },
  {
    accessorKey: 'tags',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tags' />,
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        {row
          .getValue<string[]>('tags')
          .slice(0, 3)
          .map((tag, index) => {
            const desc = descArrays.find((item) => item.title === tag)!;
            return (
              <div key={index} className='itemTag select-none border-[0.5px] border-border-1 px-2 py-1'>
                <div className='flex-start'>
                  <span className='mr-2 *:size-3'>{desc.svg}</span>
                  <span>{tag}</span>
                </div>
              </div>
            );
          })}
        {row.getValue<string[]>('tags').length > 3 && (
          <Badge className='px-2 py-1 text-xs'>+{row.getValue<string[]>('tags').length - 3}</Badge>
        )}
      </div>
    )
  },
  {
    accessorKey: 'posts',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Posts' />,
    cell: ({ row }) => <span>{row.getValue('posts')}</span>
  },
  {
    accessorKey: 'reputation',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Reputation' />,
    cell: ({ row }) => <span>{row.getValue('reputation')}</span>
  },
  {
    accessorKey: 'level',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Level' />,
    cell: ({ row }) => <span>{row.getValue('level')}</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];

