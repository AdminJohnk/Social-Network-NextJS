/* eslint-disable @next/next/no-img-element */
'use client';

import {
  IoCameraOutline,
  IoPlayOutline,
  IoPricetagsOutline,
  IoHappy,
  IoTimeOutline,
  IoNotificationsOffOutline,
  IoHeartOutline,
  IoHeartCircle,
  IoAddCircle,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipses,
  IoStopCircleOutline,
  IoShareOutline,
  IoFlagOutline,
  IoEllipsisHorizontal,
  IoBookmarkOutline,
  IoChevronForwardOutline,
  IoChevronBack,
  IoCamera,
} from 'react-icons/io5';
import { FaImage, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

import { Dropdown, Tabs, CustomFlowbiteTheme } from 'flowbite-react';

const customTabsTheme: CustomFlowbiteTheme['tabs'] = {
  tablist: {
    styles: {
      underline: '',
    },
    tabitem: {
      base: 'flex items-center justify-center p-4 rounded-b-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none',
      styles: {
        underline: {
          base: 'border-t-2 border-transparent font-bold',
          active: {
            on: 'text-cyan-600 rounded-b-lg border-t-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500',
            off: 'border-t-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          },
        },
      },
    },
  },
};
const Profile = () => {
  return (
    <>
      <div id='wrapper ms-60 px-40 py-10'>
        <main>
          <div className=''>
            <div className='relative py-6'>
              <div className='flex gap-4 max-md:flex-col md:gap-16'>
                <div className='uk-animation-scale-up relative h-full rounded-full bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md duration-500 hover:scale-110 max-md:w-16 md:p-1'>
                  <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-gray-100 dark:border-slate-900 md:h-40 md:w-40 md:border-[6px]'>
                    <img
                      src='assets/images/avatars/avatar-6.jpg'
                      alt=''
                      className='absolute h-full w-full object-cover'
                    />
                  </div>
                  <button
                    type='button'
                    className='absolute -bottom-2 left-1/2 hidden -translate-x-1/2 rounded-full bg-white p-1.5 shadow sm:flex'
                  >
                    <IoCamera className='text-2xl text-black' />
                  </button>
                </div>
                <div className='max-w-2x flex-1'>
                  <h3 className='text-base font-semibold text-black dark:text-white md:text-xl'>
                    Monroe Parker
                  </h3>

                  <p className='mt-1 text-xs font-normal text-blue-600 sm:text-sm'>
                    @Monroepark
                  </p>

                  <p className='mt-2 text-sm font-light md:font-normal'>
                    I love beauty and emotion. 🥰 I’m passionate about
                    photography and learning. 📚 I explore genres and styles. 🌈
                    I think photography is storytelling. 📖 I hope you like and
                    feel my photos. 😊
                  </p>

                  <p
                    className='mt-2 hidden space-x-2 text-sm text-gray-500'
                    style={{ marginTop: '11px' }}
                  >
                    <Link href='/#' className='inline-block'>
                      Travel
                    </Link>
                    .
                    <Link href='/#' className='inline-block'>
                      Business
                    </Link>
                    .
                    <Link href='/#' className='inline-block'>
                      Technology
                    </Link>
                  </p>

                  <div className='mt-4 flex justify-between gap-4 max-md:flex-col md:mt-8 md:items-end'>
                    <div className='flex gap-6 text-xs max-sm:absolute max-sm:left-36 max-sm:top-10 sm:gap-10 sm:text-sm'>
                      <div>
                        <p>Posts</p>
                        <h3 className='mt-1 text-base font-normal text-black dark:text-white sm:text-xl sm:font-bold'>
                          162
                        </h3>
                      </div>
                      <div>
                        <p>Following</p>
                        <h3 className='mt-1 text-base font-normal text-black dark:text-white sm:text-xl sm:font-bold'>
                          14,260
                        </h3>
                      </div>
                      <div>
                        <p>Followers</p>
                        <h3 className='mt-1 text-base font-normal text-black dark:text-white sm:text-xl sm:font-bold'>
                          8,542
                        </h3>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 text-sm'>
                      <button
                        type='submit'
                        className='button hidden bg-slate-200 text-gray-600'
                      >
                        Follow
                      </button>
                      <button
                        type='button'
                        className='button border border-pink-200 bg-pink-100 text-pink-600'
                      >
                        Unfollow
                      </button>
                      <button
                        type='submit'
                        className='button bg-pink-600 text-white'
                      >
                        Message
                      </button>
                      <Dropdown
                        label=''
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <button className='dark:bg-dark2 flex rounded-lg bg-slate-200/60 px-2 py-1.5'>
                            <IoEllipsisHorizontal className='text-xl' />
                          </button>
                        )}
                      >
                        <div className='w-[240px]'>
                          <Dropdown.Item>
                            <Link href='/#' className='flex items-center gap-1'>
                              <IoPricetagsOutline className=' text-xl' />
                              Unfollow
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href='/#' className='flex items-center gap-1'>
                              <IoTimeOutline className=' text-xl' /> Mute story
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href='/#' className='flex items-center gap-1'>
                              <IoFlagOutline className=' text-xl' /> Report
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href='/#' className='flex items-center gap-1'>
                              <IoShareOutline className=' text-xl' /> Share
                              profile
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item>
                            <Link
                              href='/#'
                              className='flex items-center gap-1 text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                            >
                              <IoStopCircleOutline className='text-xl' /> Block
                            </Link>
                          </Dropdown.Item>
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-10'>
              {/* <!-- sticky tabs --> */}

              <div className='-mb-px flex-wrap border-t border-gray-200 dark:border-gray-700'>
                <Tabs
                  style={'underline'}
                  className='flex justify-center gap-2'
                  theme={customTabsTheme}
                >
                  <Tabs.Item active title='Post' icon={IoCameraOutline}>
                    {/* <!-- highest slider post --> */}
                    <div className='mt-8'>
                      {/* <!-- post heading --> */}
                      <div className='flex items-center justify-between py-3'>
                        <h1 className='text-xl font-bold text-black dark:text-white'>
                          High Lights
                        </h1>

                        <button type='button' className='lg:hidden'>
                          <svg
                            id='icon__outline'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            className='h-6 w-6'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className='relative mt-5' tabIndex={-1}>
                        <div className='overflow-hidden py-10'>
                          <ul className='flex w-[calc(100%+0.875rem)] flex-row'>
                            <li className='w-1/3 pr-3.5 max-lg:hidden sm:w-1/4 lg:w-1/5'>
                              <div className='flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-teal-600'>
                                <IoAddCircle className='text-4xl text-teal-900'></IoAddCircle>
                                <div className='mt-1 font-semibold'>
                                  Add New
                                </div>
                              </div>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <Link
                                href='/assets/images/avatars/avatar-lg-1.jpg'
                                data-caption='Caption'
                              >
                                <div className=' delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                                  <div className='relative aspect-[2.5/4] w-full lg:h-64'>
                                    <img
                                      src='assets/images/avatars/avatar-lg-1.jpg'
                                      className='inset-0 h-full w-full rounded-lg object-cover'
                                      alt=''
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <Link
                                href='/assets/images/avatars/avatar-lg-2.jpg'
                                data-caption='Caption'
                              >
                                <div className=' delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                                  <div className='relative aspect-[2.5/4] w-full lg:h-64'>
                                    <img
                                      src='assets/images/avatars/avatar-lg-2.jpg'
                                      className='inset-0 h-full w-full rounded-lg object-cover'
                                      alt=''
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <Link
                                href='/assets/images/avatars/avatar-lg-3.jpg'
                                data-caption='Caption'
                              >
                                <div className=' delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                                  <div className='relative aspect-[2.5/4] w-full lg:h-64'>
                                    <img
                                      src='assets/images/avatars/avatar-lg-3.jpg'
                                      className='inset-0 h-full w-full rounded-lg object-cover'
                                      alt=''
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <Link
                                href='/assets/images/avatars/avatar-lg-4.jpg'
                                data-caption='Caption'
                              >
                                <div className=' delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                                  <div className='relative aspect-[2.5/4] w-full lg:h-64'>
                                    <img
                                      src='assets/images/avatars/avatar-lg-4.jpg'
                                      className='inset-0 h-full w-full rounded-lg object-cover'
                                      alt=''
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <Link
                                href='/assets/images/avatars/avatar-lg-5.jpg'
                                data-caption='Caption'
                              >
                                <div className=' delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                                  <div className='relative aspect-[2.5/4] w-full lg:h-64'>
                                    <img
                                      src='assets/images/avatars/avatar-lg-5.jpg'
                                      className='inset-0 h-full w-full rounded-lg object-cover'
                                      alt=''
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className='w-1/3 pr-3.5 sm:w-1/4 lg:w-1/5'>
                              <div className='aspect-[2.5/4] w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-64'></div>
                            </li>
                          </ul>
                        </div>

                        <button
                          type='button'
                          className='dark:bg-dark3 absolute -left-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white  shadow'
                          uk-slider-item='previous'
                        >
                          <IoChevronBack className='text-2xl' />
                        </button>
                        <button
                          type='button'
                          className='dark:bg-dark3 absolute -right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white  shadow'
                          uk-slider-item='next'
                        >
                          <IoChevronForwardOutline className='text-2xl' />
                        </button>
                      </div>
                    </div>

                    {/* <!-- Post list --> */}
                    <div>
                      {/* <!-- post list  --> */}

                      <div className='mt-8'>
                        {/* <!-- post heading --> */}
                        <div className='flex items-center justify-between py-3'>
                          <h1 className='text-xl font-bold text-black dark:text-white'>
                            Posts
                          </h1>

                          <Link
                            href='/#'
                            className='flex items-center gap-2 text-sm font-semibold'
                          >
                            Show achieved <IoChevronForwardOutline />
                          </Link>
                        </div>

                        {/* <!-- Post list --> */}
                        <div
                          className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'
                          uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 100'
                        >
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='group transition-all delay-100 duration-500 ease-in-out hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-1.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='absolute inset-0 bg-white/5 opacity-0 backdrop-blur-sm transition-all delay-100 duration-500 ease-in-out group-hover:opacity-100'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-2.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-3.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-4.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-5.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-4.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-1.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-3.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-1.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-3.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-2.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                              <div className='uk-transition-toggle relative overflow-hidden rounded-lg'>
                                <div className='relative aspect-[3/3] h-full w-full lg:h-60'>
                                  <img
                                    src='assets/images/post/post-4.jpg'
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                </div>
                                <div className='uk-transition-fade absolute inset-0 bg-white/5 backdrop-blur-sm'>
                                  <div className='flex h-full w-full items-center justify-center gap-4 text-white'>
                                    <div className='flex items-center gap-2'>
                                      <IoHeartCircle className='text-2xl' /> 152
                                    </div>
                                    <div className='flex items-center gap-2'>
                                      <IoChatbubbleEllipses className='text-2xl' />
                                      290
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                          {/* <!-- placeholders --> */}
                          <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                          <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                          <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                          <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        </div>
                      </div>

                      {/* <!-- load more --> */}
                      <div className='my-6 flex justify-center'>
                        <button
                          type='button'
                          className='dark:bg-dark2 rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-md'
                        >
                          Load more...
                        </button>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item active title='Reels' icon={IoPlayOutline}>
                    {/* <!-- Reels  list --> */}
                    <div className='pt-16'>
                      <div
                        className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 lg:gap-4'
                        uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true'
                      >
                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-1.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 14
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-2.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 24
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-3.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 32
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-4.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 46
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-3.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' />
                                  16
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-4.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 24
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-5.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 38
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-1.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 33
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-1.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 62
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-2.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 42
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-3.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 18
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- single reels --> */}
                        <div className='delay-100 duration-500 hover:z-10 hover:shadow-lg lg:hover:scale-105'>
                          <Link href='/#'>
                            <div className='relative aspect-[2.5/4] w-full shrink-0 overflow-hidden rounded-lg lg:h-[270px]'>
                              <img
                                className='h-full w-full object-cover'
                                src='assets/images/reels/reels-4.jpg'
                                alt=''
                              />

                              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-20'>
                                <div className='flex items-center gap-2.5 p-3 text-white'>
                                  <IoPlayOutline className='text-2xl' /> 29
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* <!-- placeholders --> */}
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                      </div>

                      {/* <!-- load more --> */}
                      <div className='my-6 flex justify-center'>
                        <button
                          type='button'
                          className='dark:bg-dark2 rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-md'
                        >
                          Load more...
                        </button>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item active title='Tagged' icon={IoPricetagsOutline}>
                    {/* <!-- short list --> */}
                    <div className='pt-16'>
                      <div
                        className='grid grid-cols-2 gap-4 lg:grid-cols-3'
                        uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true'
                      >
                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-5.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Monroe Parker
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-1 md:m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-1.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-2.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Jesse Steeve
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-2.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-3.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Martin Gray
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-3.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-4.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  John Michael
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-4.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-7.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Alexia stella
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-5.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-5.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Monroe Parker
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-1.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-2.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Jesse Steeve
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-2.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-3.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  Martin Gray
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-3.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        <div className='dark:bg-dark2 relative overflow-hidden rounded-md bg-white shadow lg:rounded-xl'>
                          {/* <!-- heading --> */}
                          <div className='flex items-center gap-3 p-2 py-3 text-sm font-normal sm:px-4'>
                            <Link href='/profile' className='max-md:hidden'>
                              <img
                                src='assets/images/avatars/avatar-4.jpg'
                                alt=''
                                className='h-6 w-6 rounded-full'
                              />
                            </Link>
                            <div className='flex-1'>
                              <Link href='/profile'>
                                <h4 className='text-black dark:text-white'>
                                  John Michael
                                </h4>
                              </Link>
                            </div>

                            {/* <!-- dropdown options --> */}
                            <div className='absolute right-0 top-0.5 m-2.5'>
                              <button
                                type='button'
                                className='button__ico h-8 w-8'
                              >
                                <IoEllipsisHorizontal className='text-xl' />
                              </button>
                              <div
                                className='w-[232px]'
                                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                              >
                                <nav>
                                  <Link href='/#'>
                                    <IoBookmarkOutline className='shrink-0 text-xl' />
                                    Add favorites
                                  </Link>
                                  <Link href='/#'>
                                    <IoFlagOutline className='shrink-0 text-xl' />
                                    Report
                                  </Link>
                                  <Link href='/#'>
                                    <IoShareOutline className='shrink-0 text-xl' />
                                    Share
                                  </Link>
                                  <hr />
                                  <Link
                                    href='/#'
                                    className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                                  >
                                    <IoStopCircleOutline className='shrink-0 text-xl' />
                                    Remove
                                  </Link>
                                </nav>
                              </div>
                            </div>
                          </div>

                          {/* <!-- post image --> */}
                          <Link href='/#preview_modal' uk-toggle=''>
                            <div className='relative h-48 w-full'>
                              <img
                                src='assets/images/post/post-4.jpg'
                                alt=''
                                className='inset-0 h-full w-full object-cover'
                              />
                            </div>
                          </Link>

                          {/* <!-- post icons --> */}
                          <div className='flex items-center gap-1 p-1.5 md:gap-3 md:px-3 md:py-2.5'>
                            <button type='button' className='button__ico'>
                              <IoHeartOutline className='text-lg md:text-2xl' />
                            </button>
                            <button type='button' className='button__ico'>
                              <IoChatbubbleEllipsesOutline className='text-lg md:text-2xl' />
                            </button>
                            <button
                              type='button'
                              className='button__ico ml-auto'
                            >
                              <IoBookmarkOutline className='text-lg md:text-2xl' />
                            </button>
                          </div>
                        </div>

                        {/* <!-- placeholders --> */}
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                        <div className='dark:bg-dark2 aspect-[3/3] h-full w-full animate-pulse rounded-lg bg-slate-200/60 lg:h-60'></div>
                      </div>

                      {/* <!-- load more --> */}
                      <div className='my-6 flex justify-center'>
                        <button
                          type='button'
                          className='dark:bg-dark2 rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-md'
                        >
                          Load more...
                        </button>
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <!-- post preview modal --> */}
      <div
        className='hidden max-lg:!items-start lg:p-20'
        id='preview_modal'
        uk-modal=''
      >
        <div className='uk-modal-dialog tt ax-w-[86rem] relative mx-auto w-full items-center overflow-hidden rounded-lg shadow-xl lg:flex lg:h-[80vh]'>
          {/* <!-- image previewer --> */}
          <div className='relative flex h-96 w-full items-center justify-center lg:h-full lg:w-[calc(100vw-400px)]'>
            <div className='relative z-10 h-full w-full'>
              <img
                src='assets/images/post/post-1.jpg'
                alt=''
                className='absolute h-full w-full object-cover'
              />
            </div>

            {/* <!-- close button --> */}
            <button
              type='button'
              className='uk-animation-slide-right-medium uk-modal-close absolute right-0 top-0 z-10 m-3 rounded-full bg-white p-2 dark:bg-slate-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* <!-- right sidebar --> */}
          <div className='dark:bg-dark2 relative flex h-full w-full  flex-col justify-between overflow-y-auto bg-white shadow-xl lg:w-[400px]'>
            <div className='p-5 pb-0'>
              {/* <!-- story heading --> */}
              <div className='flex gap-3 text-sm font-medium'>
                <img
                  src='assets/images/avatars/avatar-5.jpg'
                  alt=''
                  className='h-9 w-9 rounded-full'
                />
                <div className='flex-1'>
                  <h4 className='font-medium text-black dark:text-white'>
                    Steeve
                  </h4>
                  <div className='text-xs text-gray-500 dark:text-white/80'>
                    2 hours ago
                  </div>
                </div>

                {/* <!-- dropdown --> */}
                <div className='-m-1'>
                  <button type='button' className='button__ico h-8 w-8'>
                    <IoEllipsisHorizontal className='text-xl' />
                  </button>
                  <div
                    className='w-[253px]'
                    uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true'
                  >
                    <nav>
                      <Link href='/#'>
                        <IoBookmarkOutline className='shrink-0 text-xl' /> Add
                        to favorites
                      </Link>
                      <Link href='/#'>
                        <IoNotificationsOffOutline className='shrink-0 text-xl' />
                        Mute Notification
                      </Link>
                      <Link href='/#'>
                        <IoFlagOutline className='shrink-0 text-xl' /> Report
                        this post
                      </Link>
                      <Link href='/#'>
                        <IoShareOutline className='shrink-0 text-xl' /> Share
                        your profile
                      </Link>
                      <hr />
                      <Link
                        href='/#'
                        className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'
                      >
                        <IoStopCircleOutline className='shrink-0 text-xl' />
                        Unfollow
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>

              <p className='mt-4 text-sm font-normal leading-6'>
                Photography is the art of capturing light with a camera. it can
                be fun, challenging. It can also be a hobby, a passion. 📷
              </p>

              <div className='relative -mx-5 mt-3 px-5 py-3 shadow'>
                <div className='flex items-center gap-4 text-xs font-semibold'>
                  <div className='flex items-center gap-2.5'>
                    <button
                      type='button'
                      className='button__ico bg-red-100 text-red-500 dark:bg-slate-700'
                    >
                      <FaHeart className='text-lg' />
                    </button>
                    <Link href='/#'>1,300</Link>
                  </div>
                  <div className='flex items-center gap-3'>
                    <button
                      type='button'
                      className='button__ico bg-slate-100 dark:bg-slate-700'
                    >
                      <IoChatbubbleEllipses className='text-lg' />
                    </button>
                    <span>260</span>
                  </div>
                  <button type='button' className='button__ico ml-auto'>
                    <IoShareOutline className='text-xl' />
                  </button>
                  <button type='button' className='button__ico'>
                    <IoBookmarkOutline className='text-xl' />
                  </button>
                </div>
              </div>
            </div>

            <div className='h-full flex-1 overflow-y-auto p-5'>
              {/* <!-- comment list --> */}
              <div className='relative space-y-5 text-sm font-medium'>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-2.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Steeve
                    </Link>
                    <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-3.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Monroe
                    </Link>
                    <p className='mt-0.5'> You captured the moment.😎 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-7.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Alexia
                    </Link>
                    <p className='mt-0.5'> This photo is amazing! </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-4.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      John
                    </Link>
                    <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-5.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Michael
                    </Link>
                    <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-3.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Monroe
                    </Link>
                    <p className='mt-0.5'> Awesome. 😊😢 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-5.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Jesse
                    </Link>
                    <p className='mt-0.5'> Well done 🎨📸 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-2.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Steeve
                    </Link>
                    <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-7.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Alexia
                    </Link>
                    <p className='mt-0.5'> This photo is amazing! </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-4.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      John
                    </Link>
                    <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-5.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Michael
                    </Link>
                    <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <img
                    src='assets/images/avatars/avatar-3.jpg'
                    alt=''
                    className='mt-1 h-6 w-6 rounded-full'
                  />
                  <div className='flex-1'>
                    <Link
                      href='/#'
                      className='inline-block font-medium text-black dark:text-white'
                    >
                      Monroe
                    </Link>
                    <p className='mt-0.5'> Awesome. 😊😢 </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-2 bg-white p-3 text-sm font-medium'>
              <img
                src='assets/images/avatars/avatar-2.jpg'
                alt=''
                className='h-6 w-6 rounded-full'
              />

              <div className='relative flex-1 overflow-hidden '>
                <textarea
                  placeholder='Add Comment....'
                  rows={1}
                  className='resize- w-full  resize-y px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                ></textarea>

                <div className='absolute bottom-0.5 right-0 m-3 flex items-center gap-2'>
                  <FaImage className='flex text-xl text-blue-700' />
                  <IoHappy className='flex text-xl text-yellow-500' />
                </div>
              </div>

              <button
                type='submit'
                className='bg-secondery hidden rounded-full px-4 py-1.5 text-sm font-semibold'
              >
                Replay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- create status --> */}
      <div className='hidden lg:p-20' id='create-status' uk-modal=''>
        <div className='uk-modal-dialog tt dark:bg-dark2 relative mx-auto w-full overflow-hidden rounded-lg bg-white p-7 shadow-xl md:w-[520px]'>
          <div className='-m-7 mb-0 border-b py-3 text-center dark:border-slate-700'>
            <h2 className='text-sm font-medium'> Create Status </h2>

            {/* <!-- close button --> */}
            <button
              type='button'
              className='button__ico uk-modal-close absolute right-0 top-0 m-2.5'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <div className='mt-7 space-y-5'>
            <div>
              <label htmlFor='' className='text-base'>
                What do you have in mind?
              </label>
              <input type='text' className='mt-3 w-full' />
            </div>

            <div>
              <div className="border1 relative h-72 w-full overflow-hidden rounded-lg bg-[url('/assets/images/ad_pattern.png')] bg-repeat">
                <label
                  htmlFor='createStatusUrl'
                  className='absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 cursor-pointer flex-col items-center justify-center bg-gradient-to-t from-gray-700/60 pb-6 pt-10'
                >
                  <input
                    id='createStatusUrl'
                    type='file'
                    className='hidden'
                    accept='image/png, image/jpeg'
                  />
                  <FaImage name='image' className='text-3xl text-teal-600' />
                  <span className='mt-2 text-white'>
                    Browse to Upload image
                  </span>
                </label>

                <img
                  id='createStatusImage'
                  src='#'
                  alt='Uploaded Image'
                  style={{ display: 'none' }}
                  className='absolute h-full w-full object-cover'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-start gap-2'>
                <IoTimeOutline className='rounded-full bg-blue-50  text-3xl text-sky-600 dark:bg-transparent' />
                <p className='text-sm font-medium text-gray-500'>
                  Your Status will be available <br /> for
                  <span className='text-gray-800'> 24 Hours</span>
                </p>
              </div>

              <button
                type='button'
                className='button bg-blue-500 px-8 text-white'
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- create post modal --> */}
      <div
        className='hidden max-lg:!items-start lg:p-20'
        id='create-post'
        uk-modal=''
      >
        <div className='uk-modal-dialog tt dark:bg-dark2 relative mx-auto rounded-lg bg-white shadow-xl max-lg:w-full'>
          {/* <!-- This is a switcher for multiple tabs. Each switcher tab should have the same number of tabs. https://getuikit.com/docs/switcher--> */}
          <ul className='hidden' uk-switcher='connect: .posTabs'>
            {/* <!-- tab 1 --> */}
            <li>
              <Link href='/#'>...</Link>
            </li>

            {/* <!-- tab 2 --> */}
            <li>
              <Link href='/#'>...</Link>
            </li>

            {/* <!-- tab 3 --> */}
            <li>
              <Link href='/#'>...</Link>
            </li>
          </ul>

          {/* <!-- card header --> */}
          <ul className='uk-switcher posTabs border-b p-3.5 text-center text-sm font-semibold text-black dark:border-slate-700 dark:text-white'>
            {/* <!-- tab 1 --> */}
            <li>
              <div> Upload Photo</div>
              <Link
                href='/#'
                className='absolute right-1 top-0 m-3 text-blue-600'
                uk-switcher-item='next'
              >
                Next
              </Link>
            </li>

            {/* <!-- tab 2 --> */}
            <li>
              <Link
                href='/#'
                className='absolute left-0 top-0 m-3.5'
                uk-switcher-item='previous'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
                </svg>
              </Link>
              <div> Filter Your Photo </div>
              <Link
                href='/#'
                className='absolute right-1 top-0 m-3.5 text-blue-600'
                uk-switcher-item='next'
              >
                Next
              </Link>
            </li>

            {/* <!-- tab 3 --> */}
            <li>
              <Link
                href='/#'
                className='absolute left-0 top-0 m-3.5'
                uk-switcher-item='previous'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
                </svg>
              </Link>
              <div> Permission Photo </div>

              {/* <!-- submit button --> */}
              <button
                type='button'
                className='uk-animation-slide-right-small absolute right-0 top-0 m-2.5 rounded-lg bg-blue-600 px-5 py-1.5 text-sm text-white'
              >
                Share
              </button>
            </li>
          </ul>

          <div className='lg:inline-flex'>
            {/* <!-- photo upload --> */}
            <div className='w-full lg:w-[600px]'>
              <div className='relative flex h-80 w-full items-center justify-center overflow-hidden lg:h-[600px]'>
                <label
                  htmlFor='addPostUrl'
                  className='hover: absolute inset-0 z-10 h-full w-full cursor-pointer'
                >
                  <input
                    id='addPostUrl'
                    type='file'
                    className='hidden'
                    accept='image/png, image/jpeg'
                  />
                </label>

                <div
                  className='absolute flex flex-col justify-center space-y-4'
                  uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true'
                >
                  <div uk-scrollspy-className='uk-animation-scale-up'>
                    <svg
                      className='mx-auto text-gray-600 dark:text-white'
                      width='96'
                      height='77'
                      role='img'
                      viewBox='0 0 97.6 77.3'
                    >
                      <path
                        d='M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z'
                        fill='currentColor'
                      ></path>
                      <path
                        d='M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z'
                        fill='currentColor'
                      ></path>
                      <path
                        d='M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </div>
                  <div
                    className=' mx-auto'
                    uk-scrollspy-className='uk-animation-slide-bottom-small'
                  >
                    <button
                      type='button'
                      className='rounded-lg bg-blue-600 px-4 py-1.5 text-sm text-white dark:bg-white/5'
                    >
                      Select from the Computer
                    </button>
                  </div>
                </div>

                <img
                  id='addPostImage'
                  src='#'
                  alt='Uploaded Image'
                  style={{ display: 'none' }}
                  className='fff absolute h-full w-full object-cover'
                />
              </div>
            </div>

            {/* <!-- right sidebar --> */}
            <div className='relative w-auto border-l dark:border-slate-700'>
              <ul className='uk-switcher posTabs'>
                {/* <!-- tab 1 --> */}
                <li> </li>

                {/* <!-- tab 2 Filter Your Photo--> */}
                <li>
                  <div className='before:uk-animation-slide-right-small overflow-y-auto lg:max-h-[600px] lg:w-[300px]'>
                    <div className='p-3.5'>
                      {/* <!-- tabs --> */}
                      <ul
                        className='flex rounded-md border bg-slate-100 p-0.5 text-center text-xs font-medium text-gray-700 dark:border-slate-700 dark:bg-white/5 dark:text-white'
                        uk-switcher
                      >
                        <li className='flex-1'>
                          <Link
                            href='/#'
                            className='block rounded-md px-4 py-1.5 aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10'
                          >
                            Filters
                          </Link>
                        </li>
                        <li className='flex-1'>
                          <Link
                            href='/#'
                            className='block rounded-md px-4 py-1.5 aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10'
                          >
                            Adjustments
                          </Link>
                        </li>
                      </ul>

                      <div className='uk-switcher'>
                        {/* <!-- filter slider --> */}
                        <div className='space-y-8 p-1 py-6 text-sm font-medium text-gray-700 dark:text-gray-200'>
                          <div>
                            <label
                              htmlFor='range1'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range1'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='range2'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range2'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='range3'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range3'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='range4'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range4'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='range5'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range5'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='range6'
                              className='mb-2 inline-block'
                            >
                              Example range
                            </label>
                            <input
                              type='range'
                              min='0'
                              max='6'
                              id='range6'
                              className='transparent mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700'
                            />
                          </div>
                        </div>

                        {/* <!-- image effect list --> */}
                        <div>
                          <div
                            className='mt-3 grid grid-cols-3 gap-4 text-center text-xs font-light'
                            uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 50;repeat:true'
                          >
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: brightness-125'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover brightness-125'
                                />
                              </div>
                              <span className='mt-2 block'>Brightness</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: contrast-150'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover contrast-150'
                                />
                              </div>
                              <span className='mt-2 block'>Contrast</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: grayscale'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover grayscale'
                                />
                              </div>
                              <span className='mt-2 block'>Grayscale</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: hue-rotate-60'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover hue-rotate-90'
                                />
                              </div>
                              <span className='mt-2 block'>Hue</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: invert'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover invert'
                                />
                              </div>
                              <span className='mt-2 block'>Invert</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: saturate-150'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover saturate-150'
                                />
                              </div>
                              <span className='mt-2 block'>Saturate</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: sepia'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover sepia'
                                />
                              </div>
                              <span className='mt-2 block'>Sepia</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: brightness-125'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover brightness-125'
                                />
                              </div>
                              <span className='mt-2 block'>Brightness</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: grayscale'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='contrast h-20 w-full rounded object-cover'
                                />
                              </div>
                              <span className='mt-2 block'>Contrast</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: grayscale'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover grayscale'
                                />
                              </div>
                              <span className='mt-2 block'>Grayscale</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: hue-rotate-60'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover hue-rotate-60'
                                />
                              </div>
                              <span className='mt-2 block'>Hue</span>
                            </div>
                            <div
                              className='group cursor-pointer'
                              uk-toggle='target: #addPostImage; cls: invert'
                            >
                              <div className='rounded ring-blue-600 ring-offset-4 duration-500 group-hover:ring-2 dark:ring-offset-slate-800'>
                                <img
                                  src='assets/images/affect.jpg'
                                  alt=''
                                  className='h-20 w-full rounded object-cover invert'
                                />
                              </div>
                              <span className='mt-2 block'>Invert</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- tab 3 Permission Photo--> */}
                <li>
                  <div className='uk-animation-fade overflow-y-auto lg:max-h-[600px] lg:w-[300px]'>
                    <textarea
                      name=''
                      id=''
                      rows={4}
                      placeholder='What is going on..'
                      className='w-full !rounded-none !p-4'
                    ></textarea>

                    <ul
                      className='divide-y divide-gray-100 dark:divide-slate-700'
                      uk-nav='multiple: true'
                    >
                      <li>
                        <div className='flex items-center justify-between px-3.5 py-2'>
                          <input
                            type='text'
                            placeholder='Add locations'
                            className='w-full !bg-transparent !px-0 text-sm font-medium focus:!border-transparent focus:!ring-transparent'
                          />
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-6 w-6'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                            />
                          </svg>
                        </div>
                      </li>

                      <li className='uk-parent uk-open'>
                        <Link
                          href='/#'
                          className='group flex items-center justify-between px-3.5 py-2 '
                          aria-expanded='true'
                        >
                          <h4 className='text-sm font-medium'>Accessibility</h4>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-6 w-6 duration-200 group-aria-expanded:rotate-180'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 15.75l7.5-7.5 7.5 7.5'
                            />
                          </svg>
                        </Link>
                        <ul className='-space-y-1'>
                          <li>
                            <div className='p-4'>
                              <p className='text-[13px] font-light'>
                                Alt text helps people with visual impairments
                                understand your photos. You can either write
                                your own alt text or let it be created
                                automatically for your photos.
                              </p>
                              <input
                                type='text'
                                placeholder='Write alt text..'
                                className='mt-3 w-full'
                              />
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li className='uk-parent uk-open'>
                        <Link
                          href='/#'
                          className='group flex items-center justify-between px-3.5 py-2 '
                          aria-expanded='true'
                        >
                          <h4 className='text-sm font-medium'>
                            Advanced settings
                          </h4>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-6 w-6 duration-200 group-aria-expanded:rotate-180'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 15.75l7.5-7.5 7.5 7.5'
                            />
                          </svg>
                        </Link>
                        <ul className='-space-y-2'>
                          <li>
                            <div className='p-4'>
                              <label className='switch flex min-h-[30px] cursor-pointer items-start justify-between gap-4'>
                                <div>
                                  <h4 className='text-sm font-medium'>
                                    Hide like and view counts on this post
                                  </h4>
                                </div>
                                <input type='checkbox' checked />
                                <span className='switch-button !relative shrink-0'></span>
                              </label>
                              <div>
                                <p className='mt-1.5 text-[13px] font-light'>
                                  Only you will see the total number of likes
                                  and views on this post. You can change this
                                  later by going to the ··· menu at the top of
                                  the post. To hide like counts on other
                                  people&apos;s posts, go to your account
                                  settings. <Link href='/#'> Learn more</Link>.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='p-4'>
                              <label className='switch flex min-h-[30px] cursor-pointer items-start justify-between gap-4'>
                                <div>
                                  <h4 className='text-sm font-medium'>
                                    Turn off commenting
                                  </h4>
                                </div>
                                <input type='checkbox' checked />
                                <span className='switch-button !relative shrink-0'></span>
                              </label>
                              <div>
                                <p className='mt-1.5 text-[13px] font-light'>
                                  You can change this later by going to the menu
                                  at the top of your post.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
