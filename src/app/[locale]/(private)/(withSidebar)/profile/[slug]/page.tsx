'use client';

import { useTranslations } from 'next-intl';
import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import NewPost from '@/components/shared/NewPost/NewPost';
import CreateStatus from '@/components/pages/Home/CreateStatus';
import { TabsContent } from '@/components/ui/tabs';
import Intro from '@/components/pages/Profile/Intro';
import Friends from '@/components/pages/Profile/Friends';
import GroupsYouManage from '@/components/pages/Profile/GroupsYouManage';
import Cover from '@/components/pages/Profile/Cover';
import PostsList from '@/components/pages/Profile/PostsList';

export interface IProfileProps {
  params: { slug: string };
}

export default function Profile({ params: { slug } }: IProfileProps) {
  const t = useTranslations();

  const isFriend = slug === 'friend';
  const isMe = slug === 'me';
  const friendName = slug === 'friend' ? 'Monroe Parker' : '';

  return (
    <div className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl'>
          <Cover isFriend={isFriend} isMe={isMe} />
        </div>

        <TabsContent id='tabs-profile' className='!border-none'>
          <div
            className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse'
            id='profile-side'
          >
            <div className='flex-1 xl:space-y-6 space-y-3'>
              <NewPost
                title={
                  isMe
                    ? ''
                    : t('Write some thing for') + ' ' + friendName + '...'
                }
              />
              <CreateStatus />
              <PostsList />
              <PostSkeleton />
            </div>

            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #profile-side; offset: 80'
              >
                <Intro isMe={isMe} />
                <Friends />
                <GroupsYouManage />
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </div>
  );
}
