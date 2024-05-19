'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import { useCurrentUserInfo, useGetCommunitiesByUserID } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import EditCommunity from './EditCommunity';

export default function ComMineList() {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();

  const { communities, isLoadingCommunities } = useGetCommunitiesByUserID(currentUserInfo._id);

  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
      {isLoadingCommunities ? (
        <>Loading...</>
      ) : (
        communities.map((community) => (
          <div key={community._id} className='card'>
            <Link href={`/community/${community._id}`}>
              <div className='card-media h-24'>
                <Image width={500} height={500} src={getImageURL(community.image)} alt='image' />
                <div className='card-overlay'></div>
              </div>
            </Link>
            <div className='card-body'>
              <Link href={`/community/${community._id}`}>
                <h4 className='card-title'>{community.name}</h4>
              </Link>
              <div className='card-list-info font-normal mt-1'>
                <Link href=''> {t('Health ')} </Link>
                <div className='md:block hidden'>·</div>
                <div>
                  {community.members.length} {t('members')}
                </div>
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
        ))
      )}
      {/* <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> {t('Delicious Foods')} </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href=''> {t('Health ')} </Link>
            <div className='md:block hidden'>·</div>
            <div>42k {t('members')} </div>
          </div>
          <div className='flex gap-2'>
            <button type='button' className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
              {t('Join')}
            </button>
            <button type='button' className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'>
              {t('Edit')}
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
