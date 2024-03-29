import Image from 'next/image';
import { Link } from '@/navigation';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

export default function LogoHeader() {
  return (
    <div className='2xl:w-[--w-side] lg:w-[--w-side-sm]'>
      <div className='flex items-center gap-1'>
        <button
          data-uk-toggle='target: #site_sidebar ; cls :!-translate-x-0'
          className='flex items-center justify-center w-8 h-8 text-xl rounded-full hover:bg-gray-100 lg:hidden dark:hover:bg-slate-600 group'>
          <IoMenuOutline className='text-2xl group-aria-expanded:hidden' />
          <IoCloseOutline className='hidden text-2xl group-aria-expanded:block' />
        </button>
        <div id='logo'>
          <Link href=''>
            <Image
              src='/images/home/logo.png'
              alt=''
              className='w-28 md:block hidden dark:!hidden'
              width={200}
              height={100}
              priority
            />
            <Image
              src='/images/home/logo-light.png'
              alt=''
              className='dark:md:block hidden w-28'
              width={200}
              height={100}
              priority
            />
            <Image
              src='/images/home/logo-mobile.png'
              className='hidden max-md:block w-20 dark:!hidden'
              alt=''
              width={200}
              height={100}
              priority
            />
            <Image
              src='/images/home/logo-mobile-light.png'
              className='hidden dark:max-md:block w-20'
              alt=''
              width={200}
              height={100}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
