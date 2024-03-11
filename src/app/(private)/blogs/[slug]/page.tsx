import Image from 'next/image';
import { IoArrowRedo, IoChevronBack, IoChevronDown, IoSync } from 'react-icons/io5';

export interface IBlogDetailProps { }

export default function BlogDetail(props: IBlogDetailProps) {
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20 @container/pri z-[1]'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div className='flex 2xl:gap-12 max-lg:flex-col gap-10' id='js-oversized'>
            <div className='flex-1'>
              <div className='box overflow-hidden bg-foreground-1'>
                <div className='relative h-80'>
                  <Image
                    src='/images/blog/img-5.jpg'
                    className='mb-4 w-full h-full object-cover'
                    alt=''
                    width={1000}
                    height={1000}
                  />

                  <div className='p-6 w-full z-10 absolute bg-gradient-to-t bottom-0 hidden'>
                    <h1 className='text-xl font-semibold'>How designers estimate the impact of UX?</h1>

                    <div className='flex items-center gap-5 mt-4'>
                      <div className='w-6 h-6 flex-shrink-0 rounded-md relative'>
                        <Image
                          src='/images/avatars/avatar-7.jpg'
                          className='absolute w-full h-full inset-0 rounded-full object-cover'
                          alt=''
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-medium'> Steeve </h4>
                        <div className='small-regular'> 2 hours ago</div>
                      </div>
                      <div className='ml -auto'>Business</div>
                      <div className='ml-auto'>November 1, 2022</div>
                    </div>
                  </div>
                </div>
                <div className='p-6'>
                  <h1 className='text-xl font-semibold mt-1'>How designers estimate the impact of UX?</h1>

                  <div className='flex gap-3 mt-6'>
                    <Image
                      src='/images/avatars/avatar-5.jpg'
                      alt=''
                      className='w-9 h-9 rounded-full'
                      width={50}
                      height={50}
                    />
                    <div className='flex-1'>
                      <h4 className='font-medium'>Steeve</h4>
                      <div className='small-regular text-text-2'>2 hours ago</div>
                    </div>
                    <div className='font-normal gap-1'>
                      <span className='ml -auto text-text-3'> Business </span>
                      <span className='ml-auto text-text-2'>Sep 15, 2023</span>
                    </div>
                  </div>

                  <div className='space-y-2 font-normal mt-6 leading-6'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo , consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                </div>
              </div>

              <br />

              <div className='box p-5 px-6 relative bg-foreground-1'>
                <h3 className='font-semibold text-base'>Comments</h3>

                <div className=' font-normal space-y-4 relative mt-4'>
                  <div className='flex items-start gap-3 relative'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-6 h-6 mt-1 rounded-full'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html' className='font-medium inline-block'>
                        Monroe Parker
                      </a>
                      <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3 relative'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-6 h-6 mt-1 rounded-full'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html' className='font-medium inline-block'>
                        John Michael
                      </a>
                      <p className='mt-0.5'> You captured the moment.😎 </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3 relative'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-5.jpg'
                        alt=''
                        className='w-6 h-6 mt-1 rounded-full'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html' className='font-medium inline-block'>
                        James Lewis
                      </a>
                      <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3 relative'>
                    <a href='timeline.html'>
                      <Image
                        src='/images/avatars/avatar-4.jpg'
                        alt=''
                        className='w-6 h-6 mt-1 rounded-full'
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className='flex-1'>
                      <a href='timeline.html' className='font-medium inline-block'>
                        Martin
                      </a>
                      <p className='mt-0.5'> You captured the moment.😎 </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type='button'
                      className='flex items-center gap-1.5 text-blue-500 hover:text-blue-500 my-5'>
                      <IoChevronDown />
                      More Comment
                    </button>
                  </div>
                </div>

                <div className='sm:px-4 sm:py-3 p-2.5 border-t border-border-1 flex items-center gap-1 -m-6 mt-0 bg-foreground-2'>
                  <Image
                    src='/images/avatars/avatar-7.jpg'
                    alt=''
                    className='w-6 h-6 rounded-full'
                    width={50}
                    height={50}
                  />

                  <div className='flex-1 relative overflow-hidden h-10'>
                    <textarea
                      placeholder='Add Comment....'
                      rows={1}
                      className='w-full resize-none !bg-transparent px-4 py-2 !border-transparent !ring-transparent placeholder:text-text-1 placeholder:base-regular'
                      aria-haspopup='true'
                      aria-expanded='false'></textarea>
                    <div className='!top-2 pr-2 uk-drop' uk-drop='pos: bottom-right; mode: click'>
                      <div
                        className='flex items-center gap-2'
                        data-uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-6 h-6 fill-sky-600'
                          style={{ opacity: 0 }}>
                          <path
                            fill-rule='evenodd'
                            d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                            clip-rule='evenodd'></path>
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='w-5 h-5 fill-pink-600'
                          style={{ opacity: 0 }}>
                          <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z'></path>
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

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                uk-sticky='media: 1024; end: #js-oversized; offset: 80'>
                <div className='box p-5 px-6 bg-foreground-1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Trending Articles</h3>
                    <a href='#' className='text-blue-500'>
                      See all
                    </a>
                  </div>

                  <div className='mt-4 space-y-4'>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='font-normal duration-300 hover:opacity-80'>
                          Interesting javaScript and CSS libraries you should be learn
                        </h4>
                      </a>
                      <div className='small-regular mt-2 flex items-center gap-2 text-text-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='font-normal duration-300 hover:opacity-80'>
                          Interesting javaScript and CSS libraries you should be learn
                        </h4>
                      </a>
                      <div className='small-regular mt-2 flex items-center gap-2 text-text-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='font-normal duration-300 hover:opacity-80'>
                          Interesting JavaScript and CSS libraries should Know About
                        </h4>
                      </a>
                      <div className='small-regular mt-2 flex items-center gap-2 text-text-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                    <div>
                      <a href='blog-read.html'>
                        <h4 className='font-normal duration-300 hover:opacity-80'>
                          Top amazing web demos and experiments should know about
                        </h4>
                      </a>
                      <div className='small-regular mt-2 flex items-center gap-2 text-text-2'>
                        <div> 10 Jun 2022 </div>
                        <div className='md:block hidden'>·</div>
                        <div> 156.9K views</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='box p-5 px-6 bg-foreground-1'>
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
                          <h4 className='base-semibold'>Johnson smith</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300'>
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
                          <h4 className='base-semibold'>James Lewis</h4>
                        </a>
                        <div className='mt-0.5'> Followed by Johnson </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300'>
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
                          <h4 className='base-semibold'>John Michael</h4>
                        </a>
                        <div className='mt-0.5'> Followed by Monroe </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300'>
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
                          <h4 className='base-semibold'>Monroe Parker</h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300'>
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
                          <h4 className='base-semibold'>Martin </h4>
                        </a>
                        <div className='mt-0.5 text-text-2'> Suggested For You </div>
                      </div>
                      <button
                        type='button'
                        className='text-sm rounded-full py-1.5 px-4 bg-foreground-2 hover:bg-hover-2 duration-300'>
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
