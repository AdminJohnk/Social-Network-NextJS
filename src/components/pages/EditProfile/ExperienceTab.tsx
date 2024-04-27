'use client';

import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

import { useCurrentUserInfo } from '@/hooks/query';
import { IExperience } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddNewExperience from './AddNewExperience';

export default function ExperienceTab() {
  const { currentUserInfo } = useCurrentUserInfo();

  // Modal
  const [open, setOpen] = useState(false);

  const renderExperience = (item: IExperience) => {
    return (
      <div className='flex-start'>
        <FaBriefcase className='text-blue-1 size-5' />
        <span className='font-bold mx-2'>{item.company_name}</span>
        <span className='mx-1'>-</span>
        <span>{item.position_name}</span>
        <span className='mx-1'>|</span>
        <span>{item.start_date}</span>
        <span className='mx-1'>~</span>
        <span>{item.end_date}</span>
        <BiSolidEdit className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer mx-2' />
        <MdDelete className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer' />
      </div>
    );
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className='size-6 flex-center bg-foreground-2 hover:bg-hover-1 duration-300 rounded-full mb-4'>
            <FaPlus className='size-4 text-text-2 cursor-pointer hover:text-text-1 duration-300' />
          </div>
        </DialogTrigger>
        <DialogContent className='w-[650px]'>
          <DialogHeader>
            <DialogTitle className='base-semibold'>Add Experiences</DialogTitle>
          </DialogHeader>
          <AddNewExperience handleClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <div className='*:mb-3'>
        {currentUserInfo.experiences?.map((item, index) => {
          return renderExperience(item);
        })}
      </div>
    </div>
  );
}
