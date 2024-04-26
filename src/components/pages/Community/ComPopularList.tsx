import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function ComPopularList() {
  const t = useTranslations();
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image width={500} height={500} src='/images/product/product-1.jpg' alt='' />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> {t('Graphic Design')} </h4>
          </Link>
          <div className='card-text'>
            <div className='card-list-info font-normal mt-1'>
              <div>232k {t(' members')} </div>
              <div className='md:block hidden'>·</div>
              <Link href=''> {t('Education')} </Link>
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
              <p className='card-text'> 6 {t(' friend are members')} </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button type='button' className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
              {t('Join')}
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
              {t('View')}
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image width={500} height={500} src='/images/product/product-2.jpg' alt='' />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> {t('Delicious Foods')} </h4>
          </Link>
          <div className='card-text'>
            <div className='card-list-info font-normal mt-1'>
              <div>232k {t(' members')} </div>
              <div className='md:block hidden'>·</div>
              <Link href=''> {t('Education')} </Link>
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
              <p className='card-text'> 8 {t('friend are members')} </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button type='button' className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
              {t('Join')}
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
              {t('View')}
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image width={500} height={500} src='/images/product/product-4.jpg' alt='' />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> {t('Delicious Foods')} </h4>
          </Link>
          <div className='card-text'>
            <div className='card-list-info font-normal mt-1'>
              <div>232k {t(' members')} </div>
              <div className='md:block hidden'>·</div>
              <Link href=''> {t('Education')} </Link>
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
              <p className='card-text'> 12 </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button type='button' className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
              {t('Join')}
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
              {t('View')}
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image width={500} height={500} src='/images/product/product-3.jpg' alt='' />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> {t('Abstract minimal')} </h4>
          </Link>
          <div className='card-text'>
            <div className='card-list-info font-normal mt-1'>
              <div>360k {t(' members')} </div>
              <div className='md:block hidden'>·</div>
              <Link href=''> {t('Education')} </Link>
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
              <p className='card-text'> 3 {t('friend are members')} </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button type='button' className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'>
              {t('Join')}
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'>
              {t('View')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
