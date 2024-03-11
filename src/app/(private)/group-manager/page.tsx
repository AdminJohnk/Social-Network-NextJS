/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { IoArrowRedo, IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IGroupManagerProps {}

export default function GroupManager(props: IGroupManagerProps) {
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20 @container/pri z-[1]'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div
            className='flex max-lg:flex-col 2xl:gap-12 gap-10 '
            id='js-oversized'
          >
            <div className='flex-1'>
              <div className='max-w-[680px] w-full mx-auto'>
                <div className='page-heading'>
                  <h1 className='page-title'> Groups </h1>
                </div>

                <div className='box p-5'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Groups You Manage </h3>
                    <a href='#' className='text-sm text-blue-500'>
                      See all
                    </a>
                  </div>
                  <div className='relative mt-2' tabIndex={-1} uk-slider>
                    <div className='overflow-hidden uk-slider-container'>
                      <ul
                        className='-ml-2 uk-slider-items w-[calc(100%+0.5rem)] pt-3 text-center'
                        uk-scrollspy='target: > li; cls: uk-animation-scale-up; delay: 20 ;repeat: true'
                      >
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-1.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Graphic Design
                              </h4>
                              <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-2.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Delicious Foods
                              </h4>
                              <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-3.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Abstract minimal
                              </h4>
                              <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-4.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Delicious Foods
                              </h4>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-5.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Property Rent
                              </h4>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-3.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Abstract minimal
                              </h4>
                              <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-1.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Graphic Design
                              </h4>
                            </div>
                          </a>
                        </li>
                        <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
                          <a href='timeline-group.html'>
                            <div className='relative'>
                              <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                                <img src='/images/group/group-1.jpg' alt='' />
                                <div className='card-overly'></div>
                              </div>
                              <h4 className='card-title text-sm pt-2 line-clamp-1'>
                                Graphic Design
                              </h4>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a
                      className='nav-prev !top-12'
                      href='#'
                      uk-slider-item='previous'
                    >
                      <IoChevronBack />
                    </a>
                    <a
                      className='nav-next !top-12'
                      href='#'
                      uk-slider-item='next'
                    >
                      <IoChevronForward />
                    </a>
                  </div>
                </div>

                <nav className='mt-8 border-border-1 mb-6'>
                  <ul
                    className='flex gap-2 text-xs text-center capitalize font-semibold/80'
                    uk-switcher='connect: #tabs2 ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'
                  >
                    <li>
                      <a
                        href='#'
                        className='inline-flex items-center gap-2 py-2.5 px-4 rounded-full bg-foreground-1 hover:bg-hover-1 duration-300'
                      >
                        Suggestions
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='inline-flex items-center gap-2 py-2.5 px-4 rounded-full bg-foreground-1 hover:bg-hover-1 duration-300'
                      >
                        Popular
                      </a>
                    </li>
                  </ul>
                </nav>

                <div id='tabs2' className='uk-switcher'>
                  <div>
                    <div
                      className='grid md:grid-cols-3 grid-cols-2 gap-2.5'
                      uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'
                    >
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-4.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Delicious Foods </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Abstract minimal </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-2.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Delicious Foods </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Abstract minimal </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-4.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Delicious Foods </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 325 Members</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-5.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-5.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Property Rent </h4>
                          </a>

                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 158 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-2.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Delicious Foods </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-4.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Delicious Foods </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <img
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
                          />
                          <a href='timeline-group.html'>
                            <h4 className='card-title'> Abstract minimal </h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='timeline-group.html'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-center my-6'>
                      <button
                        type='button'
                        className='bg-foreground-1 hover:bg-hover-1 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm'
                      >
                        Load more...
                      </button>
                    </div>
                  </div>

                  <div>
                    <div
                      className='grid md:grid-cols-3 grid-cols-2 gap-2.5'
                      uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'
                    >
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-2.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Delicious Foods</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Abstract minimal</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-4.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Delicious Foods</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 325 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-1.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Graphic Design</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 142 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-2.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Delicious Foods</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Abstract minimal</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-3.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Abstract minimal</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 218 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-2.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Delicious Foods</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 164 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <a href='timeline-group.html'>
                          <div className='card-media h-24'>
                            <img src='/images/group/group-cover-4.jpg' alt='' />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body relative z-10'>
                          <a href='timeline-group.html'>
                            <h4 className='card-title'>Delicious Foods</h4>
                          </a>
                          <div className='card-text mt-1'>
                            <div className='flex items-center flex-wrap space-x-1'>
                              <a href='#'>
                                <span> 325 Members </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-center my-6'>
                      <button
                        type='button'
                        className='py-2 px-5 rounded-full shadow-md font-semibold text-sm'
                      >
                        Load more...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                uk-sticky='media: 1024; end: #js-oversized; offset: 80'
              >
                <div className='box p-5 px-6 bg-foreground-1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Pages You Manage </h3>
                    <a href='#' className='text-sm text-blue-500'>
                      See all
                    </a>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </a>
                        <div className='side-list-info'>Updated 2 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>Edit</button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </a>
                        <div className='side-list-info'>Updated 4 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>Edit</button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </a>
                        <div className='side-list-info'>Updated 3 week ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>Edit</button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-1.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Jesse Steeve</h4>
                        </a>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>Edit</button>
                    </div>
                  </div>
                </div>

                <div className='bg-foreground-1 rounded-xl shadow p-5 px-6 border1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Suggested Manage </h3>
                    <a href='#' className='text-sm text-blue-500'>
                      See all
                    </a>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </a>
                        <div className='side-list-info'>Updated 6 day ago</div>
                      </div>
                      <button className='button bg-primary-soft text-primary bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </a>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button bg-primary-soft text-primary bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </a>
                        <div className='side-list-info'>Updated 1 week ago</div>
                      </div>
                      <button className='button bg-primary-soft text-primary bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-1.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Jesse Steeve</h4>
                        </a>
                        <div className='side-list-info'>Updated 2 day ago</div>
                      </div>
                      <button className='button bg-primary-soft text-primary bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                  </div>

                  <button className='bg-foreground-2 hover:bg-hover-2 duration-300 w-full py-1.5 font-medium px-3.5 rounded-md text-sm mt-3'>
                    See all
                  </button>
                </div>

                <div className='rounded-xl shadow p-5 px-6 border1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Suggested Manage </h3>
                    <a href='#' className='text-sm text-blue-500'>
                      See all
                    </a>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </a>
                        <div className='side-list-info'>Updated 1 week ago</div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 duration-300'>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </a>
                        <div className='side-list-info'>Updated 4 week ago</div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 duration-300'>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <a href='timeline-group.html'>
                        <img
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline-group.html'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </a>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button bg-blue-1 hover:bg-blue-2 duration-300'>
                        Like
                      </button>
                    </div>
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
