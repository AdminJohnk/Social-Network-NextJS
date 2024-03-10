import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoSearch, IoSearchOutline, IoTrash } from 'react-icons/io5';

export default function SearchHeader() {
  return (
    <>
      <div
        id='search--box'
        className='xl:w-[680px] sm:w-96 lg:w-[560px] sm:relative rounded-xl overflow-hidden z-20 bg-foreground-1 max-md/2:hidden w-screen left-0 max-sm:fixed max-sm:top-2'>
        <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2' />
        <input
          type='text'
          placeholder='Search Friends, videos ..'
          className='w-full !pl-10 !font-normal !bg-transparent h-12 !text-sm border-none'
        />
      </div>
      <div
        className='hidden !z-10'
        data-uk-drop='pos: bottom-center ; animation: uk-animation-slide-bottom-small; mode:click'>
        <div className='xl:w-[694px] sm:w-96 lg:w-[574px] bg-hover-1 w-screen p-2 rounded-lg shadow-lg -mt-14 pt-14'>
          <div className='flex justify-between px-2 py-2.5 text-sm font-medium'>
            <div className='text-black dark:text-white'>Recent</div>
            <button type='button' className='text-blue-500'>
              Clear
            </button>
          </div>
          <nav className='text-sm font-medium'>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <Image
                src='/images/home/avatar-2.jpg'
                className='w-9 h-9 rounded-full'
                alt=''
                width={50}
                height={50}
              />
              <div>
                <div>Jesse Steeve</div>
                <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
              </div>
              <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <Image
                src='/images/home/avatar-2.jpg'
                className='w-9 h-9 rounded-full'
                alt=''
                width={50}
                height={50}
              />
              <div>
                <div>Martin Gray</div>
                <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
              </div>
              <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <Image
                src='/images/home/group-2.jpg'
                className='w-9 h-9 rounded-full'
                alt=''
                width={50}
                height={50}
              />
              <div>
                <div>Delicious Foods</div>
                <div className='text-xs text-rose-500 font-medium mt-0.5'>Group</div>
              </div>
              <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <Image
                src='/images/home/group-1.jpg'
                className='w-9 h-9 rounded-full'
                alt=''
                width={50}
                height={50}
              />
              <div>
                <div>Delicious Foods</div>
                <div className='text-xs text-yellow-500 font-medium mt-0.5'>Page</div>
              </div>
              <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <Image
                src='/images/home/avatar-6.jpg'
                className='w-9 h-9 rounded-full'
                alt=''
                width={50}
                height={50}
              />
              <div>
                <div>John Welim</div>
                <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
              </div>
              <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <IoSearchOutline className='text-2xl' />
              Creative ideas about Business
            </Link>
            <Link
              href='#'
              className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
              <IoSearchOutline className='text-2xl' />8 Facts About Writting
            </Link>
          </nav>
          <div className='flex justify-end pr-2 text-sm font-medium text-red-500'>
            <Link href='#' className='flex hover:bg-red-50 dark:hover:bg-slate-800 p-1.5 rounded'>
              <IoTrash className='mr-2 text-lg' />
              Clear your history
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
