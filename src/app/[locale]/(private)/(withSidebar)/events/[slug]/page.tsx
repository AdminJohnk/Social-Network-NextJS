import Image from 'next/image';
import { Link } from '@/navigation';
import {
  IoArrowRedo,
  IoStarOutline,
  IoShareOutline,
  IoBookmarkOutline,
  IoFlagOutline,
  IoCheckmark,
  IoCalendarNumberOutline,
  IoInformationCircleOutline,
  IoEllipsisHorizontal,
  IoChevronDownOutline,
  IoHeartSharp,
  IoLeafOutline
} from 'react-icons/io5';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { TabTitle, Tabs } from '@/components/ui/tabs';

export interface IGroupManagerProps {
  params: {
    locale: string;
  };
}

export default function GroupManager({ params: { locale } }: IGroupManagerProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0 @container/pri z-[1]'>
      <div className='groups px-10 pt-5'>
        <main id='site__main'>
          <div className=''>
            <div className='bg-foreground-1 shadow lg:rounded-b-2xl lg:-mt-10 '>
              <div className='relative overflow-hidden lg:h-72 h-36 w-full'>
                <Image
                  width={500}
                  height={500}
                  src='/images/group/group-cover-4.jpg'
                  alt=''
                  className='h-full w-full object-cover inset-0'
                />

                <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10 z-10'></div>

                <div className='absolute bottom-0 right-0 m-4 z-20'>
                  <div className='flex items-center gap-3'>
                    <button className='button bg-white/20 flex items-center gap-2 backdrop-blur-small'>
                      Crop
                    </button>
                    <button className='button bg-black/10 flex items-center gap-2 backdrop-blur-small'>
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className='lg:px-10 md:p-5 p-3'>
                <div className='flex flex-col justify-center md:-mt-20 -mt-12'>
                  <div className='md:w-20 md:h-20 w-12 h-12 overflow-hidden bg-white shadow-md rounded-md z-10 mb-5'>
                    <div className='w-full md:h-5 bg-rose-500 h-3'></div>
                    <div className='grid place-items-center font-semibold md:text-3xl text-lg h-full md:pb-5 pb-3 text-dark-1'>
                      14
                    </div>
                  </div>

                  <div className='flex lg:items-center justify-between max-lg:flex-col max-lg:gap-2'>
                    <div className='flex-1'>
                      <p className='text-sm font-semibold text-rose-600 mb-1.5'>
                        7 OCT AT 07:00 – 11 OCT AT 12:00
                      </p>
                      <h3 className='md:text-2xl text-base font-bold'>
                        Webinar - Raising Ducks For Egg Production
                      </h3>
                      <p className='font-normal mt-2 flex gap-2 '>
                        <span> Free </span>
                        <span> • </span>
                        <span> Online event </span>
                      </p>
                    </div>

                    <div>
                      <div
                        data-uk-countdown='date: 2024-03-15T08:36:57+00:00'
                        className='flex gap-3 text-2xl font-semibold text-text-1 max-lg:justify-center'>
                        <div className='bg-foreground-1 flex flex-col items-center justify-center rounded-lg w-16 h-16 lg:border-4 border-foreground-2 md:shadow'>
                          <span className='uk-countdown-days'></span>
                          <span className='inline-block text-xs'>Days</span>
                        </div>
                        <div className='bg-foreground-1 flex flex-col items-center justify-center rounded-lg w-16 h-16 lg:border-4 border-foreground-2 md:shadow'>
                          <div className='uk-countdown-hours'></div>
                          <span className='inline-block text-xs'>Hours</span>
                        </div>
                        <div className='bg-foreground-1 flex flex-col items-center justify-center rounded-lg w-16 h-16 lg:border-4 border-foreground-2 md:shadow'>
                          <div className='uk-countdown-minutes'></div>
                          <span className='inline-block text-xs'>min </span>
                        </div>
                        <div className='bg-foreground-1 flex flex-col items-center justify-center rounded-lg w-16 h-16 lg:border-4 border-foreground-2 md:shadow'>
                          <div className='uk-countdown-seconds'></div>
                          <span className='inline-block text-xs'>sec </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between px-2 max-md:flex-col'>
                <div className='flex items-center gap-2 text-sm py-2 pr-1 lg:order-1'>
                  <button
                    type='button'
                    className='button bg-foreground-2 hover:bg-hover-2 duration-300  flex items-center gap-2 py-2 px-3.5'>
                    <IoStarOutline className='size-5' />
                    <span className='text-sm'> Go Now </span>
                  </button>
                  <button
                    type='button'
                    className='button bg-foreground-2 hover:bg-hover-2 duration-300  flex items-center gap-2 py-2 px-3.5'>
                    <IoCheckmark className='size-5' />
                    <span className='text-sm'> Going </span>
                  </button>
                  <button
                    type='button'
                    className='rounded-lg bg-foreground-2 hover:bg-hover-2 duration-300  flex px-2.5 py-2'>
                    <IoArrowRedo className='size-5' />
                  </button>

                  <div>
                    <button
                      type='button'
                      className='rounded-lg bg-foreground-2 hover:bg-hover-2 duration-300  flex px-2.5 py-2'>
                      <IoEllipsisHorizontal className='size-5' />
                    </button>
                    <div
                      className='w-[240px]'
                      data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                      <nav>
                        <Link href='#'>
                          <IoBookmarkOutline className='size-5' /> Save
                        </Link>
                        <Link href='#'>
                          <IoFlagOutline className='size-5' /> Add to page
                        </Link>
                        <Link href='#'>
                          <IoCalendarNumberOutline className='size-5' /> Add to calender
                        </Link>
                        <Link href='#'>
                          <IoShareOutline className='size-5' /> Share profile
                        </Link>
                        <Link href='#'>
                          <IoInformationCircleOutline className='size-5' />
                          Report Event
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>

                <Tabs id='event-tab' disableChevron>
                  <TabTitle>About</TabTitle>
                  <TabTitle>Discussion</TabTitle>
                </Tabs>
              </div>
            </div>

            <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col' id='js-oversized'>
              <div className='flex-1 space-y-4'>
                <div className='p-5 px-6 relative bg-foreground-1 rounded-md'>
                  <h3 className='font-semibold text-lg'>About</h3>

                  <div className='space-y-4 leading-7 tracking-wide mt-4 text-sm '>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nodum nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wiis enim ad minim veniam,
                      quis nostrud xeric talion ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                      consequat
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nodum nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wiis enim ad minim veniam,
                      quis nostrud xeric talion ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                      consequat
                    </p>
                  </div>
                </div>
                <div className='p-5 px-6 relative bg-foreground-1 rounded-md'>
                  <h3 className='font-semibold text-lg'>Discussions</h3>

                  <div className=' text-sm font-normal space-y-4 relative mt-4'>
                    <div className='flex items-start gap-3 relative'>
                      <Link href='/profile/friend'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='w-6 h-6 mt-1 rounded-full'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/profile/friend' className='font-medium inline-block '>
                          Monroe Parker
                        </Link>
                        <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3 relative'>
                      <Link href='/profile/friend'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='w-6 h-6 mt-1 rounded-full'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/profile/friend' className='font-medium inline-block '>
                          John Michael
                        </Link>
                        <p className='mt-0.5'> You captured the moment.😎 </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3 relative'>
                      <Link href='/profile/friend'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-5.jpg'
                          alt=''
                          className='w-6 h-6 mt-1 rounded-full'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/profile/friend' className='font-medium inline-block '>
                          James Lewis
                        </Link>
                        <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3 relative'>
                      <Link href='/profile/friend'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='w-6 h-6 mt-1 rounded-full'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/profile/friend' className='font-medium inline-block '>
                          Martin Gray
                        </Link>
                        <p className='mt-0.5'> You captured the moment.😎 </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type='button'
                        className='flex items-center gap-1.5 text-blue-500 hover:text-blue-500 my-5'>
                        <IoChevronDownOutline className='size-5' />
                        More Comment
                      </button>
                    </div>
                  </div>

                  <div className='sm:px-4 sm:py-3 p-2.5 border-t flex items-center gap-1 -m-6 mt-0 bg-foreground-2 border-border-1'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-7.jpg'
                      alt=''
                      className='w-6 h-6 rounded-full'
                    />

                    <div className='flex-1 relative overflow-hidden h-10'>
                      <textarea
                        placeholder='Add Comment....'
                        rows={-1}
                        className='w-full resize-none !bg-transparent px-4 py-2 !border-transparent !ring-transparent placeholder:text-text-1 placeholder:base-regular'></textarea>

                      <div className='!top-2 pr-2' data-uk-drop='pos: bottom-right; mode: click'>
                        <div
                          className='flex items-center gap-2'
                          data-uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6 fill-sky-600'>
                            <path
                              fillRule='evenodd'
                              d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-5 h-5 fill-pink-600'>
                            <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z' />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='rounded-full border border-text-3 py-1.5 px-3.5 bg-foreground-2 hover:bg-hover-2 duration-300'>
                      Replay
                    </button>
                  </div>
                </div>
              </div>

              <div className='lg:w-[400px]'>
                <div
                  className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                  data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'>
                  <div className='p-5 px-6 pr-0 bg-foreground-1 rounded-md'>
                    <h3 className='h5-semibold'>Status</h3>

                    <div className='grid grid-cols-2 gap-2 text-sm mt-4'>
                      <div className='flex gap-3'>
                        <div className='p-2 inline-flex rounded-full bg-rose-50 self-center'>
                          <IoHeartSharp className='size-5 text-rose-600' />
                        </div>
                        <div>
                          <h3 className='sm:text-xl sm:font-semibold mt-1 text-base font-normal'>162</h3>
                          <p>Interested</p>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <div className='p-2 inline-flex rounded-full bg-rose-50 self-center'>
                          <IoLeafOutline className='size-5 text-rose-600' />
                        </div>
                        <div>
                          <h3 className='sm:text-xl sm:font-semibold mt-1 text-base font-normal'>162</h3>
                          <p>Going</p>
                        </div>
                      </div>
                    </div>
                    <ul className='mt-6 space-y-4 text-sm '>
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
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'></path>
                        </svg>
                        <div>
                          <span className='font-semibold me-1'>3,240</span>
                          friends
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
                            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'></path>
                        </svg>
                        <div>
                          on Socialite since
                          <span className='font-semibold ms-1'>2014</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className='p-5 px-6 bg-foreground-1 rounded-md'>
                    <div className='flex items-baseline justify-between'>
                      <h3 className='base-bold'> Invite friends </h3>
                      <Link href='#' className='text-sm text-blue-500'>
                        See all
                      </Link>
                    </div>

                    <div className='side-list'>
                      <div className='side-list-item'>
                        <Link href='/profile/friend'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='side-list-image rounded-full'
                          />
                        </Link>
                        <div className='flex-1'>
                          <Link href='/profile/friend'>
                            <h4 className='side-list-title'> Monroe Parker </h4>
                          </Link>
                          <div className='side-list-info'> Turkey</div>
                        </div>
                        <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                          Invite
                        </button>
                      </div>

                      <div className='side-list-item'>
                        <Link href='/profile/friend'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='side-list-image rounded-full'
                          />
                        </Link>
                        <div className='flex-1'>
                          <Link href='/profile/friend'>
                            <h4 className='side-list-title'> Martin Gray </h4>
                          </Link>
                          <div className='side-list-info'> Dubai</div>
                        </div>
                        <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                          Invite
                        </button>
                      </div>

                      <div className='side-list-item'>
                        <Link href='/profile/friend'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-5.jpg'
                            alt=''
                            className='side-list-image rounded-full'
                          />
                        </Link>
                        <div className='flex-1'>
                          <Link href='/profile/friend'>
                            <h4 className='side-list-title'> James Lewis </h4>
                          </Link>
                          <div className='side-list-info'> London</div>
                        </div>
                        <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='p-5 px-6 space-y-4 bg-foreground-1 rounded-md'>
                    <h3 className='base-bold'>Created by</h3>

                    <div className='side-list-item'>
                      <Link href='/profile/friend'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-full'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/profile/friend'>
                          <h4 className='side-list-title'> Maria Gray</h4>
                        </Link>
                        <div className='side-list-info'>Turkey </div>
                      </div>
                      <Link
                        href='/profile/friend'
                        className='button rounded-full bg-foreground-2 hover:bg-hover-2 duration-300'>
                        Profile
                      </Link>
                    </div>

                    <ul className='space-y-4 text-sm '>
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
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'></path>
                        </svg>
                        <div>
                          <span className='font-semibold me-1'>3,240</span>
                          friends
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
                            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'></path>
                        </svg>
                        <div>
                          on Socialite since
                          <span className='font-semibold ms-1'>2014</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
