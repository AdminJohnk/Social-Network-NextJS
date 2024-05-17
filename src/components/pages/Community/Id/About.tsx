'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import { useGetCommunityByID } from '@/hooks/query';

interface IAboutProps {
  communityID: string;
}

export default function About({ communityID }: IAboutProps) {
  const t = useTranslations();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  return (
    <>
      {isLoadingCommunity ? (
        <>Loading....</>
      ) : (
        <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
          <div className='flex items-ce justify-between text-text-1'>
            <h3 className='font-bold text-lg'>{t('About')}</h3>
            <Link href='' className='text-sm text-blue-500'>
              Edit
            </Link>
          </div>
          <ul className='text-gray-700 space-y-4 mt-2 mb-1 text-sm dark:text-white'>
            <li>
              {community.about ||
                'This is a community for people who love to share their thoughts and ideas.'}
            </li>
            <li className='flex items-start gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525'
                />
              </svg>
              <div>
                <span className='font-semibold text-text-1'>Public</span>
                <p> Anyone can see who&apos;s in the group and what they post.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <div>
                <span className='font-semibold text-text-1'>Visible</span>
                <p> Anyone can find this group</p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                />
              </svg>
              <div>
                {t('Members')}
                <span className='font-semibold text-text-1 ml-2'>{community.members.length}</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
