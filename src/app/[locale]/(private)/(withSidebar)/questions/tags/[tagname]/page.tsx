'use client';

import { useState } from 'react';
import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import Modal from '@/components/shared/Modal';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export interface ITagDetailProps {
  params: {
    tagname: string;
  };
}

export default function TagDetail({ params: { tagname } }: ITagDetailProps) {
  const t = useTranslations();

  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg:ms-0'>
      <div className='mx-auto max-w-[1070px]'>
        <div className='grid grid-cols-3 gap-8'>
          <div className='left col-span-2'>
            <div className='flex justify-between mt-3'>
              <div className='h3-semibold me-10'>{t('Questions tagged') + ' ' + `[${tagname}]`}</div>
              <div>
                <Button className='text-nowrap' onClick={() => setOpenCreateQuestion(true)}>
                  {t('Ask a question')}
                </Button>
                <Modal open={openCreateQuestion} handleClose={() => setOpenCreateQuestion(false)}>
                  <CreateEditQuestion handleClose={() => setOpenCreateQuestion(false)} />
                </Modal>
              </div>
            </div>
          </div>
          <div className='right col-span-1'></div>
        </div>
      </div>
    </div>
  );
}