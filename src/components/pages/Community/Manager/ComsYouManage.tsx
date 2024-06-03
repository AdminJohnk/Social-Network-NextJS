'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { FaCrown, FaUserShield } from 'react-icons/fa6';

import EditCommunity from '../EditCommunity';
import { useCurrentUserInfo, useGetAllCommunitiesYouManage } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { CircularProgress } from '@mui/material';

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
        <div className='flex-center w-full h-full p-5'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <div
          className='grid md:grid-cols-3 grid-cols-2 gap-2.5'
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
                      className='size-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                      priority
                    />
                  </Link>
                  <Link className='flex-start gap-2' href={`/community/${community._id}`}>
                    <h4 className='card-title line-clamp-1'>{community.name}</h4>
                  </Link>
                  <div className='text-text-2 flex-start gap-1.5'>
                    {isCreator ? <FaCrown /> : <FaUserShield />}
                    {isCreator ? t('Community Creator') : t('Administrator')}
                  </div>
                  <div className='card-text mt-1'>
                    <div className='flex items-center flex-wrap space-x-1'>
                      <span>
                        {community.members.length} {t('members')}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 mt-3'>
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
                  <div className='flex gap-2 w-full relative'>
                    <Link
                      href={`/community/${community._id}`}
                      className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white text-center min-w-fit'>
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
        <div className='flex justify-center my-6'>
          <button
            type='button'
            className='bg-foreground-1 hover:bg-hover-1 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm'
            onClick={() => fetchNextCommunitiesYouManage()}>
            {t('Load more')}...
          </button>
        </div>
      )}
    </div>
  );
}
