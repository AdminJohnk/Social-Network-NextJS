'use client';

import { useState } from 'react';
import ComCategory from '@/components/pages/Community/ComCategory';
import ComPopularList from '@/components/pages/Community/ComPopularList';
import ComSuggestionList from '@/components/pages/Community/ComSuggestionList';
import ComMineList from '@/components/pages/Community/ComMineList';
import { TabTitle, Tabs } from '@/components/ui/tabs';
import ComSuggestion from '@/components/pages/Community/ComSuggestion';
import { useTranslations } from 'next-intl';
import { BsPlusCircleFill } from 'react-icons/bs';
import CreateNewCommunity from '@/components/pages/Community/CreateNewCommunity';
import Modal from '@/components/shared/Modal';
import { IoAdd } from 'react-icons/io5';

export interface ICommunityProps {
  params: {
    locale: string;
  };
}

export default function Community({ params: { locale } }: ICommunityProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='communities px-40 py-5'>
        <main id='site__main' className=''>
          <div className='2xl:max-w-[1220px]'>
            <div className='page-heading'>
              <div className='flex-start gap-3'>
                <h1 className='page-title'> {t('Communities')} </h1>
                <span className='p-1 rounded-full bg-foreground-1'>
                  <IoAdd
                    className='size-5 text-1'
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </span>
                <Modal open={open} handleClose={() => setOpen(false)}>
                  <CreateNewCommunity />
                </Modal>
              </div>

              <Tabs id='community-tabs' disableChevron>
                <TabTitle>{t('Suggestions')}</TabTitle>
                <TabTitle>{t('Popular')}</TabTitle>
                <TabTitle>{t('My communities')}</TabTitle>
              </Tabs>
            </div>

            <div className='uk-switcher' id='community-tabs'>
              <ComSuggestionList />
              <ComPopularList />
              <ComMineList />
            </div>

            <ComCategory />
            <ComSuggestion />

            <div className='flex justify-center my-6'>
              <button
                type='button'
                className='bg-foreground-2 hover:bg-hover-2 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm '
              >
                {t('Load more')}...
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
