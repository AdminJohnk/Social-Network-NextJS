'use client';

import * as React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CiUser } from 'react-icons/ci';
import { GrUpgrade } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';

import getImageURL from '@/lib/utils';

export interface IAccountDetailProps {}

export default function AccountDetail(props: IAccountDetailProps) {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <>
      <div className='ps-3'>
        <Avatar
          className='mb-3 size-7'
          src={getImageURL(session?.user.image!)}
        />
        <div>
          <span className='h5-bold mb-2'>{session?.user.name}</span>
        </div>
        <div>
          <span className='small-regular mb-4 text-text-2'>
            @{session?.user.name}
          </span>
        </div>
        <div className='*:small-bold'>
          <span className='me-2'>620K</span>
          <span className='me-3 text-text-2'>Following</span>
          <span className='me-2'>38K</span>
          <span className='text-text-2'>Followers</span>
        </div>
      </div>
      <Divider className='my-3 bg-text-1' />
      <div className='*:cursor-pointer *:rounded-lg *:px-3 *:py-2.5 hover:*:bg-hover-1'>
        <div className='flex'>
          <span className='me-3 text-xl'>
            <CiUser />
          </span>
          <span>Profile</span>
        </div>
        <div className='flex'>
          <span className='me-3 text-xl'>
            <GrUpgrade />
          </span>
          <span>Upgrade</span>
        </div>
        <div className='flex' onClick={() => router.push('/edit-profile')}>
          <span className='me-3 text-xl'>
            <IoSettingsOutline />
          </span>
          <span>Account Setting</span>
        </div>
        <div className='flex' onClick={() => signOut()}>
          <span className='me-3 text-xl'>
            <IoIosLogOut />
          </span>
          <span>Log Out</span>
        </div>
      </div>
    </>
  );
}
