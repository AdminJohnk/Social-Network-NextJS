import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export interface IRecentMediaProps {}

export default function RecentMedia(props: IRecentMediaProps) {
  const t = useTranslations();
  return (
    <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
      <div className='flex items-baseline justify-between text-text-1'>
        <h3 className='font-bold text-base'> {t('Recent Media')} </h3>
        <Link href='#' className='text-sm text-blue-500'>
          {t('See all')}
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-1 text-center text-sm mt-4 mb-2 rounded-lg overflow-hidden'>
        <div className='relative w-full aspect-[4/3]'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-5.jpg'
            alt=''
            className='object-cover w-full h-full inset-0'
          />
        </div>
        <div className='relative w-full aspect-[4/3]'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-7.jpg'
            alt=''
            className='object-cover w-full h-full inset-0'
          />
        </div>
        <div className='relative w-full aspect-[4/3]'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-4.jpg'
            alt=''
            className='object-cover w-full h-full inset-0'
          />
        </div>
        <div className='relative w-full aspect-[4/3]'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-6.jpg'
            alt=''
            className='object-cover w-full h-full inset-0'
          />
        </div>
      </div>
    </div>
  );
}
