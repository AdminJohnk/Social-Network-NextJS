'use client';

import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddEditExperience from './AddEditExperience';
import { IExperience } from '@/types';

export interface IAddEditExperienceModalProps {
  setExperienceArr: React.Dispatch<React.SetStateAction<IExperience[]>>;
  experience?: IExperience;
  index?: number;
  children?: React.ReactNode;
}

export default function AddEditExperienceModal({
  setExperienceArr,
  children,
  index,
  experience
}: IAddEditExperienceModalProps) {
  const t = useTranslations();

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {children ?? (
          <div className='flex-center mb-4 size-6 rounded-full bg-foreground-2 duration-300 hover:bg-hover-1'>
            <FaPlus className='size-4 cursor-pointer text-text-2 duration-300 hover:text-text-1' />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className='w-[650px]'>
        <DialogHeader>
          <DialogTitle className='base-semibold'>{t('Add Experiences')}</DialogTitle>
        </DialogHeader>
        <AddEditExperience
          index={index}
          experience={experience}
          handleClose={() => setOpen(false)}
          setExperienceArr={setExperienceArr}
        />
      </DialogContent>
    </Dialog>
  );
}
