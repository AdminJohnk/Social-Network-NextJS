import Image from 'next/image';
import { Link } from '@/navigation';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

export interface IComCategoryProps {}

export default function ComCategory(props: IComCategoryProps) {
  const t = useTranslations();
  return (
    <div>
      <div className='sm:my-6 my-3 flex items-center justify-between'>
        <div>
          <h2 className='h5-semibold'>{t('Categories')}</h2>
          <p className='base-regular text-text-2 first-line:leading-6'>
            Find a community by browsing top categories.
          </p>
        </div>
        <Link href='' className='text-blue-500 sm:block hidden text-sm'>
          {t('See all')}
        </Link>
      </div>

      <div data-uk-slider='finite:true'>
        <div className='uk-slider-container pb-1'>
          <ul className='uk-slider-items grid-small'>
            <li className='md:w-1/5 sm:w-1/3 w-1/2'>
              <Link href=''>
                <div className='relative rounded-lg overflow-hidden'>
                  <Image
                    width={500}
                    height={500}
                    src='/images/category/Buy-and-sell.jpg'
                    alt=''
                    className='h-36 w-full object-cover'
                  />
                  <div className='w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10'>
                    <div className='p-5 text-lg leading-3'>Shopping'</div>
                  </div>
                </div>
              </Link>
            </li>
            <li className='md:w-1/5 sm:w-1/3 w-1/2'>
              <Link href=''>
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
              <Link href=''>
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
              <Link href=''>
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
              <Link href=''>
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
              <Link href=''>
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

        <Link className='nav-prev' href='' data-uk-slider-item='previous'>
          <IoChevronBack />
        </Link>
        <Link className='nav-next' href='' data-uk-slider-item='next'>
          <IoChevronForward />
        </Link>
      </div>
    </div>
  );
}
