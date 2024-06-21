'use client';

import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useCurrentUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { Avatar } from '@mui/material';

export function UserNav() {
  const { currentUserInfo } = useCurrentUserInfo();

  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar
            className='h-9 w-9'
            src={getImageURL(currentUserInfo.user_image, 'avatar')}
            alt='avatar'></Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{currentUserInfo.name}</p>
            <p className='text-xs leading-none text-muted-foreground'>{currentUserInfo.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(`/profile/${currentUserInfo._id}`)}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
