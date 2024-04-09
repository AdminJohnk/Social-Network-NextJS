'use client';

import { useUserPostsData } from '@/hooks/query';
import Friends from './Friends';
import GroupsYouManage from './GroupsYouManage';
import Intro from './Intro';
import SideSkeleton from '@/components/shared/SideSkeleton';

interface ProfileSideProps {
  profileID: string;
}

export default function ProfileSide({ profileID }: ProfileSideProps) {
  const { isLoadingUserPosts } = useUserPostsData(profileID);

  return (
    <>
      {isLoadingUserPosts ? (
         <SideSkeleton />
      ) : (
        <div className='lg:w-[400px]'>
          <div
            className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
            data-uk-sticky='media: 1024; end: #profile-side; offset: 80'>
            <Intro profileID={profileID} />
            <Friends />
            <GroupsYouManage />
          </div>
        </div>
      )}
    </>
  );
}
