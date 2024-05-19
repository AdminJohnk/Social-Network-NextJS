'use client';

import { TabTitle, Tabs } from '@/components/ui/tabs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/navigation';
import { FaSearch } from 'react-icons/fa';
import {
  IoAddOutline,
  IoChatbubbleEllipsesOutline,
  IoCheckmarkOutline,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoLinkOutline,
  IoPencilOutline,
  IoPricetagOutline,
  IoShareOutline,
  IoStopCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { useJoinCommunity } from '@/hooks/mutation';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { on } from 'events';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { CircularProgress } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import { MdPublic } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { useSearchParams } from 'next/navigation';

interface IComCoverProps {
  communityID: string;
  tabParam?: string;
}

export default function ComCover({ communityID, tabParam }: IComCoverProps) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { currentUserInfo } = useCurrentUserInfo();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);
  const { mutateJoinCommunity, isLoadingJoinCommunity } = useJoinCommunity();

  const isMember = useMemo(
    () => community && community.members.some((member) => member._id === currentUserInfo._id),
    [community]
  );
  const isRequested = useMemo(
    () => community && community.waitlist_users.some((request) => request._id === currentUserInfo._id),
    [community]
  );

  const isAdmin = useMemo(
    () => community && community.admins.some((admin) => admin._id === currentUserInfo._id),
    [community]
  );

  const isCreator = useMemo(() => community && community.creator._id === currentUserInfo._id, [community]);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('tab', value);

      return params.toString();
    },
    [searchParams]
  );

  const tab = useMemo(() => {
    if (isAdmin)
      switch (tabParam) {
        case 'requests':
          return 1;
        case 'files':
          return 2;
        case 'photos':
          return 3;
        case 'events':
          return 4;
        case 'videos':
          return 5;
        case 'members':
          return 6;
        case 'medias':
          return 7;
        default:
          return 0;
      }
    else
      switch (tabParam) {
        case 'files':
          return 1;
        case 'photos':
          return 2;
        case 'events':
          return 3;
        case 'videos':
          return 4;
        case 'members':
          return 5;
        case 'medias':
          return 6;
        default:
          return 0;
      }
  }, [isAdmin]);

  const onClickMoreMembers = () => {
    window.location.href = pathname + '?' + createQueryString('members');
  };

  const [openLeaveCommunity, setOpenLeaveCommunity] = useState(false);

  const handleLeaveCommunity = () => {
    setOpenLeaveCommunity(false);
    mutateJoinCommunity(communityID);
  }

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
              priority
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
                  <p className='font-normal text-gray-500 mt-2 flex items-center gap-2 flex-wrap dark:text-white/80'>
                    {community.visibility === 'public' ? (
                      <MdPublic className='size-4 -mr-1' />
                    ) : (
                      <IoMdLock className='size-4 -mr-1' />
                    )}
                    <span className='max-lg:hidden'> {t(community.visibility + ' community')} </span>
                    <span className='max-lg:hidden'> • </span>
                    <span>
                      <b className='font-medium text-text-1'>{community.members.length}</b> {t('members')}
                    </span>
                    {/* <span className='max-lg:hidden'> • </span>
                    <span>
                      <b className='font-medium text-text-1'>1.4K</b> {t('followers')}
                    </span> */}
                  </p>
                </div>
                <div>
                  <div className='flex items-center gap-2 mt-1'>
                    <div className='flex -space-x-4 mr-3'>
                      {Array.from(community.members)
                        .slice(0, 5)
                        .map((member) => (
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
                    {community.members.length > 5 && (
                      <button
                        type='button'
                        onClick={onClickMoreMembers}
                        className='flex-center -ml-9 bg-foreground-2 rounded-full size-10 border-4 border-white dark:border-slate-800'>
                        <span className='text-white font-bold'>+{community.members.length - 5}</span>
                      </button>
                    )}
                    <div className='join-community-button'>
                      <button
                        onClick={() => {
                          if (!isMember) mutateJoinCommunity(communityID);
                        }}
                        className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-1 py-2 px-3.5 shadow ml-auto'>
                        {!isCreator ? (
                          isMember ? (
                            <>
                              {isLoadingJoinCommunity ?
                                <CircularProgress size={20} className='!text-text-1 mr-2' /> :
                                <IoCheckmarkOutline className='text-xl' />}
                              <span className='text-sm'> {t('Joined')} </span>
                            </>
                          ) : isRequested ? (
                            <>
                              {isLoadingJoinCommunity ?
                                <CircularProgress size={20} className='!text-text-1 mr-2' /> :
                                <FaXmark className='text-xl' />}
                              <span>{t('Cancel Request')}</span>
                            </>
                          ) : (
                            <>
                              {isLoadingJoinCommunity ?
                                <CircularProgress size={20} className='!text-text-1 mr-2' /> :
                                <IoAddOutline className='text-xl' />}
                              <span className='text-sm'> {t('Join')} </span>
                            </>
                          )
                        ) : (
                          <>
                            <IoPencilOutline className='text-xl' />
                            <span className='text-sm'> {t('Edit')} </span>
                          </>
                        )}

                      </button>
                      {isMember && !isCreator && (
                        <div className='!w-fit'
                          data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                          <Button
                            variant={'destructive'}
                            onClick={() => setOpenLeaveCommunity(true)}
                          >{t('Leave Community')}</Button>
                          <AlertDialog open={openLeaveCommunity} onOpenChange={setOpenLeaveCommunity}>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>{t('Are you absolutely sure leave this community?')}</AlertDialogTitle>
                                <AlertDialogDescription>
                                  {t('You will not be able to return to the group until approved by the admin!')}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <Button
                                  variant='ghost'
                                  className={cn(isLoadingJoinCommunity && 'select-none')}
                                  disabled={isLoadingJoinCommunity}
                                  onClick={() => setOpenLeaveCommunity(false)}>
                                  {t('Cancel')}
                                </Button>
                                <Button
                                  variant={'destructive'}
                                  onClick={handleLeaveCommunity}>
                                  {t('Leave')}
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      )}
                    </div>

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
                          {isCreator ? (
                            <Link href='' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                              <IoTrashOutline className='text-xl' /> {t('Remove Your Community')}
                            </Link>
                          ) : (
                            <Link href='' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                              <IoStopCircleOutline className='text-xl' /> {t('Block')}
                            </Link>
                          )}
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
              <Tabs id='tabs-community' navClassName='!pt-0' disableChevron active={tab}>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('discussion'))}>
                  {t('Discussion')}
                </TabTitle>
                {isAdmin && (
                  <TabTitle
                    className='hover:!bg-hover-1 rounded-sm'
                    onClick={() => router.push(pathname + '?' + createQueryString('requests'))}>
                    {t('Requests')}
                  </TabTitle>
                )}
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('files'))}>
                  {t('Files')}
                </TabTitle>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('photos'))}>
                  {t('Photos')}
                </TabTitle>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('events'))}>
                  {t('Event')}
                </TabTitle>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('videos'))}>
                  {t('Video')}
                </TabTitle>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('members'))}>
                  {t('Members')}
                </TabTitle>
                <TabTitle
                  className='hover:!bg-hover-1 rounded-sm'
                  onClick={() => router.push(pathname + '?' + createQueryString('medias'))}>
                  {t('Media')}
                </TabTitle>
              </Tabs>
            </nav>
            <div className='flex items-center gap-1 text-sm p-3 bg-foreground-2 py-2 mr-2 rounded-xl max-md:hidden'>
              <FaSearch className='text-lg' />
              <input placeholder='Search ..' className='!bg-transparent' />
            </div>
          </div>
        </div >
      )
      }
    </>
  );
}
