'use client';

import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import descArrays from '@/lib/descriptions/Tags';
import { getImageURL } from '@/lib/utils';
import { IUserInfo, IPost, ICommunity, ISeries, IQuestion, ISeriesPost } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './Users/data-table-row-actions';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { capitalizeFirstLetter } from '@/lib/utils/convertText';

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

export const postColumns: ColumnDef<IPost>[] = [
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
    accessorKey: 'author',
    accessorFn: (row) => row.post_attributes.user.name,
    header: ({ column }) => <DataTableColumnHeader column={column} title='Author' />,
    cell: ({ row }) => (
      <div className='flex-start space-x-2'>
        <Image
          src={getImageURL(row.original.post_attributes.user.user_image, 'avatar')}
          alt={row.getValue('author')}
          className='h-8 w-8 rounded-full'
          width={500}
          height={500}
        />
        <span className='max-w-[200px] truncate font-medium'>{row.original.post_attributes.user.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'content',
    accessorFn: (row) => row.post_attributes.content,
    header: ({ column }) => <DataTableColumnHeader column={column} title='Content' />,
    cell: ({ row }) => (
      <ShowContent
        content={
          row.original.post_attributes.content.slice(0, 150) +
          (row.original.post_attributes.content.length > 150 ? '...' : '')
        }
      />
    )
  },
  {
    accessorKey: 'hashtags',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Hashtags' />,
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        {row.original.post_attributes.hashtags?.slice(0, 3)?.map((tag, index) => (
          <Badge key={index} className='px-2 py-1 text-xs'>
            {tag.length > 10 ? tag.slice(0, 10) + '...' : tag}
          </Badge>
        ))}
        {row.original.post_attributes.hashtags?.length > 3 && (
          <Badge className='px-2 py-1 text-xs'>+{row.original.post_attributes.hashtags.length - 3}</Badge>
        )}
      </div>
    )
  },
  {
    accessorKey: 'likes',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Likes' />,
    cell: ({ row }) => <span>{row.original.post_attributes.like_number}</span>
  },
  {
    accessorKey: 'comments',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Comments' />,
    cell: ({ row }) => <span>{row.original.post_attributes.comment_number}</span>
  },
  {
    accessorKey: 'shares',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Shares' />,
    cell: ({ row }) => <span>{row.original.post_attributes.share_number}</span>
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created At' />,
    cell: ({ row }) => <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];

export const seriesColumns: ColumnDef<ISeries>[] = [
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
    accessorKey: 'author',
    accessorFn: (row) => row.user.name,
    header: ({ column }) => <DataTableColumnHeader column={column} title='Author' />,
    cell: ({ row }) => (
      <div className='flex-start space-x-2'>
        <Image
          src={getImageURL(row.original.user.user_image, 'avatar')}
          alt={row.getValue('author')}
          className='h-8 w-8 rounded-full'
          width={500}
          height={500}
        />
        <span className='max-w-[200px] truncate font-medium'>{row.original.user.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Title' />,
    cell: ({ row }) => <span>{row.getValue('title')}</span>
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Description' />,
    cell: ({ row }) => (
      <span>
        {row.getValue<string>('description').slice(0, 150) +
          (row.getValue<string>('description').length > 150 ? '...' : '')}
      </span>
    )
  },
  {
    accessorKey: 'introduction',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Introduction' />,
    cell: ({ row }) => (
      <ShowContent
        content={
          row.getValue<string>('introduction').slice(0, 150) +
          (row.getValue<string>('introduction').length > 150 ? '...' : '')
        }
      />
    )
  },
  {
    accessorKey: 'level',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Level' />,
    cell: ({ row }) => <span>{capitalizeFirstLetter(row.getValue('level'))}</span>
  },
  {
    accessorKey: 'posts',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Posts' />,
    cell: ({ row }) => <span>{row.getValue<ISeriesPost[]>('posts').length}</span>
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Rating' />,
    cell: ({ row }) => <span>{row.getValue<{ avg: number }>('rating').avg.toFixed(1)}</span>
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created At' />,
    cell: ({ row }) => <span>{new Date(row.getValue('createdAt')).toLocaleDateString()}</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];

export const communityColumns: ColumnDef<ICommunity>[] = [
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
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    cell: ({ row }) => <span>{row.getValue('name')}</span>
  },
  {
    accessorKey: 'about',
    header: ({ column }) => <DataTableColumnHeader column={column} title='About' />,
    cell: ({ row }) => <span>{row.getValue('about')}</span>
  },
  {
    accessorKey: 'creator',
    accessorFn: (row) => row.creator.name,
    header: ({ column }) => <DataTableColumnHeader column={column} title='Creator' />,
    cell: ({ row }) => (
      <div className='flex-start space-x-2'>
        <Image
          src={getImageURL(row.original.creator.user_image, 'avatar')}
          alt={row.getValue('author')}
          className='h-8 w-8 rounded-full'
          width={500}
          height={500}
        />
        <span className='max-w-[200px] truncate font-medium'>{row.original.creator.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'visibility',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Visibility' />,
    cell: ({ row }) => <span>{capitalizeFirstLetter(row.getValue('visibility'))}</span>
  },
  {
    accessorKey: 'tags',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Tags' />,
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        {row
          .getValue<string[]>('tags')
          .slice(0, 3)
          .map((tag, index) => (
            <Badge key={index} className='px-2 py-1 text-xs'>
              {tag.length > 10 ? tag.slice(0, 10) + '...' : tag}
            </Badge>
          ))}
        {row.getValue<string[]>('tags').length > 3 && (
          <Badge className='px-2 py-1 text-xs'>+{row.getValue<string[]>('tags').length - 3}</Badge>
        )}
      </div>
    )
  },
  {
    accessorKey: 'members',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Members' />,
    cell: ({ row }) => <span>{row.getValue<IUserInfo[]>('members').length}</span>
  },
  {
    accessorKey: 'posts',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Posts' />,
    cell: ({ row }) => <span>{row.getValue<IPost[]>('posts').length}</span>
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created At' />,
    cell: ({ row }) => <span>{new Date(row.getValue('createdAt')).toLocaleDateString()}</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];

export const questionColumns: ColumnDef<IQuestion>[] = [
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
    accessorKey: 'author',
    accessorFn: (row) => row.user.name,
    header: ({ column }) => <DataTableColumnHeader column={column} title='Author' />,
    cell: ({ row }) => (
      <div className='flex-start space-x-2'>
        <Image
          src={getImageURL(row.original.user.user_image, 'avatar')}
          alt={row.getValue('author')}
          className='h-8 w-8 rounded-full'
          width={500}
          height={500}
        />
        <span className='max-w-[200px] truncate font-medium'>{row.original.user.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Title' />,
    cell: ({ row }) => (
      <span>
        {row.getValue<string>('title').slice(0, 150) +
          (row.getValue<string>('title').length > 150 ? '...' : '')}
      </span>
    )
  },
  {
    accessorKey: 'problem',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Problem' />,
    cell: ({ row }) => <ShowContent content={row.getValue<string>('problem').slice(0, 150) + '...'} />
  },
  // {
  //   accessorKey: 'expect',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Expect' />,
  //   cell: ({ row }) => <span>{row.getValue('expect')}</span>
  // },
  {
    accessorKey: 'hashtags',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Hashtags' />,
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        {row
          .getValue<string[]>('hashtags')
          .slice(0, 3)
          .map((tag, index) => (
            <Badge key={index} className='px-2 py-1 text-xs'>
              {tag.length > 10 ? tag.slice(0, 10) + '...' : tag}
            </Badge>
          ))}
        {row.getValue<string[]>('hashtags').length > 3 && (
          <Badge className='px-2 py-1 text-xs'>+{row.getValue<string[]>('hashtags').length - 3}</Badge>
        )}
      </div>
    )
  },
  {
    accessorKey: 'view',
    header: ({ column }) => <DataTableColumnHeader column={column} title='View' />,
    cell: ({ row }) => <span>{row.getValue('view')}</span>
  },
  {
    accessorKey: 'vote_score',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Vote Score' />,
    cell: ({ row }) => <span>{row.getValue('vote_score')}</span>
  },
  {
    accessorKey: 'answer_number',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Answers' />,
    cell: ({ row }) => <span>{row.getValue('answer_number')}</span>
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created At' />,
    cell: ({ row }) => <span>{new Date(row.getValue('createdAt')).toLocaleDateString()}</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
