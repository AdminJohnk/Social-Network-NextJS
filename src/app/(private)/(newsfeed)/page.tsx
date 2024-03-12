import NewPost from '@/components/NewPost/NewPost';
import OnlineFriend from '@/components/pages/Home/OnlineFriend';
import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import ProMember from '@/components/pages/Home/ProMember';
import Story from '@/components/pages/Home/Story';
import SuggestFollow from '@/components/pages/Home/SuggestFollow';
import TrendForYou from '@/components/pages/Home/TrendForYou';
import CreateStatus from '@/components/pages/Home/CreateStatus';
import CreateStory from '@/components/pages/Home/CreateStory';

export interface INewFeedProps {}

export default function NewFeed(props: INewFeedProps) {
  return (
    <div className='ms-60 mt-16 max-lg:ms-0'>
      <div className='newsfeed px-2 py-10 2xl:px-32 xl:px-24 lg:px-14'>
        <div className='max-md:hidden'>
          <Story />
          <CreateStory />
        </div>
        <div className='newsfeed-content mt-14 max-md:mt-0 flex w-full' id='newsfeed'>
          <div className='post w-3/5 max-lg:w-full px-9'>
            <div className='new-post mb-8'>
              <CreateStatus />
              <NewPost />
            </div>
            <div className='post *:mb-6'>
              <Post />
              <Post />
              <Post />
            </div>
            <div className='post-skeleton *:mb-6'>
              <PostSkeleton />
            </div>
          </div>
          <div className='more-info w-2/5 max-lg:hidden'>
            <div data-uk-sticky='media: 1024; end: #newsfeed; offset: 80'>
              <div>
                <SuggestFollow />
              </div>
              <div className='mt-6'>
                <OnlineFriend />
              </div>
              <div className='mt-6'>
                <ProMember />
              </div>
              <div className='mt-6'>
                <TrendForYou />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
