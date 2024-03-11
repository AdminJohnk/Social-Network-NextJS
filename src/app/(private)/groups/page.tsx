import { TabTitle, Tabs } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IGroupProps {}

export default function Group(props: IGroupProps) {
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20 @container/pri z-[1]'>
      <div className='groups px-40 py-5'>
        <main id='site__main' className=''>
          <div className='2xl:max-w-[1220px]'>
            <div className='page-heading'>
              <h1 className='page-title'> Groups </h1>

              <Tabs id='group-tabs' disableChevron>
                <TabTitle>Suggestions</TabTitle>
                <TabTitle>Popular</TabTitle>
                <TabTitle>My groups</TabTitle>
              </Tabs>
            </div>

            <div className='uk-switcher' id='group-tabs'>
              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body relative z-10'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
                    />
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Travel </Link>
                      <div className='md:block hidden'>·</div>
                      <div> 232k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body relative z-10'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-3.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
                    />
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Technology </Link>
                      <div className='md:block hidden'>·</div>
                      <div> 328k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body relative z-10'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
                    />
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Business </Link>
                      <div className='md:block hidden'>·</div>
                      <div> 436k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body relative z-10'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      alt=''
                      className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
                    />
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Design </Link>
                      <div className='md:block hidden'>·</div>
                      <div> 420k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/product/product-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </Link>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <Link href='#'> Education </Link>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                        </div>
                        <p className='card-text'> 6 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/product/product-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <Link href='#'> Education </Link>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                        </div>
                        <p className='card-text'> 8 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/product/product-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>232k members </div>
                        <div className='md:block hidden'>·</div>
                        <Link href='#'> Education </Link>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-4.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                        </div>
                        <p className='card-text'> 12 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/product/product-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </Link>
                    <div className='card-text'>
                      <div className='card-list-info font-normal mt-1'>
                        <div>360k members </div>
                        <div className='md:block hidden'>·</div>
                        <Link href='#'> Education </Link>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <div className='flex -space-x-2'>
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-2.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-3.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                          <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-7.jpg'
                            alt=''
                            className='w-6 rounded-full border-border-1'
                          />
                        </div>
                        <p className='card-text'> 3 friend are members </p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
                        Join
                      </button>
                      <Link
                        href='timeline-group.html'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Health </Link>
                      <div className='md:block hidden'>·</div>
                      <div>42k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <button
                        type='button'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-1.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Graphic Design </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Health </Link>
                      <div className='md:block hidden'>·</div>
                      <div>42k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <button
                        type='button'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Abstract minimal </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Delicious Foods </Link>
                      <div className='md:block hidden'>·</div>
                      <div>232k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <button
                        type='button'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <Link href='timeline-group.html'>
                    <div className='card-media h-24'>
                      <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
                      <div className='card-overlay'></div>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link href='timeline-group.html'>
                      <h4 className='card-title'> Delicious Foods </h4>
                    </Link>
                    <div className='card-list-info font-normal mt-1'>
                      <Link href='#'> Travel </Link>
                      <div className='md:block hidden'>·</div>
                      <div>620k members </div>
                    </div>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'>
                        Join
                      </button>
                      <button
                        type='button'
                        className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:my-6 my-3 flex items-center justify-between'>
              <div>
                <h2 className='h5-semibold'>Categories</h2>
                <p className='base-regular text-text-2 first-line:leading-6'>
                  Find a group by browsing top categories.
                </p>
              </div>
              <Link href='#' className='text-blue-500 sm:block hidden text-sm'>
                See all
              </Link>
            </div>

            <div tabIndex={-1} data-uk-slider='finite:true'>
              <div className='uk-slider-container pb-1'>
                <ul className='uk-slider-items grid-small'>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/Buy-and-sell.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>Shopping</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/health.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>health</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/science-and-tech.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>science</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/travel.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>Travel</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/business.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>business</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='md:w-1/5 sm:w-1/3 w-1/2'>
                    <Link href='#'>
                      <div className='relative rounded-lg overflow-hidden'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/category/Buy-and-sell.jpg'
                          alt=''
                          className='h-36 w-full object-cover'
                        />
                        <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                          <div className='p-5 text-lg leading-3'>Shopping</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <Link className='nav-prev' href='#' data-uk-slider-item='previous'>
                <IoChevronBack />
              </Link>
              <Link className='nav-next' href='#' data-uk-slider-item='next'>
                <IoChevronForward />
              </Link>
            </div>

            <div className='sm:my-6 my-3 flex items-center justify-between lg:mt-10'>
              <div>
                <h2 className='h5-semibold'>Suggestions</h2>
                <p className='base-regular text-text-2 leading-6'>
                  Find a groups You Might Be Interested In.
                </p>
              </div>
              <Link href='#' className='text-blue-500 sm:block hidden text-sm'>
                See all
              </Link>
            </div>

            <div className='grid md:grid-cols-2 md:gap-2 gap-3 *:bg-foreground-1'>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-4.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Delicious Foods
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 16K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-3.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Abstract minimal
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 18K Members</div>
                    <div>·</div>
                    <div> 16 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 -mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>24 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-2.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Delicious Foods
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 19K Members</div>
                    <div>·</div>
                    <div> 21 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 -mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>16 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-1.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Graphic Design
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 24K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 -mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-3.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Abstract minimal
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 18K Members</div>
                    <div>·</div>
                    <div> 16 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 -mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>24 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
              <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
                <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/group/group-4.jpg'
                    className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
                    alt=''
                  />
                </div>
                <div className='flex-1'>
                  <Link href='timeline-group.html' className='md:text-lg text-base font-semibold capitalize'>
                    Delicious Foods
                  </Link>
                  <div className='flex space-x-2 items-center text-sm font-normal'>
                    <div> 16K Members</div>
                    <div>·</div>
                    <div> 12 posts a week</div>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-2.jpg'
                      className='w-6 rounded-full border-border-1 -mr-2'
                      alt=''
                    />
                    <Image
                      width={500}
                      height={500}
                      src='/images/avatars/avatar-4.jpg'
                      className='w-6 rounded-full border-border-1'
                      alt=''
                    />
                    <div className='text-sm ml-2'>14 friends are members</div>
                  </div>
                </div>
                <button
                  type='button'
                  className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 text-primary gap-1 max-md:hidden'>
                  <IoIosAddCircle className='size-5' /> <span>Join</span>
                </button>
              </div>
            </div>

            <div className='flex justify-center my-6'>
              <button
                type='button'
                className='bg-foreground-2 hover:bg-hover-2 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm '>
                Load more...
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
