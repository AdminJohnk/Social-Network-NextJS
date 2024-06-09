'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { FaCrown, FaUserShield } from 'react-icons/fa6';

import EditCommunity from '../EditCommunity';
import { useCurrentUserInfo, useGetAllCommunitiesYouManage } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Skeleton } from '@mui/material';

export default function ComsYouManage() {
  const t = useTranslations();
  const {
    communitiesYouManage,
    isLoadingCommunitiesYouManage,
    hasNextCommunitiesYouManage,
    fetchNextCommunitiesYouManage
  } = useGetAllCommunitiesYouManage();

  const { currentUserInfo } = useCurrentUserInfo();

  return (
    <div>
      {isLoadingCommunitiesYouManage ? (
        <div className='grid grid-cols-2 gap-2.5 md:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='card'>
              <Skeleton variant='rectangular' width={350} height={100} />
              <div className='card-body'>
                <Skeleton
                  className='!-mt-7 !mb-2 !bg-foreground-2 md:!-mt-11'
                  variant='circular'
                  width={40}
                  height={40}
                />
                <Skeleton className='!bg-foreground-2' variant='text' width={200} />
                <Skeleton className='!bg-foreground-2' variant='text' width={200} />
                <Skeleton className='!bg-foreground-2' variant='text' width={200} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className='grid grid-cols-2 gap-2.5 md:grid-cols-3'
          data-uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'>
          {communitiesYouManage?.map((community) => {
            const isCreator = currentUserInfo._id === community.creator._id;

            const mutualFriends = () => {
              if (!community.members.length) return [];
              return community.members.filter((member) => {
                return currentUserInfo.friends.findIndex((f) => f._id === member._id) !== -1;
              });
            };

            return (
              <div key={community._id} className='card'>
                <Link href={`/community/${community._id}`}>
                  <div className='card-media h-24'>
                    <Image width={500} height={500} src={getImageURL(community.image)} alt='image' priority />
                    <div className='card-overlay'></div>
                  </div>
                </Link>
                <div className='card-body relative z-10'>
                  <Link href={`/profile/${community.creator._id}`}>
                    <Image
                      width={500}
                      height={500}
                      src={getImageURL(community.creator.user_image, 'avatar')}
                      alt='avatar'
                      className='relative -mt-7 mb-2 size-10 rounded-full border-2 border-white shadow md:-mt-11'
                      priority
                    />
                  </Link>
                  <Link className='flex-start gap-2' href={`/community/${community._id}`}>
                    <h4 className='card-title line-clamp-1'>{community.name}</h4>
                  </Link>
                  <div className='flex-start gap-1.5 text-text-2'>
                    {isCreator ? <FaCrown /> : <FaUserShield />}
                    {isCreator ? t('Community Creator') : t('Administrator')}
                  </div>
                  <div className='card-text mt-1'>
                    <div className='flex flex-wrap items-center space-x-1'>
                      <span>
                        {community.members.length} {t('members')}
                      </span>
                    </div>
                  </div>
                  <div className='mt-3 flex items-center gap-3'>
                    <div className='flex -space-x-2'>
                      {mutualFriends()
                        .slice(0, 3)
                        .map((friend) => (
                          <Image
                            key={friend._id}
                            width={500}
                            height={500}
                            src={getImageURL(friend.user_image)}
                            alt={friend.name}
                            className='size-6 rounded-full border-border-1'
                          />
                        ))}
                    </div>
                    <p className='card-text'>
                      {mutualFriends().length}&nbsp;
                      {t('friends have joined', { count: mutualFriends().length })}
                    </p>
                  </div>
                  <div className='relative flex w-full gap-2'>
                    <Link
                      href={`/community/${community._id}`}
                      className='button min-w-fit bg-blue-1 text-center text-white duration-300 hover:bg-blue-2'>
                      {t('View Community')}
                    </Link>
                    {currentUserInfo._id === community.creator._id && <EditCommunity dataEdit={community} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {hasNextCommunitiesYouManage && (
        <div className='my-6 flex justify-center'>
          <button
            type='button'
            className='rounded-full bg-foreground-1 px-5 py-2 text-sm font-semibold shadow-md duration-300 hover:bg-hover-1'
            onClick={() => fetchNextCommunitiesYouManage()}>
            {t('Load more')}...
          </button>
        </div>
      )}
    </div>
  );
}
