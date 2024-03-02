'use client';

import { Avatar, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

import getImageURL from '@/lib/utils';

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-row justify-end'>
      {session?.user && (
        <div className='flex flex-row items-center gap-5'>
          <Avatar src={getImageURL(session?.user?.image ?? '')} />
          <h6>{session?.user?.name}</h6>
          <Button color='error' onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      )}

      {!session?.user && (
        <Button color='primary' onClick={() => signIn()}>
          Login
        </Button>
      )}
    </div>
  );
}
