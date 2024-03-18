import { Link } from '@/navigation';
import Image from 'next/image';
import {
  IoAddCircle,
  IoCamera,
  IoChatboxEllipsesOutline,
  IoChevronDown,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoSearch,
  IoShareOutline,
  IoStopCircleOutline,
  IoVideocamOutline
} from 'react-icons/io5';
import { FaCheckCircle, FaPencilAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import NewPost from '@/components/shared/NewPost/NewPost';
import { TabTitle, Tabs, TabsContent } from '@/components/ui/tabs';
import Intro from '@/components/pages/Profile/Intro';
import Friends from '@/components/pages/Profile/Friends';
import GroupsYouManage from '@/components/pages/Profile/GroupsYouManage';

export interface IProfileProps {
  params: { slug: string; locale: string };
}

export default function Profile({ params: { slug, locale } }: IProfileProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const isFriend = slug === 'friend';
  const isMe = slug === 'me';
  const friendName = slug === 'friend' ? 'Monroe Parker' : '';

  return (
    <main className='ms-60 max-lg:ms-0 mt-16'>
      {/* <main id="site__main" className="2xl:ml-[--w-side]  xl:ml-[--w-side-sm] p-2.5 h-[calc(100vh-var(--m-top))] mt-[--m-top]"> */}

      <div className='max-w-[1065px] mx-auto'>
        {/* <!-- cover  --> */}
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl'>
          {/* <!-- cover --> */}
          <div className='relative overflow-hidden w-full lg:h-72 h-48'>
            <Image
              width={1000}
              height={1000}
              src='/images/avatars/profile-cover.jpg'
              alt=''
              className='h-full w-full object-cover inset-0'
            />

            {/* <!-- overlay --> */}
            <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 z-10'></div>

            {isMe && (
              <div className='absolute bottom-0 right-0 m-4 z-20'>
                <div className='flex items-center gap-3'>
                  <button className='button bg-white/20 text-white flex items-center gap-2 backdrop-blur-sm'>
                    {t('Crop')}
                  </button>
                  <button className='button bg-black/10 text-white flex items-center gap-2 backdrop-blur-sm'>
                    {t('Edit')}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* <!-- user info --> */}
          <div className='p-3'>
            <div className='flex flex-col justify-center md:items-center lg:-mt-48 -mt-28'>
              <div className='relative lg:h-48 lg:w-48 w-28 h-28 mb-4 z-10'>
                <div className='relative overflow-hidden rounded-full md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900 shadow'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/avatars/avatar-6.jpg'
                    alt=''
                    className='h-full w-full object-cover inset-0'
                  />
                </div>
                {isMe && (
                  <button
                    type='button'
                    className='absolute -bottom-3 left-1/2 -translate-x-1/2 bg-hover-1 shadow p-1.5 rounded-full sm:flex hidden'>
                    <IoCamera className='text-2xl md hydrated' aria-label='camera' />
                  </button>
                )}
              </div>
              <h3 className='md:text-3xl text-base font-bold text-text-1'> Monroe Parker </h3>
              <p className='mt-2 text-gray-500 dark:text-white/80'>
                Family , Food , Fashion , Forever
                {isMe && (
                  <Link href='#' className='text-blue-500 ml-4 inline-block'>
                    {t('Edit')}
                  </Link>
                )}
              </p>
              <p className='mt-2 max-w-xl text-sm md:font-normal font-light text-center'>
                I love beauty and emotion. 🥰 I’m passionate about photography and learning. 📚 I explore
                genres and styles. 🌈 I think photography is storytelling. 😊
              </p>
            </div>
          </div>

          {/* <!-- navigation --> */}
          <div
            className='flex items-center justify-between mt-3 border-t border-gray-100 px-2 max-lg:flex-col dark:border-slate-700'
            data-uk-sticky='offset:50; cls-active: bg-foreground-1 shadow rounded-b-2xl z-50 backdrop-blur-xl  animation:uk-animation-slide-top ; media: 992'>
            <div className='flex items-center gap-2 text-sm py-2 pr-1 max-md:w-full lg:order-2'>
              {isMe && (
                <button className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-2 text-white py-2 px-3.5 max-md:flex-1'>
                  <FaPencilAlt className='text-lg' />
                  <span className='text-sm'> {t('Edit Profile')} </span>
                </button>
              )}
              {!isFriend && !isMe && (
                <button className='button bg-blue-1 hover:bg-blue-2 flex items-center gap-2 text-white py-2 px-3.5 max-md:flex-1'>
                  <IoAddCircle className='text-xl' />
                  <span className='text-sm'> {t('Add Friend')} </span>
                </button>
              )}
              {isFriend && (
                <div>
                  <button className='button bg-foreground-2 hover:bg-hover-2 flex items-center gap-2 text-text-1 py-2 px-3.5 max-md:flex-1'>
                    <FaCheckCircle className='text-xl' />
                    <span className='text-sm text-text-1'> {t('Friend')} </span>
                  </button>
                  <div
                    className='w-[240px] !bg-foreground-1'
                    data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                    <nav>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('Unfriend')}
                      </Link>
                    </nav>
                  </div>
                </div>
              )}

              <button type='submit' className='rounded-lg bg-foreground-2 flex px-2.5 py-2 hover:bg-hover-2'>
                <IoSearch className='text-xl' />
              </button>

              <div>
                <button
                  type='submit'
                  className='rounded-lg bg-foreground-2 hover:bg-hover-2 flex px-2.5 py-2'>
                  <IoEllipsisHorizontal className='text-xl' />
                </button>
                <div
                  className='w-[240px] !bg-foreground-1 hidden'
                  data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                  {isMe ? (
                    <nav>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('Activity Log')}
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('Archive')}
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('More')}
                      </Link>
                      <hr />
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('Settings & Privacy')}
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        {t('Help & Support')}
                      </Link>
                    </nav>
                  ) : (
                    <nav>
                      {isFriend && (
                        <>
                          <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                            <FiPhone className='text-xl' /> {t('Voice Call')}
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                            <IoVideocamOutline className='text-xl' /> {t('Video Call')}
                          </Link>
                        </>
                      )}
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        <IoChatboxEllipsesOutline className='text-xl' /> {t('Message')}
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        <IoFlagOutline className='text-xl' /> {t('Report')}
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        <IoShareOutline className='text-xl' /> {t('Share profile')}
                      </Link>
                      <hr />
                      <Link href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                        <IoStopCircleOutline className='text-xl' /> {t('Block')}
                      </Link>
                    </nav>
                  )}
                </div>
              </div>
            </div>

            <nav className='flex rounded-xl -mb-px font-medium text-[15px] max-md:w-full max-md:overflow-x-auto max-md:custom-scrollbar-fg'>
              <Tabs id='tabs-profile' navClassName='!pt-0 !rounded-sm' disableChevron>
                <TabTitle className='hover:bg-hover-1 !rounded-sm'>{t('Timeline')}</TabTitle>
                <TabTitle className='hover:bg-hover-1 !rounded-sm'>{t('Friends')}</TabTitle>
                <TabTitle className='hover:bg-hover-1 !rounded-sm'>{t('Photos')}</TabTitle>
                <TabTitle className='hover:bg-hover-1 !rounded-sm'>{t('Videos')}</TabTitle>
                <TabTitle className='hover:bg-hover-1 !rounded-sm'>{t('Groups')}</TabTitle>
              </Tabs>

              {/* <!-- dropdown --> */}
              <div>
                <Link
                  href='#'
                  className='font-semibold hover:bg-hover-1 hover:text-blue-400 hover:rounded-sm inline-flex items-center gap-2 p-3 leading-8 -ml-2 select-none'>
                  {t('More')}
                  <IoChevronDown />
                </Link>
                <div
                  className='md:w-[240px] w-screen !bg-foreground-1 hidden'
                  data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:-4'>
                  <nav className='text-[15px]'>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Likes')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Music')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Events')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Books')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Reviews given')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Groups')}
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      {t('Manage Sections')}
                    </Link>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <TabsContent id='tabs-profile' className='!border-none'>
          {/* List post */}
          <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='js-oversized'>
            {/* <!-- feed story --> */}

            <div className='flex-1 xl:space-y-6 space-y-3'>
              {/* <!-- add story --> */}
              <NewPost title={isMe ? '' : t('Write some thing for') + ' ' + friendName + '...'} />

              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <PostSkeleton />
            </div>

            {/* <!-- sidebar --> */}

            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'>
                <Intro isMe={isMe} />

                <Friends />

                {/* <!-- Groups You Manage  --> */}
                <GroupsYouManage />

                {/* <!-- Groups You Manage  --> */}
                <div className='bg-white rounded-xl shadow p-5 px-6 border1 dark:bg-background-2'>
                  <div className='flex items-baseline justify-between text-text-1'>
                    <h3 className='font-bold text-base'> {t('Suggested Manage')} </h3>
                    <Link href='#' className='text-sm text-blue-500'>
                      {t('See all')}
                    </Link>
                  </div>

                  <div className='mt-5'>
                    <div className='flex items-center space-x-3 my-3'>
                      <Link href='#'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='h-10 w-10 rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='#'>
                          <h4 className='text-sm leading-5 font-bold text-text-1'> John Michael</h4>
                        </Link>
                        <div className='mt-0.5 text-xs leading-4 text-text-2'>
                          {t('Updated xx week ago', { count: 7 })}
                        </div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 text-white'>{t('Like')}</button>
                    </div>
                    <div className='flex items-center space-x-3 my-3'>
                      <Link href='#'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='h-10 w-10 rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='#'>
                          <h4 className='text-sm leading-5 font-bold text-text-1'> Martin Gray</h4>
                        </Link>
                        <div className='mt-0.5 text-xs leading-4 text-text-2'>
                          {t('Updated xx week ago', { count: 4 })}
                        </div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 text-white'>{t('Like')}</button>
                    </div>
                    <div className='flex items-center space-x-3 my-3'>
                      <Link href='#'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='h-10 w-10 rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='#'>
                          <h4 className='text-sm leading-5 font-bold text-text-1'> Monroe Parker</h4>
                        </Link>
                        <div className='mt-0.5 text-xs leading-4 text-text-2'>
                          {t('Updated xx month ago', { count: 2 })}
                        </div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 text-white'>{t('Like')}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List friend */}
          <div></div>

          {/* List photo */}
          <div></div>

          {/* List video */}
          <div></div>

          {/* List group */}
          <div></div>
        </TabsContent>
      </div>
    </main>
  );
}
