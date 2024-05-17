'use client';

import { TabTitle, Tabs } from '@/components/ui/tabs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import { FaSearch } from 'react-icons/fa';
import {
  IoAddOutline,
  IoChatbubbleEllipsesOutline,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoLinkOutline,
  IoPricetagOutline,
  IoShareOutline,
  IoStopCircleOutline
} from 'react-icons/io5';
import { useGetCommunityByID } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';

interface IComCoverProps {
  communityID: string;
}

export default function ComCover({ communityID }: IComCoverProps) {
  const t = useTranslations();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  return (
    <>
      {isLoadingCommunity ? (
        <>Loading....</>
      ) : (
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl lg:-mt-10 '>
          <div className='relative overflow-hidden w-full lg:h-72 h-36'>
            <Image
              width={1500}
              height={1000}
              src={getImageURL(community?.image)}
              alt='cover'
              className='h-full w-full object-cover inset-0'
            />

            <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from -black/60 pt-10 z-10'></div>

            <div className='absolute bottom-0 right-0 m-4 z-20'>
              <div className='flex items-center gap-3'>
                <button className='button bg-white/20 text-white flex items-center gap-2 backdrop-blur-sm'>
                  {t('Crop')}
                </button>
                <button className='button bg-black/10 text-white flex items-center gap-2 backdrop-blur-sm'>
                  {t('Edit')}
                </button>
              </div>
            </div>
          </div>
          <div className='lg:px-10 md:p-5 p-3'>
            <div className='flex flex-col justify-center'>
              <div className='flex lg:items-center justify-between max-md:flex-col'>
                <div className='flex-1'>
                  <h3 className='md:text-2xl text-base font-bold text-text-1'>{community.name}</h3>
                  <p className=' font-normal text-gray-500 mt-2 flex gap-2 flex-wrap dark:text-white/80'>
                    <span className='max-lg:hidden'> {t(community.visibility + ' community')} </span>
                    <span className='max-lg:hidden'> • </span>
                    <span>
                      <b className='font-medium text-text-1'>1.2K</b> {t('likes')}
                    </span>
                    <span className='max-lg:hidden'> • </span>
                    <span>
                      <b className='font-medium text-text-1'>1.4K</b> {t('followers')}
                    </span>
                  </p>
                </div>
                <div>
                  <div className='flex items-center gap-2 mt-1'>
                    <div className='flex -space-x-4 mr-3'>
                      {Array.from(community.members).map((member) => (
                        <Image
                          key={member._id}
                          width={500}
                          height={500}
                          src={getImageURL(member.user_image, 'avatar')}
                          alt=''
                          className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                        />
                      ))}
                    </div>
                    <button className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-1 py-2 px-3.5 shadow ml-auto'>
                      <IoAddOutline className='text-xl' />
                      <span className='text-sm'> {t('Join')} </span>
                    </button>
                    <div>
                      <button
                        type='button'
                        className='rounded-lg bg-foreground-2 hover:bg-hover-2 flex px-2.5 py-2'>
                        <IoEllipsisHorizontal className='text-xl' />
                      </button>
                      <div
                        className='w-[240px]'
                        data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                        <nav>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoPricetagOutline className='text-xl' />
                            {t('Unfollow')}
                          </Link>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoShareOutline className='text-xl' /> {t('Share')}
                          </Link>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoLinkOutline className='text-xl' /> {t('Copy link')}
                          </Link>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoChatbubbleEllipsesOutline className='text-xl' />
                            {t('Sort comments')}
                          </Link>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoFlagOutline className='text-xl' />
                            {t('Report group')}
                          </Link>
                          <hr />
                          <Link href='' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                            <IoStopCircleOutline className='text-xl' /> {t('Block')}
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between  border-t border-gray-100 px-2 dark:border-slate-700'>
            <nav className='flex gap-0.5 rounded-xl overflow-hidden -mb-px text-gray-500 font-medium text-sm overflow-x-auto dark:text-white'>
              <Tabs id='tabs-community' navClassName='!pt-0'>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Discussion')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Files')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Photos')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Event')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Video')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Members')}</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>{t('Media')}</TabTitle>
              </Tabs>
            </nav>
            <div className='flex items-center gap-1 text-sm p-3 bg-foreground-2 py-2 mr-2 rounded-xl max-md:hidden'>
              <FaSearch className='text-lg' />
              <input placeholder='Search ..' className='!bg-transparent' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
