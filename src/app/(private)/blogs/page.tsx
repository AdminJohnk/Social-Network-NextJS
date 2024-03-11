/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {
  IoArrowRedo,
  IoChevronBack,
  IoChevronForward,
  IoChatbubbleEllipsesOutline,
  IoSync,
  IoChatboxOutline,
  IoThumbsUpOutline,
  IoPersonAddOutline
} from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import Image from 'next/image';

export interface IBlogProps {}

export default function Blog(props: IBlogProps) {
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div className='flex max-lg:flex-col 2xl:gap-12 gap-10' id='js-oversized'>
            <div className='flex-1'>
              <div className='page-heading'>
                <h1 className='page-title'> Articles </h1>

                <nav className='nav__underline'>
                  <ul
                    className='group'
                    data-uk-switcher='connect: #ttabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'>
                    <li>
                      <a href='#'> Suggestions </a>
                    </li>
                    <li>
                      <a href='#'> Popular </a>
                    </li>
                    <li>
                      <a href='#'> My article </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div tabIndex={-1} data-uk-slider='finite:true'>
                <div className='uk-slider-container pb-1'>
                  <ul className='uk-slider-items grid-small'>
                    <li className='sm:w-1/3 w-1/2'>
                      <div className='card'>
                        <a href='blog-read.html'>
                          <div className='card-media h-32'>
                            <Image src='/images/blog/img-1.jpg' alt='' width={1000} height={1000} />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body'>
                          <a href='blog-read.html'>
                            <h4 className='card-title text-sm line-clamp-2'>
                              Top amazing web demos and experiments in 2024 should know about
                            </h4>
                          </a>
                          <p className='card-text text-xs mt-1.5'>
                            <a href='#'> Jesse Steeve </a>
                          </p>
                          <div className='card-list-info mt-1 text-xs'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='sm:w-1/3 w-1/2'>
                      <div className='card'>
                        <a href='blog-read.html'>
                          <div className='card-media h-32'>
                            <Image src='/images/blog/img-2.jpg' alt='' width={1000} height={1000} />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body'>
                          <a href='blog-read.html'>
                            <h4 className='card-title text-sm line-clamp-2'>
                              Awesome web dev tools and resources for 2024 in 30 minutes
                            </h4>
                          </a>
                          <p className='card-text text-xs mt-1.5'>
                            <a href='#'> John Michael</a>
                          </p>
                          <div className='card-list-info mt-1 text-xs'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='sm:w-1/3 w-1/2'>
                      <div className='card'>
                        <a href='blog-read.html'>
                          <div className='card-media h-32'>
                            <Image src='/images/blog/img-3.jpg' alt='' width={1000} height={1000} />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body'>
                          <a href='blog-read.html'>
                            <h4 className='card-title text-sm line-clamp-2'>
                              Interesting JavaScript and CSS libraries should Know About
                            </h4>
                          </a>
                          <p className='card-text text-xs mt-1.5'>
                            <a href='#'> Monroe Parker </a>
                          </p>
                          <div className='card-list-info mt-1 text-xs'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='sm:w-1/3 w-1/2'>
                      <div className='card'>
                        <a href='blog-read.html'>
                          <div className='card-media h-32'>
                            <Image src='/images/blog/img-4.jpg' alt='' width={1000} height={1000} />
                            <div className='card-overly'></div>
                          </div>
                        </a>
                        <div className='card-body'>
                          <a href='blog-read.html'>
                            <h4 className='card-title text-sm line-clamp-2'>
                              Interesting javaScript and CSS libraries you should be learn
                            </h4>
                          </a>
                          <p className='card-text text-xs mt-1.5'>
                            <a href='#'> Martin Gray </a>
                          </p>
                          <div className='card-list-info mt-1 text-xs'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <a className='nav-prev !top-24' href='#' data-uk-slider-item='previous'>
                  <IoChevronBack />
                </a>
                <a className='nav-next !top-24' href='#' data-uk-slider-item='next'>
                  <IoChevronForward />
                </a>
              </div>

              <div className='card mt-8'>
                <div className='card-media md:h-80 h-52'>
                  <Image src='/images/group/group-cover-1.jpg' alt='' width={1200} height={1200} />
                  <div className='card-overly'></div>
                </div>
                <div className='card-body p-5 w-full z-10 absolute bg-gradient-to-t bottom-0 from-black/60'>
                  <p className='card-text'>
                    <a href='#'> Denise Marie </a>
                  </p>
                  <h4 className='card-title text-xl mt-1.5'>Exploring an Abandoned Water Park in China</h4>

                  <div className='card-list-info font-medium text-xs mt-1.5 gap-2.5'>
                    <div className='flex items-center gap-1.5 text-sm'>
                      27
                      <IoThumbsUpOutline />
                    </div>
                    <div className='flex items-center gap-1.5 text-sm'>
                      156.9K <IoChatboxOutline />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-foreground-1 p-6 rounded-md mt-8 shadow'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>Recommended Writers for you</h3>
                  <a href='#' className='text-sm text-blue-500 flex items-center gap-2'>
                    See all <IoChevronForward />
                  </a>
                </div>

                <div className='grid sm:grid-cols-2 gap-3 mt-4'>
                  <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-5.jpg'
                        alt=''
                        className='rounded-full w-10 h-10'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='side-list-title'> James Lewis</h4>
                      </a>
                      <div className='side-list-info'> 42 articles </div>
                    </div>
                    <button type='button' className='button-icon bg-primary-soft text-primary'>
                      <IoPersonAddOutline className='size-5' />
                    </button>
                  </div>
                  <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-4.jpg'
                        alt=''
                        className='rounded-full w-10 h-10'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='side-list-title'> Martin Gray</h4>
                      </a>
                      <div className='side-list-info'> 25 articles </div>
                    </div>
                    <button type='button' className='button-icon bg-primary-soft text-primary'>
                      <IoPersonAddOutline className='size-5' />
                    </button>
                  </div>
                  <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='rounded-full w-10 h-10'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='side-list-title'> Monroe Parker</h4>
                      </a>
                      <div className='side-list-info'> 15 articles </div>
                    </div>
                    <button type='button' className='button-icon bg-primary-soft text-primary'>
                      <IoPersonAddOutline className='size-5' />
                    </button>
                  </div>
                  <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-7.jpg'
                        alt=''
                        className='rounded-full w-10 h-10'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='side-list-title'> Jesse Steeve</h4>
                      </a>
                      <div className='side-list-info'> 36 articles </div>
                    </div>
                    <button type='button' className='button-icon bg-primary-soft text-primary'>
                      <IoPersonAddOutline className='size-5' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between py-3 mt-8'>
                <h3 className='text-xl font-semibold'> Articles for you </h3>
                <a href='#' className='text-sm text-blue-500'>
                  See all
                </a>
              </div>

              <div className='box p-5 mt-4'>
                <div className='card-list'>
                  <a href='blog-read.html' className='lg:order-1'>
                    <div className='card-list-media h-32'>
                      <Image src='/images/blog/img-2.jpg' alt='' width={1000} height={1000} />
                    </div>
                  </a>
                  <div className='card-list-body'>
                    <a href='blog-read.html'>
                      <h3 className='card-list-title'>
                        Top amazing web demos and experiments in 2024 should know about
                      </h3>
                    </a>
                    <p className='card-list-text'>
                      consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wiis enim ad minim veniam,
                    </p>
                    <a href='#'>
                      <div className='card-list-link'> Jesse Steeve </div>
                    </a>
                    <div className='card-list-info'>
                      <div className='flex items-center gap-2'>
                        <CiHeart className='size-5' />
                        45
                      </div>
                      <div className='md:block hidden'>·</div>
                      <div className='flex items-center gap-2'>
                        <IoChatbubbleEllipsesOutline className='size-5' />
                        156.9K
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='card-list-divider' />
                <div className='card-list'>
                  <a href='blog-read.html' className='lg:order-1'>
                    <div className='card-list-media h-32'>
                      <Image src='/images/blog/img-3.jpg' alt='' width={1000} height={1000} />
                    </div>
                  </a>
                  <div className='card-list-body'>
                    <a href='blog-read.html'>
                      <h3 className='card-list-title'>
                        Interesting JavaScript and CSS libraries should Know About
                      </h3>
                    </a>
                    <p className='card-list-text'>
                      consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wiis enim ad minim veniam,
                    </p>
                    <a href='#'>
                      <div className='card-list-link'> Monroe Parker </div>
                    </a>
                    <div className='card-list-info'>
                      <div className='flex items-center gap-2'>
                        <CiHeart className='size-5' />
                        45
                      </div>
                      <div className='md:block hidden'>·</div>
                      <div className='flex items-center gap-2'>
                        <IoChatbubbleEllipsesOutline className='size-5' />
                        156.9K
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='card-list-divider' />
                <div className='card-list'>
                  <a href='blog-read.html' className='lg:order-1'>
                    <div className='card-list-media h-32'>
                      <Image src='/images/blog/img-4.jpg' alt='' width={1000} height={1000} />
                    </div>
                  </a>
                  <div className='card-list-body'>
                    <a href='blog-read.html'>
                      <h3 className='card-list-title'>
                        Interesting javaScript and CSS libraries you should be learn
                      </h3>
                    </a>
                    <p className='card-list-text'>
                      consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wiis enim ad minim veniam,
                    </p>
                    <a href='#'>
                      <div className='card-list-link'> Martin Gray </div>
                    </a>
                    <div className='card-list-info'>
                      <div className='flex items-center gap-2'>
                        <CiHeart className='size-5' />
                        45
                      </div>
                      <div className='md:block hidden'>·</div>
                      <div className='flex items-center gap-2'>
                        <IoChatbubbleEllipsesOutline className='size-5' />
                        156.9K
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-center my-6'>
                <button
                  type='button'
                  className='py-2 px-5 rounded-full shadow-md font-semibold text-sm bg-foreground-1 hover:bg-hover-1 duration-300 '>
                  Load more...
                </button>
              </div>
            </div>

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'>
                <div
                  className='relative uk-visible-toggle'
                  tabIndex={-1}
                  data-uk-slideshow='finite: true ; min-height: 300; max-height: 500'>
                  <ul className='uk-slideshow-items'>
                    <li className='w-full overflow-hidden rounded-xl'>
                      <Image
                        src='/images/blog/img-3.jpg'
                        alt=''
                        className='w-full h-full object-cover'
                        width={1000}
                        height={1000}
                      />
                      <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
                        <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
                          <a href='timeline.html'>
                            <h4 className='text-sm font-medium'>
                              Interesting JavaScript and CSS libraries should Know About
                            </h4>
                          </a>
                          <div className='text-xs mt-2 flex items-center gap-2'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='w-full overflow-hidden rounded-md'>
                      <Image
                        src='/images/blog/img-2.jpg'
                        alt=''
                        className='w-full h-full object-cover'
                        width={1000}
                        height={1000}
                      />
                      <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
                        <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
                          <a href='timeline.html'>
                            <h4 className='text-sm font-medium'>
                              Awesome web dev tools and resources for 2024 in 30 minutes
                            </h4>
                          </a>
                          <div className='text-xs mt-2 flex items-center gap-2'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='w-full overflow-hidden rounded-md'>
                      <Image
                        src='/images/blog/img-4.jpg'
                        alt=''
                        className='w-full h-full object-cover'
                        width={1000}
                        height={1000}
                      />
                      <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
                        <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
                          <a href='timeline.html'>
                            <h4 className='text-sm font-medium'>
                              Interesting javaScript and CSS libraries you should be learn
                            </h4>
                          </a>
                          <div className='text-xs mt-2 flex items-center gap-2'>
                            <div> 10 Jun 2022 </div>
                            <div className='md:block hidden'>·</div>
                            <div> 156.9K views</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className='flex justify-center'>
                    <ul className='inline-flex flex-wrap justify-center  absolute bottom-3 gap-1.5 uk-dotnav uk-slideshow-nav'></ul>
                  </div>

                  <a className='nav-prev' href='#' data-uk-slideshow-item='previous'>
                    <IoChevronBack />
                  </a>
                  <a className='nav-next' href='#' data-uk-slideshow-item='next'>
                    <IoChevronForward />
                  </a>
                </div>

                <div className='box p-5 px-6 bg-foreground-1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Trending Articles</h3>
                    <a href='#' className='text-sm text-blue-500'>
                      See all
                    </a>
                  </div>

                  <div className='mt-4 space-y-4'>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='duration-200 hover:opacity-80'>
                          Interesting javaScript and CSS libraries you should be learn
                        </h4>
                      </a>
                      <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='duration-200 hover:opacity-80'>
                          Interesting javaScript and CSS libraries you should be learn
                        </h4>
                      </a>
                      <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='duration-200 hover:opacity-80'>
                          Interesting JavaScript and CSS libraries should Know About
                        </h4>
                      </a>
                      <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='duration-200 hover:opacity-80'>
                          Top amazing web demos and experiments should know about
                        </h4>
                      </a>
                      <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='box p-5 px-6 border1 bg-foreground-1'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold text-base'>People You might know</h3>
                    <button type='button'>
                      <IoSync className='size-5' />
                    </button>
                  </div>

                  <div className='space-y-4 capitalize text-xs font-normal mt-5 mb-2'>
                    <div className='flex items-center gap-3'>
                      <a href='timeline.html'>
                        <Image
                          src='/images/avatars/avatar-7.jpg'
                          alt=''
                          className='rounded-full w-10 h-10'
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline.html'>
                          <h4 className='font-semibold text-sm'>Johnson smith</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Follow
                      </button>
                    </div>
                    <div className='flex items-center gap-3'>
                      <a href='timeline.html'>
                        <Image
                          src='/images/avatars/avatar-5.jpg'
                          alt=''
                          className='rounded-full w-10 h-10'
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline.html'>
                          <h4 className='font-semibold text-sm'>James Lewis</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Followed by Johnson </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Follow
                      </button>
                    </div>
                    <div className='flex items-center gap-3'>
                      <a href='timeline.html'>
                        <Image
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='rounded-full w-10 h-10'
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline.html'>
                          <h4 className='font-semibold text-sm'>John Michael</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Followed by Monroe </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Follow
                      </button>
                    </div>
                    <div className='flex items-center gap-3'>
                      <a href='timeline.html'>
                        <Image
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='rounded-full w-10 h-10'
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline.html'>
                          <h4 className='font-semibold text-sm'>Monroe Parker</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Follow
                      </button>
                    </div>
                    <div className='flex items-center gap-3'>
                      <a href='timeline.html'>
                        <Image
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='rounded-full w-10 h-10'
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className='flex-1'>
                        <a href='timeline.html'>
                          <h4 className='font-semibold text-sm'>Martin Gray</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Follow
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
