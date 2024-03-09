import * as React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { MdOutlineGroup } from 'react-icons/md';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div className='bg-foreground-1 p-4 rounded-md'>
      <div className='flex-between'>
        <h2 className='h4-semibold'>About</h2>
        <button className='text-blue-500'>Edit</button>
      </div>
      <p className='mt-2'>
        This group, it not a group of Dr. Adan Adam, and she dont know about it,
        it a group for people.
      </p>
      <div className='mt-4 space-y-2'>
        <div className='flex-start'>
          <AiOutlineGlobal className='size-7 me-3' />
          <div>
            <h3 className='font-semibold'>Public</h3>
            <p className=''>
              Anyone can see who in the group and what they post.
            </p>
          </div>
        </div>
        <div className='flex-start'>
          <FaEye className='size-7 me-3' />
          <div>
            <h3 className='font-semibold'>Visible</h3>
            <p className=''>Anyone can find this group</p>
          </div>
        </div>
        <div className='flex-start'>
          <MdOutlineGroup className='size-7 me-3' />
          <div>
            <h3 className='font-semibold'>Members</h3>
            <p className=''>3,240 People</p>
          </div>
        </div>
      </div>
    </div>
  );
}
