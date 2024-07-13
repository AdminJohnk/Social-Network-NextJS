'use client';

import {  useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FaPencilAlt, FaUserFriends } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

import descArrays from '@/lib/descriptions/Tags';
import { useCurrentUserInfo, useGetCommunitiesByUserID } from '@/hooks/query';
import SlideHeader from '@/components/pages/Register/SlideHeader';
import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getImageURL } from '@/lib/utils';
import { CircularProgress } from '@mui/material';

export interface ICompleteProfileProps {
}

export default function CompleteProfile({ }: ICompleteProfileProps) {
  const t = useTranslations();
  const router = useRouter();

  const { currentUserInfo } = useCurrentUserInfo();
  const { communities, isLoadingCommunities } = useGetCommunitiesByUserID(currentUserInfo._id);

  const tagsArray = useMemo(() => {
    if (!currentUserInfo.tags) return [];
    return descArrays.filter((item) => currentUserInfo.tags.includes(item.title));
  }, [currentUserInfo.tags]);

  const followPeople = useMemo(() => {
    if (!currentUserInfo.friends) return [];
    return currentUserInfo.friends;
  }, [currentUserInfo.friends]);

  return (
    <div>
      <SlideHeader step={5} />

      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Complete your profile')}</span>
        <div className='*:mt-6'>

          {/* get started */}
          <div>
            <span className='font-bold text-xl max-md:text-lg'> {t('How would you like to get started?')}</span>
            <div className='bg-foreground-1 rounded-lg px-4 py-6 mt-3 flex gap-4 items-center justify-between'>
              <div className='flex-start gap-3'>
                <div className=' rounded-full bg-foreground-2 p-2'>
                  <FaPeopleGroup className='text-2xl text-blue-1' />
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='font-bold text-lg'> {t('Connect with developers and the community')}</span>
                  <span className='text-lg max-md:text-lg text-white/75'> {t('Explore communities and build your developer network')}.</span>
                </div>
              </div>
              <Button variant={'ghost'} className='flex items-center gap-2' onClick={() => router.push('/get-started')}>
                <FaPencilAlt className='text-lg' />
                {t('Edit')}
              </Button>
            </div>
          </div>

          {/* select interest */}
          <div>
            <span className='font-bold text-xl max-md:text-lg'> {t('Interests')}</span>
            <div className='flex flex-wrap gap-4 mt-3'>
              {tagsArray.length > 0 && tagsArray.map((item, index) => (
                <div
                  key={index}
                  className='itemTag border-[0.5px] border-border-1 select-none px-4 py-2'
                >
                  <div className='flex-start'>
                    <span className='*:size-5 mr-2'>{item.svg}</span>
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
              <Button variant={'ghost'} className='flex items-center gap-2' onClick={() => router.push('/select-interest')}>
                <FaPencilAlt className='text-lg' />
                {t('Edit')}
              </Button>
            </div>
          </div>

          {/* select communities */}
          <div>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-xl max-md:text-lg'> {t('Communities')}</span>
              <Button variant={'ghost'} className='flex items-center gap-2' onClick={() => router.push('/select-communities')}>
                <FaPencilAlt className='text-lg' />
                {t('Edit')}
              </Button>
            </div>
            {isLoadingCommunities ? (
              <div className='flex justify-center items-center mt-3'>
                <div className='flex flex-col items-center'>
                  <CircularProgress />
                  <span className='mt-4'>Loading...</span>
                </div>
              </div>
            ) : (<div className='flex flex-wrap gap-4 mt-3'>
              {communities.map((comInfo, index) => {
                return (
                  <div key={index} className='w-full'>
                    <div className='bg-foreground-1 rounded-lg p-4'>
                      <div className='flex justify-between'>
                        <div className='flex-start'>
                          <span className='*:size-8 mr-2 bg-foreground-2 rounded-md p-2'>
                            <Image width={500} height={500} src={getImageURL(comInfo.image)} className='w-24 h-24' alt='' />
                          </span>
                          <div>
                            <div className='flex items-center gap-2'>
                              <span className='font-semibold'>{comInfo.name}</span>
                              <FaUserFriends className='text-white/75' />
                              <span className='text-white/75'>{comInfo.members.length}</span>
                            </div>
                            <p className='text-white/75'>
                              {comInfo.about.length > 100
                                ? comInfo.about.slice(0, 100) + '...'
                                : comInfo.about}
                            </p>
                          </div>
                        </div>
                        <Button >{t('Join')}</Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            )}
          </div>

          {/* follow people */}
          <div>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-xl max-md:text-lg'> {t('People')}</span>
              <Button variant={'ghost'} className='flex items-center gap-2' onClick={() => router.push('/follow-people')}>
                <FaPencilAlt className='text-lg' />
                {t('Edit')}
              </Button>
            </div>
            <div className='mt-3 *:mt-4'>
              {followPeople.length > 0 && followPeople.map((item, index) => (
                <div key={index} className='bg-foreground-1 rounded-lg p-4 flex gap-4 items-center justify-between'>
                  <div className='flex-start gap-3'>
                    <Image width={500} height={500} src={getImageURL(item.user_image)} alt='avatar' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col gap-2'>
                      <span className='font-semibold'> {item.name}</span>
                      <span className='text-white/75'> {item.email}</span>
                    </div>
                  </div>
                  <Button >{t('Follow')}</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-2 flex justify-end p-4'>
          <Button onClick={() => router.push('/')} >{t('Done')}</Button>
        </div>
      </div>
    </div>
  );
}
