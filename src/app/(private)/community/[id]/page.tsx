import Image from 'next/image';
import {
  IoAddOutline,
  IoChatbubbleEllipsesOutline,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoLinkOutline,
  IoPricetagOutline,
  IoShareOutline,
  IoStopCircleOutline
} from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import NewPost from '@/components/NewPost/NewPost';
import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import About from '@/components/pages/Community/About';
import RecentMedia from '@/components/pages/Community/RecentMedia';
import SuggestGroup from '@/components/pages/Community/SuggestGroup';

import { TabTitle, Tabs, TabsContent } from '@/components/ui/tabs';

export interface ICommunityProps {}

export default function Community(props: ICommunityProps) {
  return (
    // <main id="site__main" className="2xl:ml-[--w-side]  xl:ml-[--w-side-sm] p-2.5 h-[calc(100vh-var(--m-top))] mt-[--m-top]">
    <main className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        {/* <!-- cover  --> */}
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl lg:-mt-10 '>
          {/* <!-- cover --> */}
          <div className='relative overflow-hidden w-full lg:h-72 h-36'>
            <Image
              width={1500}
              height={1000}
              src='/images/group/group-cover-1.jpg'
              alt=''
              className='h-full w-full object-cover inset-0'
            />

            {/* <!-- overly --> */}
            <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from -black/60 pt-10 z-10'></div>

            <div className='absolute bottom-0 right-0 m-4 z-20'>
              <div className='flex items-center gap-3'>
                <button className='button bg-white/20 text-white flex items-center gap-2 backdrop-blur-sm'>
                  Crop
                </button>
                <button className='button bg-black/10 text-white flex items-center gap-2 backdrop-blur-sm'>
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className='lg:px-10 md:p-5 p-3'>
            <div className='flex flex-col justify-center'>
              <div className='flex lg:items-center justify-between max-md:flex-col'>
                <div className='flex-1'>
                  <h3 className='md:text-2xl text-base font-bold text-text-1'> Friends Forever </h3>
                  <p className=' font-normal text-gray-500 mt-2 flex gap-2 flex-wrap dark:text-white/80'>
                    <span className='max-lg:hidden'> Public group </span>
                    <span className='max-lg:hidden'> • </span>
                    <span>
                      {' '}
                      <b className='font-medium text-text-1'>1.2K</b> likes{' '}
                    </span>
                    <span className='max-lg:hidden'> • </span>
                    <span>
                      {' '}
                      <b className='font-medium text-text-1'>1.4K</b> followers{' '}
                    </span>
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-2 mt-1'>
                    <div className='flex -space-x-4 mr-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                      />
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                      />
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-7.jpg'
                        alt=''
                        className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                      />
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-4.jpg'
                        alt=''
                        className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                      />
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-5.jpg'
                        alt=''
                        className='w-10 rounded-full border-4 border-white dark:border-slate-800'
                      />
                    </div>
                    <button className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-1 py-2 px-3.5 shadow ml-auto'>
                      <IoAddOutline className='text-xl' />
                      <span className='text-sm'> Join </span>
                    </button>
                    <div>
                      <button
                        type='button'
                        className='rounded-lg bg-foreground-2 hover:bg-hover-2 flex px-2.5 py-2'>
                        <IoEllipsisHorizontal className='text-xl' />
                      </button>
                      <div
                        className='w-[240px]'
                        data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                        <nav>
                          <Link href='#' className='hover:!bg-hover-1'>
                            {' '}
                            <IoPricetagOutline className='text-xl' /> Unfollow{' '}
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1'>
                            {' '}
                            <IoShareOutline className='text-xl' /> Share{' '}
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1'>
                            {' '}
                            <IoLinkOutline className='text-xl' /> Copy link{' '}
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1'>
                            {' '}
                            <IoChatbubbleEllipsesOutline className='text-xl' /> Sort comments{' '}
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1'>
                            {' '}
                            <IoFlagOutline className='text-xl' /> Report group
                          </Link>
                          <hr />
                          <Link href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                            {' '}
                            <IoStopCircleOutline className='text-xl' /> Block{' '}
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between  border-t border-gray-100 px-2 dark:border-slate-700'>
            <nav className='flex gap-0.5 rounded-xl overflow-hidden -mb-px text-gray-500 font-medium text-sm overflow-x-auto dark:text-white'>
              <Tabs id='tabs-community' navClassName='!pt-0'>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Discussion</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Files</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Photos</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Event</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Video</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Members</TabTitle>
                <TabTitle className='hover:!bg-hover-1 rounded-sm'>Media</TabTitle>
              </Tabs>
            </nav>
            <div className='flex items-center gap-1 text-sm p-3 bg-foreground-2 py-2 mr-2 rounded-xl max-md:hidden'>
              <FaSearch className='text-lg' />
              <input placeholder='Search ..' className='!bg-transparent' />
            </div>
          </div>
        </div>

        <TabsContent id='tabs-community' className='mt-4 !border-none'>
          <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='js-oversized'>
            {/* <!-- feed story --> */}
            <div className='flex-1 xl:space-y-6 space-y-3'>
              {/* <!-- add story --> */}
              <NewPost />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <PostSkeleton />
            </div>
            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'>
                {/* <!-- group info --> */}
                <About />
                {/* <!-- group media  --> */}
                <RecentMedia />

                {/* <!-- related group  --> */}
                <SuggestGroup />
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </main>
  );
}
