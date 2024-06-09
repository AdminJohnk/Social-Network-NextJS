'use client';

import { useMemo, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import { CircularProgress } from '@mui/material';
import { FaBriefcase } from 'react-icons/fa';
import { useFormatter, useTranslations } from 'next-intl';

import { useCurrentUserInfo } from '@/hooks/query';
import { IExperience } from '@/types';
import { useUpdateUser } from '@/hooks/mutation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AddEditExperienceModal from './AddEditExperienceModal';

export default function ExperienceTab() {
  const t = useTranslations();
  const format = useFormatter();

  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateUpdateUser, isLoadingUpdateUser } = useUpdateUser();

  const [experienceArr, setExperienceArr] = useState<IExperience[]>(currentUserInfo.experiences || []);

  const onSubmit = async () => {
    await mutateUpdateUser({
      experiences: experienceArr
    });
  };

  const onDelExperience = (index: number) => {
    const newExperienceArr = [...experienceArr];
    newExperienceArr.splice(index, 1);
    setExperienceArr(newExperienceArr);
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    return format.dateTimeRange(new Date(startDate), new Date(endDate), {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  };

  const isChanged = useMemo(
    () => JSON.stringify(experienceArr) !== JSON.stringify(currentUserInfo.experiences),
    [experienceArr, currentUserInfo.experiences]
  );

  return (
    <div className='flex flex-col justify-center'>
      <AddEditExperienceModal setExperienceArr={setExperienceArr} />

      <div className='space-y-3'>
        {!experienceArr.length ? (
          <p className='flex-center text-text-2'>{t('No experience')}</p>
        ) : (
          experienceArr.map((item, index) => (
            <div className='flex-between' key={index}>
              <div className='flex-start'>
                <FaBriefcase className='mr-1 size-5 text-blue-1' />
                <span className='mx-1 font-bold'>{item.company_name}</span>
                <span className='mx-1'>-</span>
                <span>{item.position_name}</span>
                <span className='mx-1'>|</span>
                {formatDateRange(item.start_date, item.end_date)}
              </div>
              <div className='flex-end'>
                <AddEditExperienceModal setExperienceArr={setExperienceArr} experience={item} index={index}>
                  <BiSolidEdit className='mx-2 size-5 cursor-pointer text-text-2 duration-300 hover:text-text-1' />
                </AddEditExperienceModal>
                <MdDelete
                  className='size-5 cursor-pointer text-text-2 duration-300 hover:text-text-1'
                  onClick={() => onDelExperience(index)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {experienceArr.length > 0 && (
        <div className='mt-10 flex items-center justify-center gap-4'>
          <Button
            type='button'
            className={cn(
              'button text-white max-md:flex-1 lg:px-6',
              (!isChanged || isLoadingUpdateUser) && 'select-none'
            )}
            onClick={onSubmit}
            disabled={!isChanged || isLoadingUpdateUser}>
            {isLoadingUpdateUser && <CircularProgress size={20} className='mr-2 !text-text-1' />}
            {t('Save')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      )}
    </div>
  );
}
