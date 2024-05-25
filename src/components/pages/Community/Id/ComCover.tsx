'use client';

import Image from 'next/image';
import {
  IoAddOutline,
  IoChatbubbleEllipsesOutline,
  IoCheckmarkOutline,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoLinkOutline,
  IoPricetagOutline,
  IoShareOutline,
  IoStopCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { MdPublic } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import { TabTitle, Tabs } from '@/components/ui/tabs';
import { FaPencilAlt, FaSearch } from 'react-icons/fa';
import { Link, usePathname, useRouter } from '@/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import Modal from '@/components/shared/Modal';
import { cn, getImageURL } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { imageService } from '@/services/ImageService';
import CreateEditCommunity from '../CreateEditCommunity';
import { notFound, useSearchParams } from 'next/navigation';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCancelJoinCommunity, useDeleteImage, useJoinCommunity, useLeaveCommunity, useUpdateCommunity } from '@/hooks/mutation';

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

  const { community, isLoadingCommunity, isErrorCommunity } = useGetCommunityByID(communityID);
  const { mutateJoinCommunity, isLoadingJoinCommunity } = useJoinCommunity();
  const { mutateCancelJoinCommunity, isLoadingCancelJoinCommunity } = useCancelJoinCommunity();
  const { mutateLeaveCommunity, isLoadingLeaveCommunity } = useLeaveCommunity();
  const { mutateUpdateCommunity } = useUpdateCommunity();
  const { mutateDeleteImage } = useDeleteImage();

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
        case 'photos':
          return 2;
        case 'events':
          return 3;
        case 'members':
          return 4;
        default:
          return 0;
      }
    else
      switch (tabParam) {
        case 'photos':
          return 1;
        case 'events':
          return 2;
        case 'members':
          return 3;
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
    mutateLeaveCommunity(communityID, {
      onError: () => {
        showErrorToast(t('Something went wrong! Please try again!'));
      }
    });
  };

  const [cover, setCover] = useState('/images/avatars/profile-cover.jpg');
  const [fileCover, setFileCover] = useState<File>();
  const [isLoadingUpdateImage, setIsLoadingUpdateImage] = useState(false);

  const handleCoverImage = useCallback((image: File) => {
    if (!image) return;
    setCover(URL.createObjectURL(image));
    setFileCover(image);
  }, []);

  useEffect(() => {
    if (community?.image) {
      setCover(getImageURL(community.image));
    }
  }, [community]);

  const handleUploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await imageService.uploadImage(formData);
    return {
      url: data.metadata,
      status: 'done'
    };
  };

  const handleUpdateImageCommunity = async () => {
    setIsLoadingUpdateImage(true);
    const formData = new FormData();
    if (fileCover) {
      const res = await handleUploadImage(fileCover);
      formData.append('image', res.url.key);
    }

    const oldCover = community.image;

    mutateUpdateCommunity({ id: communityID, image: formData.get('image')?.toString() }, {
      onSuccess() {
        showSuccessToast(t("Your community's image has been updated successfully!"));
        fileCover && mutateDeleteImage([oldCover]);
        setFileCover(undefined);
        setIsLoadingUpdateImage(false);
      },
      onError() {
        showErrorToast(t('Something went wrong! Please try again!'));
        setIsLoadingUpdateImage(false);
      }
    });
  }

  const [open, setOpen] = useState(false);

  if (isErrorCommunity) {
    notFound();
  }

  return (
    <>
      {isLoadingCommunity ? (
        <div className='flex-center p-8'>
          <CircularProgress size={40} className='!text-text-1' />
        </div>
      ) : (
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl lg:-mt-10 '>
          <div className='relative overflow-hidden w-full lg:h-72 h-36'>
            <Image
              width={1500}
              height={1000}
              src={cover}
              alt='cover'
              className='h-full w-full object-cover inset-0'
              priority
            />

            <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from -black/60 pt-10 z-10'></div>

            {isCreator && (<div className='absolute bottom-0 right-0 m-4 z-20'>
              <div className='flex items-center gap-3'>
                {!fileCover ? (
                  <label htmlFor='cover_image' className='cursor-pointer'>
                    <div className='button bg-black/10 text-white flex items-center gap-2 backdrop-blur-sm'>
                      {t('Edit')}
                    </div>
                    <input
                      type='file'
                      id='cover_image'
                      className='hidden'
                      accept='image/*'
                      disabled={isLoadingUpdateImage}
                      onChange={(e) => handleCoverImage(e.currentTarget.files?.[0]!)}
                    />
                  </label>
                ) : (
                  <>
                    <Button
                      variant={'destructive'}
                      onClick={() => {
                        setCover(
                          getImageURL(community.image) || '/images/avatars/profile-cover.jpg'
                        );
                        setFileCover(undefined);
                      }}
                      className='button'
                      disabled={isLoadingUpdateImage}>
                      {t('Cancel')}
                    </Button>
                    <Button
                      onClick={handleUpdateImageCommunity}
                      className={cn('button', isLoadingUpdateImage && 'select-none')}
                      disabled={isLoadingUpdateImage}>
                      {isLoadingUpdateImage && <CircularProgress size={15} className='!text-text-1 mr-2' />}
                      {t('Save')}
                    </Button>
                  </>
                )}
              </div>
            </div>
            )}
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
                          if (!isMember && !isRequested) {
                            mutateJoinCommunity(communityID, {
                              onError: () => {
                                showErrorToast(t('Something went wrong! Please try again!'));
                              }
                            });
                          }
                          if (isRequested) {
                            mutateCancelJoinCommunity(communityID, {
                              onError: () => {
                                showErrorToast(t('Something went wrong! Please try again!'));
                              }
                            });
                          }
                          if (isCreator) {
                            setOpen(true);
                          }
                        }}
                        className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-1 py-2 px-3.5 shadow ml-auto'>
                        {!isCreator ? (
                          isMember ? (
                            <>
                              {isLoadingLeaveCommunity ? (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              ) : (
                                <IoCheckmarkOutline className='text-xl' />
                              )}
                              <span className='text-sm'> {t('Joined')} </span>
                            </>
                          ) : isRequested ? (
                            <>
                              {isLoadingCancelJoinCommunity ? (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              ) : (
                                <FaXmark className='text-xl' />
                              )}
                              <span>{t('Cancel Request')}</span>
                            </>
                          ) : (
                            <>
                              {isLoadingJoinCommunity ? (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              ) : (
                                <IoAddOutline className='text-xl' />
                              )}
                              <span className='text-sm'> {t('Join')} </span>
                            </>
                          )
                        ) : (
                          <>
                            <FaPencilAlt className='text-lg' />
                            <span className='text-sm'> {t('Edit')} </span>
                          </>
                        )}
                      </button>
                      <Modal open={open} handleClose={() => setOpen(false)}>
                        <CreateEditCommunity handleClose={() => setOpen(false)} dataEdit={community} />
                      </Modal>
                      {isMember && !isCreator && (
                        <div
                          className='!w-fit'
                          data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                          <Button variant={'destructive'} onClick={() => setOpenLeaveCommunity(true)}>
                            {t('Leave Community')}
                          </Button>
                          <AlertDialog open={openLeaveCommunity} onOpenChange={setOpenLeaveCommunity}>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  {t('Are you absolutely sure leave this community?')}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  {t(
                                    'You will not be able to return to the group until approved by the admin!'
                                  )}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <Button
                                  variant='ghost'
                                  className={cn(isLoadingLeaveCommunity && 'select-none')}
                                  disabled={isLoadingLeaveCommunity}
                                  onClick={() => setOpenLeaveCommunity(false)}>
                                  {t('Cancel')}
                                </Button>
                                <Button
                                  disabled={isLoadingLeaveCommunity}
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
                        className='!w-fit'
                        data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                        <nav>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoPricetagOutline className='text-xl' />
                            {t('Unfollow')}
                          </Link>
                          <Link href='' className='hover:!bg-hover-1'>
                            <IoShareOutline className='text-xl' /> {t('Share')}
                          </Link>
                          <button
                            type='button'
                            onClick={() => {
                              navigator.clipboard.writeText(window.location.href);
                              showSuccessToast(t('Link copied!'));
                            }}
                            className='flex-start p-2 gap-3 rounded-lg w-full hover:!bg-hover-1'>
                            <IoLinkOutline className='text-xl' /> {t('Copy link')}
                          </button>
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
                              <IoTrashOutline className='text-xl' /> {t('Remove your community')}
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
                  onClick={() => router.push(pathname + '?' + createQueryString('members'))}>
                  {t('Members')}
                </TabTitle>
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
