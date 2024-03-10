/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { IoArrowRedo, IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IGroupProps {}

export default function Group(props: IGroupProps) {
  return (
    <div
      className='ms-60 mt-16 max-lg/2:ms-20 @container/pri'
      style={{
        zIndex: 1
      }}>
      <div className='groups px-5 py-5'>
        <main id='site__main' className=''>
          <div className='2xl:max-w-[1220px]'>
            <div className='page-heading'>
              <h1 className='page-title'> Groups </h1>

              <nav className='nav__underline'>
                <ul
                  className='group'
                  uk-switcher='connect: #group-tabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'>
                  <li>
                    <a href='#'> Suggestions </a>
                  </li>
                  <li>
                    <a href='#'> Popular </a>
                  </li>
                  <li>
                    <a href='#'> My groups </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='uk-switcher' id='group-tabs'>
              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body relative z-10'>
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800'
                    />
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Travel </a>
                      <div className='md:block hidden'>·</div>
                      <div> 232k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body relative z-10'>
                    <img
                      src='/images/avatars/avatar-3.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800'
                    />
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Technology </a>
                      <div className='md:block hidden'>·</div>
                      <div> 328k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body relative z-10'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800'
                    />
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Bussiness </a>
                      <div className='md:block hidden'>·</div>
                      <div> 436k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body relative z-10'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800'
                    />
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Design </a>
                      <div className='md:block hidden'>·</div>
                      <div> 420k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/product/product-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </a>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <a href='#'> Education </a>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <img
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                        </div>
                        <p className='card-text'> 6 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/product/product-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <a href='#'> Education </a>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <img
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                        </div>
                        <p className='card-text'> 8 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/product/product-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <a href='#'> Education </a>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <img
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                        </div>
                        <p className='card-text'> 12 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/product/product-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </a>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>360k members </div>
                        <div className='md:block hidden'>·</div>
                        <a href='#'> Education </a>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <img
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                          <img
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-2 border-white dark:border-slate-800'
                          />
                        </div>
                        <p className='card-text'> 3 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <a
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Health </a>
                      <div className='md:block hidden'>·</div>
                      <div>42k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-primary-500-soft text-primary dark:text-white flex-1'>
                        Join
                      </button>
                      <button type='button' className='button bg-secondery flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Health </a>
                      <div className='md:block hidden'>·</div>
                      <div>42k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-primary-500-soft text-primary dark:text-white flex-1'>
                        Join
                      </button>
                      <button type='button' className='button bg-secondery flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Delicious Foods </a>
                      <div className='md:block hidden'>·</div>
                      <div>232k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-primary-500-soft text-primary dark:text-white flex-1'>
                        Join
                      </button>
                      <button type='button' className='button bg-secondery flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <a href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <img src='/images/group/group-cover-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <a href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </a>
                    <div className='card-list-info font-normal mt-1'>
                      <a href='#'> Travel </a>
                      <div className='md:block hidden'>·</div>
                      <div>620k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-primary-500-soft text-primary dark:text-white flex-1'>
                        Join
                      </button>
                      <button type='button' className='button bg-secondery flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:my-6 my-3 flex items-center justify-between'>
              <div>
                <h2 className='md:text-lg text-base font-semibold text-black'>Categories</h2>
                <p className='font-normal text-sm text-gray-500 leading-6'>
                  Find a group by browsing top categories.
                </p>
              </div>
              <a href='#' className='text-blue-500 sm:block hidden text-sm'>
                See all
              </a>
            </div>

            <div tabIndex={-1} uk-slider='finite:true'>
              <div className='uk-slider-container pb-1'>
                <ul className='uk-slider-items grid-small'>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img
                          src='/images/category/Buy-and-sell.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>Shopping</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img src='/images/category/health.jpg' alt='' className='h-36 w-full object-cover' />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>health</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img
                          src='/images/category/science-and-tech.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>science</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img src='/images/category/travel.jpg' alt='' className='h-36 w-full object-cover' />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>Travel</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img
                          src='/images/category/business.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>business</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <a href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <img
                          src='/images/category/Buy-and-sell.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='text-white p-5 text-lg leading-3'>Shopping</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <a className='nav-prev' href='#' uk-slider-item='previous'>
                <IoChevronBack />
              </a>
              <a className='nav-next' href='#' uk-slider-item='next'>
                <IoChevronForward />
              </a>
            </div>

            <div className='sm:my-6 my-3 flex items-center justify-between lg:mt-10'>
              <div>
                <h2 className='md:text-lg text-base font-semibold text-black'>Suggestions</h2>
                <p className='font-normal text-sm text-gray-500 leading-6'>
                  Find a groups You Might Be Interested In.
                </p>
              </div>
              <a href='#' className='text-blue-500 sm:block hidden text-sm'>
                See all
              </a>
            </div>

            <div className='grid md:grid-cols-2 md:gap-2 gap-3'>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-4.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Delicious Foods
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 16K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-3.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Abstract minimal
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 18K Members</div>
                    <div>·</div>
                    <div> 16 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>24 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-2.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Delicious Foods
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 19K Members</div>
                    <div>·</div>
                    <div> 21 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>16 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-1.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Graphic Design
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 24K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-3.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Abstract minimal
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 18K Members</div>
                    <div>·</div>
                    <div> 16 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>24 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <img
                    src='/images/group/group-4.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <a
                    href='timeline-group.html'
                    className='md:text-lg text-base font-semibold capitalize text-black dark:text-white'>
                    Delicious Foods
                  </a>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 16K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <img
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-2 border-gray-200 -mr-2'
                      alt=''
                    />
                    <img
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-2 border-gray-200'
                      alt=''
                    />
                    <div className='text-sm text-gray-500 ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button bg-primary-500-soft text-primary dark:text-white gap-1 max-md:hidden'>
                  <IoIosAddCircle /> Join
                </button>
              </div>
            </div>

            <div className='flex justify-center my-6'>
              <button
                type='button'
                className='bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2'>
                Load more...
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
