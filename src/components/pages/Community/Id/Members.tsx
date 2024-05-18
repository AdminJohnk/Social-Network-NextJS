'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { getImageURL } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import HoverUser from '@/components/shared/Post/HoverUser';
import { Link, useRouter } from '@/navigation';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { useDeleteMemberCommunity, usePromoteAdminCommunity, useRevokeAdminCommunity } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IMembersProps {
  communityID: string;
}

export default function Members({ communityID }: IMembersProps) {
  const t = useTranslations();
  const router = useRouter();
  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  const { mutateDeleteMemberCommunity, isLoadingDeleteMemberCommunity } = useDeleteMemberCommunity();
  const { mutatePromoteAdminCommunity, isLoadingPromoteAdminCommunity } = usePromoteAdminCommunity();
  const { mutateRevokeAdminCommunity, isLoadingRevokeAdminCommunity } = useRevokeAdminCommunity();

  const members = useMemo(() => community && community.members, [community]);

  const { currentUserInfo } = useCurrentUserInfo();

  const isAdmin = useMemo(() => community && community.admins.some((admin) => admin._id === currentUserInfo._id), [community, community?.admins]);

  const isCreator = useMemo(() => community && community.creator._id === currentUserInfo._id, [community, community?.creator._id]);

  type MemberRole = 'Creator' | 'Admin' | 'Member';

  const memberRole = (userID: string): MemberRole => {
    if (community && community.creator._id === userID) return 'Creator';
    if (community && community.admins.some((admin) => admin._id === userID)) return 'Admin';
    return 'Member';
  }

  const [isUserSelected, setIsUserSelected] = useState<string>();

  const handleDeleteMember = (userID: string) => {
    setIsUserSelected(userID);
    mutateDeleteMemberCommunity({ communityID, userID },
      {
        onSuccess: () => {
          showSuccessToast(t('You have successfully removed the member!'));
        },
        onError: (error) => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsUserSelected(undefined);
        }
      }
    );
  }

  const handlePromoteAdmin = (userID: string) => {
    setIsUserSelected(userID);
    mutatePromoteAdminCommunity({ communityID, userID },
      {
        onSuccess: () => {
          showSuccessToast(t('You have successfully promoted the member!'));
        },
        onError: (error) => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsUserSelected(undefined);
        }
      }
    );
  }

  const handleRevokeAdmin = (userID: string) => {
    setIsUserSelected(userID);
    mutateRevokeAdminCommunity({ communityID, userID },
      {
        onSuccess: () => {
          showSuccessToast(t('You have successfully revoked the admin!'));
        },
        onError: (error) => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsUserSelected(undefined);
        }
      }
    );
  }


  return (
    <div className='bg-foreground-1 shadow-lg rounded-xl p-6 max-md:p-2 mt-8 mb-2'>
      {isLoadingCommunity ? (
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <h2 className='text-lg font-semibold'>{members?.length} Members</h2>
          <div className='mt-4 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-2'>
            {members && members.map((member) => (
              <div className='flex-center' key={member._id}>
                <div className="flex justify-between items-center rounded-lg bg-foreground-2 w-full p-2">
                  <div className='flex items-center gap-2'>
                    <HoverUser user={member}>
                      <div
                        className='cursor-pointer rounded-full'
                        onClick={() => router.push(`/profile/${member._id}`)}>
                        <AvatarMessage user={member} size={64} />
                      </div>
                    </HoverUser>
                    <div>
                      <HoverUser user={member}>
                        <Link href={`profile/${member._id}`} className="text-lg font-semibold hover:underline cursor-pointer">{member.name}</Link>
                      </HoverUser>
                      <div className="flex items-center mt-1">
                        <span className="ml-1 text-sm text-gray-400">
                          {memberRole(member._id)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="max-md:flex-col max-md:space-y-1 flex 2xl:space-x-2">
                    {(isAdmin || isCreator) && memberRole(member._id) === 'Member' && (<>
                      <Button
                        disabled={isLoadingDeleteMemberCommunity && isUserSelected === member._id}
                        variant={'destructive'}
                        onClick={() => handleDeleteMember(member._id)}>
                        {t('Remove')}
                      </Button>

                      <Button
                        disabled={isLoadingPromoteAdminCommunity && isUserSelected === member._id}
                        onClick={() => handlePromoteAdmin(member._id)} >
                        {isLoadingPromoteAdminCommunity && isUserSelected === member._id && <CircularProgress size={20} className='!text-text-1 mr-2' />}
                        {t('Promote Admin')}
                      </Button>
                    </>)}
                    {isCreator && memberRole(member._id) === 'Admin' && (<>
                      <Button
                        disabled={isLoadingRevokeAdminCommunity && isUserSelected === member._id}
                        onClick={() => handleRevokeAdmin(member._id)}
                        variant={'destructive'}>
                        {t('Revoke Admin')}
                      </Button>
                    </>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
