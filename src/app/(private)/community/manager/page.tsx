import ComPopularList from '@/components/pages/Community/Manager/ComPopularList';
import ComSuggestionList from '@/components/pages/Community/Manager/ComSuggestionList';
import ComYouManage from '@/components/pages/Community/Manager/ComYouManage';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

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
                  <h1 className='page-title'> Communities </h1>
                </div>

                <ComYouManage />

                <nav className='mt-8 border-border-1 mb-6'>
                  <ul
                    className='flex gap-2 text-xs text-center capitalize font-semibold/80'
                    data-uk-switcher='connect: #tabs2 ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'
                  >
                    <li>
                      <Link
                        href='#'
                        className='inline-flex items-center gap-2 py-2.5 px-4 rounded-full bg-foreground-1 hover:bg-hover-1 duration-300'
                      >
                        Suggestions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='inline-flex items-center gap-2 py-2.5 px-4 rounded-full bg-foreground-1 hover:bg-hover-1 duration-300'
                      >
                        Popular
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div id='tabs2' className='uk-switcher'>
                  <ComSuggestionList />
                  <ComPopularList />
                </div>
              </div>
            </div>

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-sticky='media: 1024; end: #js-oversized; offset: 80'
              >
                <div className='box p-5 px-6 bg-foreground-1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Pages You Manage </h3>
                    <Link href='#' className='text-sm text-blue-500'>
                      See all
                    </Link>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </Link>
                        <div className='side-list-info'>Updated 2 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                        Edit
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </Link>
                        <div className='side-list-info'>Updated 4 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                        Edit
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </Link>
                        <div className='side-list-info'>Updated 3 week ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                        Edit
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-1.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Jesse Steeve</h4>
                        </Link>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>

                <div className='bg-foreground-1 rounded-xl shadow p-5 px-6 border1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Suggested Manage </h3>
                    <Link href='#' className='text-sm text-blue-500'>
                      See all
                    </Link>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </Link>
                        <div className='side-list-info'>Updated 6 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </Link>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </Link>
                        <div className='side-list-info'>Updated 1 week ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-1.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Jesse Steeve</h4>
                        </Link>
                        <div className='side-list-info'>Updated 2 day ago</div>
                      </div>
                      <button className='button bg-foreground-2 hover:bg-hover-2 duration-300 '>
                        Like
                      </button>
                    </div>
                  </div>

                  <button className='bg-foreground-2 hover:bg-hover-2 duration-300 w-full py-1.5 font-medium px-3.5 rounded-md text-sm mt-3'>
                    See all
                  </button>
                </div>

                <div className='bg-foreground-1 rounded-xl shadow p-5 px-6 border1'>
                  <div className='flex items-baseline justify-between'>
                    <h3 className='font-bold text-base'> Suggested Manage </h3>
                    <Link href='#' className='text-sm text-blue-500'>
                      See all
                    </Link>
                  </div>

                  <div className='side-list'>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-2.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> John Michael</h4>
                        </Link>
                        <div className='side-list-info'>Updated 1 week ago</div>
                      </div>
                      <button className='button text-white bg-blue-1 hover:bg-blue-2 duration-300'>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-4.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Martin Gray</h4>
                        </Link>
                        <div className='side-list-info'>Updated 4 week ago</div>
                      </div>
                      <button className='button text-white bg-blue-1 hover:bg-blue-2 duration-300'>
                        Like
                      </button>
                    </div>
                    <div className='side-list-item'>
                      <Link href='/groups'>
                        <Image
                          width={500}
                          height={500}
                          src='/images/avatars/avatar-3.jpg'
                          alt=''
                          className='side-list-image rounded-md'
                        />
                      </Link>
                      <div className='flex-1'>
                        <Link href='/groups'>
                          <h4 className='side-list-title'> Monroe Parker</h4>
                        </Link>
                        <div className='side-list-info'>
                          Updated 2 month ago
                        </div>
                      </div>
                      <button className='button text-white bg-blue-1 hover:bg-blue-2 duration-300'>
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
