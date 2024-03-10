import Image from 'next/image';
import Link from 'next/link';

import { Sidebar } from '@/lib/Navigator/Sidebar';
import { cn } from '@/lib/utils';

export default function MainNavigate() {
  return (
    <nav id='side'>
      <ul>
        {Sidebar.map((item, index) => (
          <li key={index} id={cn(item.showMore && 'show_more')} className={cn(item.showMore && '!hidden')}>
            <Link href={item.href}>
              <Image src={item.image} alt={item.label} width={24} height={24} />
              <span> {item.label} </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type='button'
        className='flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-black dark:text-white'
        data-uk-toggle='target: #show_more; cls: !hidden uk-animation-fade'>
        <svg
          id='show_more'
          className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <svg
          id='show_more'
          className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700 rotate-180 !hidden'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span id='show_more'> See More </span>
        <span className='!hidden' id='show_more'>
          See Less
        </span>
      </button>
    </nav>
  );
}
