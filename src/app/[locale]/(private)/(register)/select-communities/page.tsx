'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaUserFriends } from 'react-icons/fa';

import { useRouter } from '@/navigation';
import { cn, getImageURL } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SlideHeader from '@/components/pages/Register/SlideHeader';
import { useCurrentUserInfo, useGetRecommendCommunities } from '@/hooks/query';
import { CircularProgress } from '@mui/material';
import { useCancelJoinCommunity, useJoinCommunity, useLeaveCommunity } from '@/hooks/mutation';
import { showErrorToast } from '@/components/ui/toast';
import { IoAddOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

export interface ISelectCommunitiesProps {
}

export default function SelectCommunities({ }: ISelectCommunitiesProps) {
  const t = useTranslations();
  const router = useRouter();
  const { currentUserInfo } = useCurrentUserInfo();

  const { recommendCommunities, isLoadingRecommendCommunities } = useGetRecommendCommunities(currentUserInfo._id);
  const { mutateJoinCommunity, isLoadingJoinCommunity } = useJoinCommunity();
  const { mutateCancelJoinCommunity, isLoadingCancelJoinCommunity } = useCancelJoinCommunity();
  const { mutateLeaveCommunity, isLoadingLeaveCommunity } = useLeaveCommunity();

  const [openLeaveCommunity, setOpenLeaveCommunity] = useState(false);

  const handleLeaveCommunity = (communityID: string) => {
    setOpenLeaveCommunity(false);
    mutateLeaveCommunity(communityID, {
      onError: () => {
        showErrorToast(t('Something went wrong! Please try again!'));
      }
    });
  };
  const communityArray = [
    {
      groupName: 'Blockchain',
      data: [
        {
          id: 1,
          name: 'Web3Dev',
          image:
            'https://images-platform.99static.com/m0AWL_NkWCDqUhV58lKUMLt1le4=/192x192:1728x1728/500x500/top/smart/99designs-contests-attachments/133/133347/attachment_133347677',
          members: 3508,
          about:
            'Blockchain is a decentralized, distributed, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the collusion of the network.'
        },
        {
          id: 2,
          name: 'Web3 & Blockchains',
          image:
            'https://img.freepik.com/premium-vector/blockchain-line-icon-logo-concept-dark-background_516670-196.jpg',
          members: 3648,
          about: 'Resource about Web3 and Blockchains development, design, and business.'
        }
      ]
    },
  ];

  return (
    <div>
      <SlideHeader step={3} />
      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Here are some relevant communities for you')}.</span>

        <div className='*:mt-4'>
          {isLoadingRecommendCommunities ? (
            <div className='flex justify-center items-center'>
              <div className='flex flex-col items-center'>
                <CircularProgress />
                <span className='mt-4'>Loading...</span>
              </div>
            </div>
          ) : communityArray.map((item, index) => (
            <div key={index}>
              {/* <span className='font-semibold'>{item.groupName}</span> */}
              <div className='flex flex-wrap gap-4 mt-2'>
                {recommendCommunities.map((comInfo, index) => {
                  const isMember = comInfo.members.some((member) => member._id === currentUserInfo._id);
                  const isRequested = comInfo.waitlist_users.some((request) => request._id === currentUserInfo._id);

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
                          <div className='join-community-button'>
                            <button
                              onClick={() => {
                                if (!isMember && !isRequested) {
                                  mutateJoinCommunity(comInfo._id, {
                                    onError: () => {
                                      showErrorToast(t('Something went wrong! Please try again!'));
                                    }
                                  });
                                }
                                if (isRequested) {
                                  mutateCancelJoinCommunity(comInfo._id, {
                                    onError: () => {
                                      showErrorToast(t('Something went wrong! Please try again!'));
                                    }
                                  });
                                }
                              }}
                              className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-1 py-2 px-3.5 shadow ml-auto'>
                              {
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
                              }
                            </button>
                            {isMember && (
                              <div
                                className='!w-fit'
                                data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                                <Button
                                  variant={'destructive'}
                                  onClick={() => setOpenLeaveCommunity(true)}
                                  className='uk-drop-close'>
                                  {t('Leave Community')}
                                </Button>
                                <AlertDialog open={openLeaveCommunity} onOpenChange={setOpenLeaveCommunity}>
                                  <AlertDialogContent className='max-w-xl'>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        {t('Are you absolutely sure leave this community?')}
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        {t(
                                          'You will not be able to return to the community until approved by the admin!'
                                        )}
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <Button
                                        variant='outline'
                                        className={cn(isLoadingLeaveCommunity && 'select-none')}
                                        disabled={isLoadingLeaveCommunity}
                                        onClick={() => setOpenLeaveCommunity(false)}>
                                        {t('Cancel')}
                                      </Button>
                                      <Button
                                        disabled={isLoadingLeaveCommunity}
                                        variant={'destructive'}
                                        onClick={() => handleLeaveCommunity(comInfo._id)}>
                                        {t('Leave')}
                                      </Button>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className='mt-2 flex justify-end p-4'>
            <div className='*:mr-2'>
              <Button variant={'ghost'} onClick={() => router.push('/select-interest')}>{t('Back')}</Button>
              <Button onClick={() => router.push('/follow-people')} >{t('Continue')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
