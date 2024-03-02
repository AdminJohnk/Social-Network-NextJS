'use client';

import { Avatar, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import useAuth from '@/hooks/auth/useAuth';

export default function Header() {
  const { data } = useSession();
  // const isAuthenticated = useAuth(true);

  const menuItems = [
    {
      href: '/dashboard',
      name: 'Dashboard'
    },
    {
      href: '/movies',
      name: 'Movies'
    }
  ];

  return (
    <div className='flex flex-row justify-end'>
      <div>
        {data?.user && (
          <div className='flex flex-row items-center gap-5'>
            <Avatar src={data?.user?.image ?? ''} />
            <h6>{data?.user?.name}</h6>
            <Button color='error' onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        )}

        {!data?.user && (
          <Button color='primary' onClick={() => signIn()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
