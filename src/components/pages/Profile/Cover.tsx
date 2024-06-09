'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import {
  IoCamera,
  IoChatboxEllipsesOutline,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoShareOutline,
  IoStopCircleOutline,
  IoVideocamOutline
} from 'react-icons/io5';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabTitle } from '@/components/ui/tabs';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { ProfileUpload } from '@/components/ui/upload-image';
import { useDeleteImage, useUpdateUser } from '@/hooks/mutation';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Link, usePathname, useRouter } from '@/navigation';
import { imageService } from '@/services/ImageService';
import { CircularProgress, Skeleton } from '@mui/material';

import FriendButton from './FriendButton';

export interface ICoverProps {
  profileID: string;
  tabParam?: string;
}

export default function Cover({ profileID, tabParam }: ICoverProps) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { mutateUpdateUser } = useUpdateUser();
  const { mutateDeleteImage } = useDeleteImage();

  const { otherUserInfo, isLoadingOtherUserInfo, isErrorOtherUserInfo } = useOtherUserInfo(profileID);
  const { currentUserInfo } = useCurrentUserInfo();

  const isMe = currentUserInfo._id === profileID;

  const isFriend = currentUserInfo.friends?.some((friend) => friend._id === profileID);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('tab', value);

      return params.toString();
    },
    [searchParams]
  );

  const tab = useMemo(() => {
    switch (tabParam) {
      case 'friends':
        return 1;
      case 'series':
        return 2;
      case 'photos':
        return 3;
      case 'repositories':
        return 4;
      case 'communities':
        return 5;
      default:
        return 0;
    }
  }, []);

  const [isLoadingChangeCover, setIsLoadingChangeCover] = useState<boolean>(false);
  const [cover, setCover] = useState('/images/avatars/profile-cover.jpg');
  const [fileCover, setFileCover] = useState<File>();

  const handleCoverImage = useCallback((image: File) => {
    if (!image) return;
    setCover(URL.createObjectURL(image));
    setFileCover(image);
  }, []);

  const [openChangeAvatar, setOpenChangeAvatar] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState<File>();

  useEffect(() => {
    if (otherUserInfo?.user_image) {
      setAvatar(getImageURL(otherUserInfo.user_image));
    }
    if (otherUserInfo?.cover_image) {
      setCover(getImageURL(otherUserInfo.cover_image));
    }
  }, [otherUserInfo]);

  const [isLoadingChangeAvatar, setIsLoadingChangeAvatar] = useState(false);
  const isChangedAvatar = useMemo(() => {
    return !fileAvatar;
  }, [fileAvatar]);

  const handleUploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await imageService.uploadImage(formData);
    return {
      url: data.metadata,
      status: 'done'
    };
  };

  const onSubmit = async () => {
    const formData = new FormData();

    if (fileAvatar) {
      try {
        setIsLoadingChangeAvatar(true);
        const res = await handleUploadImage(fileAvatar);
        formData.append('userImage', res.url.key);
        // if (initialAvatar) await handleRemoveImage(initialAvatar);
      } catch (e) {
        showErrorToast(t('Something went wrong! Please try again!'));
        setIsLoadingChangeAvatar(false);
        return;
      }
    }

    if (fileCover) {
      try {
        setIsLoadingChangeCover(true);
        const res = await handleUploadImage(fileCover);
        formData.append('coverImage', res.url.key);
      } catch (e) {
        showErrorToast(t('Something went wrong! Please try again!'));
        setIsLoadingChangeCover(false);
        return;
      }
    }

    const oldAvatar = otherUserInfo.user_image;
    const oldCover = otherUserInfo.cover_image;

    mutateUpdateUser(
      {
        user_image: formData.get('userImage')?.toString(),
        cover_image: formData.get('coverImage')?.toString()
      },
      {
        onSuccess() {
          showSuccessToast(t('Your profile has been updated successfully!'));
          fileAvatar && mutateDeleteImage([oldAvatar]);
          fileCover && mutateDeleteImage([oldCover]);
          setFileAvatar(undefined);
          setFileCover(undefined);
          setOpenChangeAvatar(false);
        },
        onError() {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoadingChangeAvatar(false);
          setIsLoadingChangeCover(false);
        }
      }
    );
  };

  useEffect(() => {
    if (!isLoadingOtherUserInfo) UIkit.switcher(`#main-tabs`).show(tab);
  }, [isLoadingOtherUserInfo]);

  if (isErrorOtherUserInfo) notFound();

  return isLoadingOtherUserInfo ? (
    <div>
      <div className='relative h-48 w-full overflow-hidden lg:h-72'>
        <Skeleton variant='rectangular' className='!w-full !bg-foreground-1' />

        <div className='absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/60 pt-20' />

        {isMe && (
          <div className='absolute bottom-0 right-0 z-20 m-4'>
            <div className='flex items-center gap-3'>
              <Skeleton variant='rounded' width={100} height={40} className='!bg-foreground-2' />
            </div>
          </div>
        )}
      </div>
      <div className='p-3'>
        <div className='-mt-28 flex flex-col justify-center md:items-center lg:-mt-48'>
          <div className='relative z-10 mb-4 size-28 lg:size-48'>
            <div className='relative h-full w-full shrink-0 overflow-hidden rounded-full border-gray-100 shadow dark:border-slate-900 md:border-[6px]'>
              <Skeleton variant='circular' className='!size-28 !rounded-full !bg-foreground-1 lg:!size-48' />
            </div>
          </div>
          <h3 className='text-base font-bold text-text-1 md:text-3xl'>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-28 !bg-foreground-2' />
          </h3>
          <p className='mt-2 max-w-xl text-center text-sm font-light md:font-normal'>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-40 !bg-foreground-2' />
          </p>
        </div>
      </div>
      <div className='mt-3 flex items-center justify-between border-t border-gray-100 px-2 dark:border-slate-700 max-lg:flex-col'>
        <div className='flex items-center gap-2 py-2 pr-1 text-sm max-md:w-full lg:order-2'>
          <Skeleton variant='rounded' width={100} height={40} className='!bg-foreground-2' />
          <Skeleton variant='circular' width={40} height={40} className='!bg-foreground-2' />
        </div>

        <nav className='-mb-px flex rounded-xl text-[15px] font-medium'>
          <Tabs
            id='tabs-profile'
            idTab='skeleton-tabs'
            navClassName='!pt-0 !rounded-sm'
            disableChevron
            active={tab}>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
            <TabTitle className='!rounded-sm hover:bg-hover-1'>
              <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} className='!w-16 !bg-foreground-2' />
            </TabTitle>
          </Tabs>
        </nav>
      </div>
    </div>
  ) : (
    <div>
      <div className='relative h-48 w-full overflow-hidden lg:h-72'>
        <PhotoProvider
          loadingElement={
            <div className='flex-center w-full py-10'>
              <CircularProgress size={20} className='!text-text-1' />
            </div>
          }>
          <PhotoView src={cover}>
            <Image
              width={1000}
              height={1000}
              src={cover}
              alt='cover'
              className='inset-0 h-full w-full cursor-pointer object-cover'
              priority
            />
          </PhotoView>
        </PhotoProvider>

        <div className='absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/60 pt-20' />

        {isMe && (
          <div className='absolute bottom-0 right-0 z-20 m-4'>
            <div className='flex items-center gap-3'>
              {!fileCover ? (
                <label htmlFor='cover_image' className='cursor-pointer'>
                  <div className='button flex items-center gap-2 bg-black/10 text-white backdrop-blur-sm'>
                    {t('Edit')}
                  </div>
                  <input
                    type='file'
                    id='cover_image'
                    className='hidden'
                    accept='image/*'
                    disabled={isLoadingChangeCover}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > 1024 * 1024 * 10) {
                          showErrorToast(t('Your image is too big!'));
                        } else {
                          handleCoverImage(file);
                        }
                      }
                    }}
                  />
                </label>
              ) : (
                <>
                  <Button
                    variant={'destructive'}
                    onClick={() => {
                      setCover(getImageURL(otherUserInfo.cover_image) || '/images/avatars/profile-cover.jpg');
                      setFileCover(undefined);
                    }}
                    className='button'
                    disabled={isLoadingChangeCover}>
                    {t('Cancel')}
                  </Button>
                  <Button
                    onClick={onSubmit}
                    className={cn('button', isLoadingChangeCover && 'select-none')}
                    disabled={isLoadingChangeCover}>
                    {isLoadingChangeCover && <CircularProgress size={15} className='mr-2 !text-text-1' />}
                    {t('Save')}
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className='p-3'>
        <div className='-mt-28 flex flex-col justify-center md:items-center lg:-mt-48'>
          <div className='relative z-10 mb-4 size-28 lg:size-48'>
            <div className='relative h-full w-full shrink-0 overflow-hidden rounded-full border-gray-100 shadow dark:border-slate-900 md:border-[6px]'>
              <PhotoProvider
                loadingElement={
                  <div className='flex-center w-full py-10'>
                    <CircularProgress size={20} className='!text-text-1' />
                  </div>
                }>
                <PhotoView src={getImageURL(avatar) || '/images/avatars/avatar-6.jpg'}>
                  <Image
                    width={500}
                    height={500}
                    src={getImageURL(avatar) || '/images/avatars/avatar-6.jpg'}
                    alt='avatar'
                    className='size-28 cursor-pointer object-cover lg:size-48'
                    priority
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            {isMe && (
              <>
                <button
                  type='button'
                  onClick={() => setOpenChangeAvatar(true)}
                  className='absolute -bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full bg-hover-1 p-1.5 shadow sm:flex'>
                  <IoCamera className='md hydrated text-2xl' aria-label='camera' />
                </button>
                <Dialog open={openChangeAvatar} onOpenChange={setOpenChangeAvatar}>
                  <DialogContent className='max-w-[600px] border-none bg-background-1'>
                    <DialogHeader>
                      <DialogTitle>{t('Change your avatar')}</DialogTitle>
                    </DialogHeader>
                    <ProfileUpload fieldChange={setFileAvatar} mediaURL={avatar} />
                    <DialogFooter>
                      <Button
                        variant={'destructive'}
                        className='button text-white max-md:flex-1 lg:px-6'
                        onClick={() => setOpenChangeAvatar(false)}>
                        {t('Cancel')}
                      </Button>
                      <Button
                        className='button text-white max-md:flex-1 lg:px-6'
                        onClick={onSubmit}
                        disabled={isChangedAvatar || isLoadingChangeAvatar}>
                        {isLoadingChangeAvatar && (
                          <CircularProgress size={20} className='mr-2 !text-text-1' />
                        )}
                        {t('Save')}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
          <h3 className='text-base font-bold text-text-1 md:text-3xl'>{otherUserInfo?.name}</h3>
          <p
            className='mt-2 max-w-xl text-center text-sm font-light md:font-normal'
            dangerouslySetInnerHTML={{ __html: otherUserInfo?.about }}></p>
        </div>
      </div>
      <div
        className='mt-3 flex items-center justify-between border-t border-gray-100 px-2 dark:border-slate-700 max-lg:flex-col'
        data-uk-sticky='start: 100; offset: 50; cls-active: bg-foreground-1 shadow rounded-b-2xl backdrop-blur-xl z-10; animation: uk-animation-slide-top; media: 1024'>
        <div className='flex items-center gap-2 py-2 pr-1 text-sm max-md:w-full lg:order-2'>
          {isMe && (
            <Button
              variant='main'
              className='button bg-foreground-2 px-3.5 py-2 text-text-1 hover:bg-hover-2 max-md:flex-1'>
              <Link href={'/edit-profile'} className='flex items-center gap-2'>
                <FaPencilAlt className='text-lg' />
                <span className='text-sm'> {t('Edit Profile')} </span>
              </Link>
            </Button>
          )}

          {!isMe && <FriendButton profileID={profileID} />}

          <div>
            <Button variant='main' className='flex rounded-lg bg-foreground-2 px-2.5 py-2 hover:bg-hover-2'>
              <IoEllipsisHorizontal className='text-xl' />
            </Button>
            <div
              className='hidden w-[240px] !bg-foreground-1'
              data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
              {isMe ? (
                <nav>
                  <Link href='' className='hover:!bg-hover-1'>
                    {t('Activity Log')}
                  </Link>
                  <Link href='' className='hover:!bg-hover-1'>
                    {t('Archive')}
                  </Link>
                  <Link href='' className='hover:!bg-hover-1'>
                    {t('More')}
                  </Link>
                  <hr />
                  <Link href='' className='hover:!bg-hover-1'>
                    {t('Settings & Privacy')}
                  </Link>
                  <Link href='' className='hover:!bg-hover-1'>
                    {t('Help & Support')}
                  </Link>
                </nav>
              ) : (
                <nav>
                  {isFriend && (
                    <>
                      <Link href='' className='hover:!bg-hover-1'>
                        <FiPhone className='text-xl' /> {t('Voice Call')}
                      </Link>
                      <Link href='' className='hover:!bg-hover-1'>
                        <IoVideocamOutline className='text-xl' />
                        {t('Video Call')}
                      </Link>
                    </>
                  )}
                  <Link href='' className='hover:!bg-hover-1'>
                    <IoChatboxEllipsesOutline className='text-xl' />
                    {t('Message')}
                  </Link>
                  <Link href='' className='hover:!bg-hover-1'>
                    <IoFlagOutline className='text-xl' /> {t('Report')}
                  </Link>
                  <Link href='' className='hover:!bg-hover-1'>
                    <IoShareOutline className='text-xl' />
                    {t('Share profile')}
                  </Link>
                  <hr />
                  <Link href='' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                    <IoStopCircleOutline className='text-xl' /> {t('Block')}
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </div>

        <nav className='-mb-px flex rounded-xl text-[15px] font-medium'>
          <Tabs
            id='tabs-profile'
            idTab='main-tabs'
            navClassName='!pt-0 !rounded-sm'
            disableChevron
            active={tab}>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('timeline'))}>
              {t('Timeline')}
            </TabTitle>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('friends'))}>
              {t('Friends')}
            </TabTitle>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('series'))}>
              {t('Series')}
            </TabTitle>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('photos'))}>
              {t('Photos')}
            </TabTitle>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('repositories'))}>
              {t('Repositories')}
            </TabTitle>
            <TabTitle
              className='!rounded-sm hover:bg-hover-1'
              onClick={() => router.replace(pathname + '?' + createQueryString('communities'))}>
              {t('Communities')}
            </TabTitle>
          </Tabs>
        </nav>
      </div>
    </div>
  );
}
