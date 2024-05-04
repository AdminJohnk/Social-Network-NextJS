'use client';

import { useTranslations } from 'next-intl';
import { IoChevronBackOutline } from 'react-icons/io5';

export default function NoConversationSelected() {
  const t = useTranslations();
  return (
    <div className='flex-1 relative'>
      {/* <!-- toggle for mobile --> */}
      <button
        type='button'
        className='md:hidden'
        data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
        <IoChevronBackOutline className='text-2xl' />
      </button>
      {/* <div className='h-dvh flex-center h3-semibold'>{t('Select a conversation to start chatting')}</div> */}
      <div
        className='px-4 py-10 h3-semibold sm:px-6 lg:px-8 lg:py-6 h-full flex justify-center items-center' >
        <div className='text-center items-center flex flex-col'>
          <h3 className='mt-2 text-2xl font-semibold' >
            {t('Select a conversation to start chatting')}
          </h3>
        </div>
      </div>
    </div>
  );
}
