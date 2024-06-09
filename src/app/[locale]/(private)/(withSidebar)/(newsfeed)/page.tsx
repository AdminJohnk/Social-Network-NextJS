import { unstable_setRequestLocale } from 'next-intl/server';

import NewPost from '@/components/shared/NewPost/NewPost';
import Story from '@/components/pages/Home/Story';
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
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='newsfeed px-2 pt-10 lg:px-14 xl:px-20 2xl:px-24'>
        <div className='max-md:hidden'>
          <Story />
        </div>
        <div className='newsfeed-content mt-14 flex w-full max-md:mt-0' id='newsfeed'>
          <div className='post w-4/6 px-9 max-lg:w-full max-md:px-2'>
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
