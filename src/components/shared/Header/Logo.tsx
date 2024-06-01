import { Link } from '@/navigation';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import Logo from '../Logo';

export default function LogoHeader() {
  return (
    <div className='2xl:w-[--w-side] lg:w-[--w-side-sm]'>
      <div className='flex items-center gap-1'>
        <button
          data-uk-toggle='target: #site_sidebar ; cls: !-translate-x-0'
          className='flex items-center justify-center w-8 h-8 text-xl rounded-full hover:bg-gray-100 lg/2:hidden dark:hover:bg-slate-600 group'>
          <IoMenuOutline className='text-2xl group-aria-expanded:hidden' />
          <IoCloseOutline className='hidden text-2xl group-aria-expanded:block' />
        </button>
        <div id='logo'>
          <Link href='/' className='flex-start'>
            <Logo className='text-2xl' rootClassName='icon_logo_mini' />
            <h1 className='text-2xl font-semibold ml-2 select-none max-md:hidden'>DevHub</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
