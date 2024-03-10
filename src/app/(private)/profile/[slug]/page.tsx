/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IoAddCircle,
  IoCamera,
  IoChevronDown,
  IoEllipsisHorizontal,
  IoFlagOutline,
  IoSearch,
  IoShareOutline,
  IoStopCircleOutline,
} from 'react-icons/io5';
import { FaCheckCircle, FaPencilAlt, FaPhoneAlt, FaVideo } from 'react-icons/fa';

import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import NewPost from '@/components/NewPost/NewPost';

export interface IProfileProps {}

export default function Profile({ params }: { params: { slug: string } }, props: IProfileProps) {

  const isFriend = params.slug === 'friend';
  const isMe = params.slug === 'me';
  const friendName = params.slug === 'friend' ? 'Monroe Parker' : '';

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
                    Crop
                  </button>
                  <button className='button bg-black/10 text-white flex items-center gap-2 backdrop-blur-sm'>
                    Edit
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
                <button
                  type='button'
                  className='absolute -bottom-3 left-1/2 -translate-x-1/2 bg-hover-1 shadow p-1.5 rounded-full sm:flex hidden'>
                  <IoCamera className='text-2xl md hydrated' aria-label='camera' />
                </button>
              </div>
              <h3 className='md:text-3xl text-base font-bold text-text-1'> Monroe Parker </h3>
              <p className='mt-2 text-gray-500 dark:text-white/80'>
                Family , Food , Fashion , Forever
                {isMe && (
                  <Link href='#' className='text-blue-500 ml-4 inline-block'>
                    Edit
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
            data-uk-sticky='offset:64; cls-active: bg-foreground-1 shadow rounded-b-2xl z-50 backdrop-blur-xl  animation:uk-animation-slide-top ; media: 992'>
            <div className='flex items-center gap-2 text-sm py-2 pr-1 max-md:w-full lg:order-2'>

              {isMe && (
                <button className='button bg-foreground-2 hover:bg-hover-1 flex items-center gap-2 text-white py-2 px-3.5 max-md:flex-1'>
                  <FaPencilAlt className='text-lg' />
                  <span className='text-sm'> Edit Profile </span>
                </button>
              )}
              {!isFriend && !isMe && (
                <button className='button bg-blue-1 hover:bg-blue-2 flex items-center gap-2 text-white py-2 px-3.5 max-md:flex-1'>
                  <IoAddCircle className='text-xl' />
                  <span className='text-sm'> Add Friend </span>
                </button>
              )}
              {isFriend && (
                <div>
                  <button className='button bg-foreground-2 hover:bg-hover-1 flex items-center gap-2 text-text-1 py-2 px-3.5 max-md:flex-1'>
                    <FaCheckCircle className='text-xl' />
                    <span className='text-sm text-text-1'> Friend </span>
                  </button>
                  <div
                    className='w-[240px] !bg-foreground-1'
                    data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                    <nav>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Unfriend
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Add to Close Friends
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Add to Acquaintances
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Add to another list
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Suggest Friends
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Report
                      </Link>
                    </nav>
                  </div>
                </div>
              )}

              <button
                type='submit'
                className='rounded-lg bg-foreground-1 flex px-2.5 py-2 hover:bg-hover-1'>
                <IoSearch className='text-xl' />
              </button>

              <div>
                <button type='submit' className='rounded-lg bg-foreground-2 flex px-2.5 py-2'>
                  <IoEllipsisHorizontal className='text-xl' />
                </button>
                <div
                  className='w-[240px] !bg-foreground-1'
                  data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                  {isMe ? (
                    <nav>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Edit Profile
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Activity Log
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Archive
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Your Profile
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        More
                      </Link>
                      <hr />
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Settings & Privacy
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Help & Support
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Display & Accessibility
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        Dark Mode
                      </Link>
                    </nav>
                  ) : (
                    <nav>
                      {isFriend && (
                        <>
                          <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                            <FaPhoneAlt className='text-xl' /> Voice Call
                          </Link>
                          <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                            <FaVideo className='text-xl' /> Video Call
                          </Link>
                        </>)}
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        <IoFlagOutline className='text-xl' /> Report
                      </Link>
                      <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                        <IoShareOutline className='text-xl' /> Share profile
                      </Link>
                      <hr />
                      <Link href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                        <IoStopCircleOutline className='text-xl' /> Block
                      </Link>
                    </nav>)}
                </div>
              </div>
            </div>

            <nav className='flex gap-0.5 rounded-xl -mb-px text-gray-600 font-medium text-[15px]  dark:text-white max-md:w-full max-md:overflow-x-auto max-md:custom-scrollbar-fg'>
              <Link
                href='#'
                className='hover:bg-hover-1 hover:rounded-sm inline-block  py-3 leading-8 px-3.5 border-b-2 border-blue-600 text-blue-600'>
                Timeline
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Friend <span className='text-xs pl-2 font-normal lg:inline-block hidden'>2,680</span>
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Photo
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Photo
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Photo
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Video
              </Link>
              <Link href='#' className='hover:bg-hover-1 hover:rounded-sm inline-block py-3 leading-8 px-3.5'>
                Group
              </Link>

              {/* <!-- dropdown --> */}
              <div>
                <Link
                  href='#'
                  className='hover:bg-hover-1 hover:rounded-sm inline-flex items-center gap-2 py-3 leading-8 px-3'>
                  More
                  <IoChevronDown />
                </Link>
                <div
                  className='md:w-[240px] w-screen !bg-foreground-1'
                  data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:-4'>
                  <nav className='text-[15px]'>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Likes
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Music
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Events
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Books
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Reviews given
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Groups
                    </Link>
                    <Link href='#' className='hover:!bg-hover-1 text-black/90 dark:text-white/90'>
                      Manage Sections
                    </Link>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='js-oversized'>
          {/* <!-- feed story --> */}

          <div className='flex-1 xl:space-y-6 space-y-3'>
            {/* <!-- add story --> */}
            <NewPost title={'Write some thing for ' + friendName + '...'} />

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
              <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
                <div className='flex items-ce justify-between text-text-1'>
                  <h3 className='font-bold text-lg'> Intro </h3>
                  {isMe && (
                    <Link href='#' className='text-sm text-blue-500'>
                      Edit
                    </Link>
                  )}
                </div>

                <ul className='text-text-2 space-y-4 mt-4 text-sm '>
                  <li className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                      />
                    </svg>
                    <div>
                      Live In <span className='font-semibold text-text-1'> Cairo , Egypt </span>
                    </div>
                  </li>
                  <li className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                      />
                    </svg>
                    <div>
                      Studied at <span className='font-semibold text-text-1'>University of Turkey</span>
                    </div>
                  </li>
                  <li className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                      />
                    </svg>

                    <div>
                      Works at <span className='font-semibold text-text-1'> Envanto Martket </span>
                    </div>
                  </li>
                  <li className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                      />
                    </svg>
                    <div>
                      In <span className='font-semibold text-text-1'> Relationship </span>
                    </div>
                  </li>
                  <li className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                      />
                    </svg>
                    <div>

                      Followed By <span className='font-semibold text-text-1'> 3,240 People </span>
                    </div>
                  </li>
                </ul>

                {/* <!-- Hobbies --> */}
                <div className='flex flex-wrap gap-1 text-sm mt-4 font-semibold capitalize'>
                  <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
                    Shopping
                  </div>
                  <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
                    code
                  </div>
                  <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
                    art
                  </div>
                  <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
                    design
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-1 text-center text-sm mt-4 mb-2 rounded-lg overflow-hidden'>
                  <div className='relative w-full aspect-[4/3]'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-5.jpg'
                      alt=''
                      className='object-cover w-full h-full inset-0'
                    />
                  </div>
                  <div className='relative w-full aspect-[4/3]'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-7.jpg'
                      alt=''
                      className='object-cover w-full h-full inset-0'
                    />
                  </div>
                  <div className='relative w-full aspect-[4/3]'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      alt=''
                      className='object-cover w-full h-full inset-0'
                    />
                  </div>
                  <div className='relative w-full aspect-[4/3]'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-6.jpg'
                      alt=''
                      className='object-cover w-full h-full inset-0'
                    />
                  </div>
                </div>
              </div>

              <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
                <div className='flex items-ce justify-between text-text-1'>
                  <h3 className='font-bold text-lg'>
                    Friends
                    <span className='block text-sm text-gray-500 mt-0. font-normal dark:text-white'>
                      3489 Friends
                    </span>
                  </h3>
                  <Link href='#' className='text-sm text-blue-500'>
                    Find Friend
                  </Link>
                </div>

                <div className='grid grid-cols-3 gap-2 gap-y-5 text-center text-sm mt-4 mb-2'>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-7.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> Jesse Steeve </div>
                  </div>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> John Michael </div>
                  </div>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> Monroe Parker </div>
                  </div>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-4.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> Martin Gray </div>
                  </div>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-5.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> James Lewis </div>
                  </div>
                  <div>
                    <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-6.jpg'
                        alt=''
                        className='object-cover w-full h-full inset-0'
                      />
                    </div>
                    <div className='mt-2 line-clamp-1'> Alex stella </div>
                  </div>
                </div>
              </div>

              {/* <!-- Groups You Manage  --> */}
              <div className='bg-foreground-1 rounded-xl shadow p-5 px-6 border1'>
                <div className='flex items-baseline justify-between text-text-1'>
                  <h3 className='font-bold text-base'> Suggested Manage </h3>
                  <Link href='#' className='text-sm text-blue-500'>
                    See all
                  </Link>
                </div>

                <div className='mt-5'>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-2.jpg' alt='' className='h-10 w-10 rounded-full' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> John Michael</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 6 day ago </div>
                    </div>
                    <button className='button bg-foreground-2 dark:text-white'>Like</button>
                  </div>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-4.jpg' alt='' className='h-10 w-10 rounded-full' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> Martin Gray</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 2 month ago </div>
                    </div>
                    <button className='button bg-foreground-2 dark:text-white'>Like</button>
                  </div>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-3.jpg' alt='' className='h-10 w-10 rounded-full' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> Monroe Parker</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 1 week ago </div>
                    </div>
                    <button className='button bg-foreground-2 dark:text-white'>Like</button>
                  </div>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-1.jpg' alt='' className='h-10 w-10 rounded-full' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> Jesse Steeve</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 2 day ago </div>
                    </div>
                    <button className='button bg-foreground-2 dark:text-white'>Like</button>
                  </div>
                </div>

                <button className='bg-foreground-2 w-full text-text-1 py-1.5 font-medium px-3.5 rounded-md text-sm mt-2'>
                  See all
                </button>
              </div>

              {/* <!-- Groups You Manage  --> */}
              <div className='bg-white rounded-xl shadow p-5 px-6 border1 dark:bg-background-2'>
                <div className='flex items-baseline justify-between text-text-1'>
                  <h3 className='font-bold text-base'> Suggested Manage </h3>
                  <Link href='#' className='text-sm text-blue-500'>
                    See all
                  </Link>
                </div>

                <div className='mt-5'>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-2.jpg' alt='' className='h-10 w-10 rounded-md' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> John Michael</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 1 week ago </div>
                    </div>
                    <button className='button bg-blue-1 hover:bg-blue-2 text-white'>Like</button>
                  </div>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-4.jpg' alt='' className='h-10 w-10 rounded-md' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> Martin Gray</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 4 week ago </div>
                    </div>
                    <button className='button bg-blue-1 hover:bg-blue-2 text-white'>Like</button>
                  </div>
                  <div className='flex items-center space-x-3 my-3'>
                    <Link href='timeline-group.html'>
                      <Image
                        width={500}
                        height={500} src='/images/avatars/avatar-3.jpg' alt='' className='h-10 w-10 rounded-md' />
                    </Link>
                    <div className='flex-1'>
                      <Link href='timeline-group.html'>
                        <h4 className='text-sm leading-5 font-bold text-text-1'> Monroe Parker</h4>
                      </Link>
                      <div className='mt-0.5 text-xs leading-4 text-text-2'> Updated 2 month ago </div>
                    </div>
                    <button className='button bg-blue-1 hover:bg-blue-2 text-white'>Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
