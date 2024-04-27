import { unstable_setRequestLocale } from 'next-intl/server';

import NewPost from '@/components/shared/NewPost/NewPost';
import Story from '@/components/pages/Home/Story';
import CreateStory from '@/components/pages/Home/CreateStory';
import PostList from '@/components/pages/Home/PostList';
import NewsfeedSide from '@/components/pages/Home/NewsfeedSide';

export interface INewFeedProps {
  params: {
    locale: string;
  };
}

export default function NewFeed({ params: { locale } }: INewFeedProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 mt-16 max-lg:ms-0'>
      <div className='newsfeed px-2 pt-10 2xl:px-32 xl:px-24 lg:px-14'>
        <div className='max-md:hidden'>
          <Story />
          <CreateStory />
        </div>
        <div className='newsfeed-content mt-14 max-md:mt-0 flex w-full' id='newsfeed'>
          <div className='post w-3/5 max-lg:w-full px-9 max-md:px-2'>
            <div className='new-post mb-8'>
              <NewPost />
            </div>
            <PostList />
          </div>
          <NewsfeedSide />
        </div>
      </div>
    </div>
  );
}
