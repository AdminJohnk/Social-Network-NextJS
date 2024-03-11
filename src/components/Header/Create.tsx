import Image from 'next/image';
import Link from 'next/link';
import {
  IoAdd,
  IoAddCircleOutline,
  IoBook,
  IoCamera,
  IoChevronBack,
  IoChevronForward,
  IoHappy,
  IoLocation,
  IoVideocam
} from 'react-icons/io5';

export default function CreateHeader() {
  return (
    <>
      <button
        type='button'
        className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1'
        data-uk-tooltip='title: Create; pos: bottom; offset:6'>
        <IoAdd className='w-5 h-5 max-sm:hidden' />
        <IoAddCircleOutline className='sm:hidden text-2xl' />
      </button>

      <div
        className='hidden bg-foreground-2 p-4 rounded-lg drop-shadow-xl md:w-[324px] w-screen border-border-1'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <h3 className='font-bold text-xl text-text-1'>Create</h3>

        <div className='mt-4' tabIndex={-1} data-uk-slider='finite:true;sets: true'>
          <div className='uk-slider-container pb-1'>
            <ul
              className='uk-slider-items grid-small'
              data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-right-small; delay: 20 ;repeat: true'>
              <li className='w-28' data-uk-scrollspy-class='uk-animation-fade'>
                <div className='p-3 px-4 rounded-lg text-teal-600 bg-foreground-1'>
                  <IoBook className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>Story</div>
                </div>
              </li>
              <li className='w-28'>
                <div className='p-3 px-4 rounded-lg text-sky-600 bg-foreground-1'>
                  <IoCamera className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>Post</div>
                </div>
              </li>
              <li className='w-28'>
                <div className='p-3 px-4 rounded-lg text-purple-600 bg-foreground-1'>
                  <IoVideocam className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>Reel</div>
                </div>
              </li>
              <li className='w-28'>
                <div className='p-3 px-4 rounded-lg text-pink-600 bg-foreground-1'>
                  <IoLocation className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>Location</div>
                </div>
              </li>
              <li className='w-28'>
                <div className='p-3 px-4 rounded-lg text-sky-600 bg-foreground-1'>
                  <IoHappy className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>Status</div>
                </div>
              </li>
            </ul>
          </div>

          <div className='dark:hidden'>
            <Link
              className='absolute -translate-y-1/2 top-1/2 -left-4 flex items-center w-8 h-full px-1.5 justify-start bg-gradient-to-r from-white via-white dark:from-transparent dark:via-transparent'
              href='#'
              data-uk-slider-item='previous'>
              <IoChevronBack className='text-xl' />
            </Link>
            <Link
              className='absolute -translate-y-1/2 top-1/2 -right-4 flex items-center w-8 h-full px-1.5 justify-end bg-gradient-to-l from-white via-white dark:from-transparent dark:via-transparent'
              href='#'
              data-uk-slider-item='next'>
              <IoChevronForward className='text-xl' />
            </Link>
          </div>

          <div className='justify-center mt-2 -mb-2 hidden dark:flex'>
            <ul className='inline-flex flex-wrap justify-center gap-1 uk-dotnav uk-slider-nav'></ul>
          </div>
        </div>

        <ul
          className='-m-1 mt-4 pb-1 text-xs hover:*:bg-hover-2 *:duration-300'
          data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'>
          <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
            <Image src='/images/home/group.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='font-medium text-sm'>Groups</h4>
              </Link>
              <div className='mt-1 text-xs'>Meet people with similar interests.</div>
            </div>
          </li>
          <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
            <Image src='/images/home/page.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='font-medium text-sm'>Pages</h4>
              </Link>
              <div className='mt-1'>Find and connect with businesses.</div>
            </div>
          </li>
          <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
            <Image src='/images/home/event.png' className='w-7' alt='' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='font-medium text-sm'>Event</h4>
              </Link>
              <div className='mt-1'>Discover fun activities near you .</div>
            </div>
          </li>
          <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
            <Image src='/images/home/market.png' className='w-8 -ml-1' alt='' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='font-medium text-sm'>Event</h4>
              </Link>
              <div className='mt-1'>Find local buyers and sellers .</div>
            </div>
          </li>
          <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
            <Image src='/images/home/game.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='font-medium text-sm'>Games</h4>
              </Link>
              <div className='mt-1'>play game with friends have fun.</div>
            </div>
          </li>
        </ul>

        <div className='w-3 h-3 absolute -top-1.5 right-3 border-l border-t rotate-45 max-md:hidden bg-foreground-2 dark:border-transparent' />
      </div>
    </>
  );
}
