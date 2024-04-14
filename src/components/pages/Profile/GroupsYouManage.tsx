import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface IGroupsYouManageProps {}

export default function GroupsYouManage(props: IGroupsYouManageProps) {
  const t = useTranslations();

  return (
    <div className='bg-foreground-1 rounded-xl shadow p-5 px-6 border1'>
      <h3 className='font-bold text-base'> {t('Suggested Manage')} </h3>
      <div className='mt-5'>
        <div className='flex items-center space-x-3 my-3'>
          <Link href='#'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-2.jpg'
              alt=''
              className='h-10 w-10 rounded-full'
            />
          </Link>
          <div className='flex-1'>
            <Link href='#'>
              <h4 className='text-sm leading-5 font-bold text-text-1'> John Michael</h4>
            </Link>
            <div className='mt-0.5 text-xs leading-4 text-text-2'>
              {t('Updated xx day ago', { count: 6 })}
            </div>
          </div>
          <button className='button bg-foreground-2 hover:bg-hover-2 dark:text-white'>{t('Like')}</button>
        </div>
        <div className='flex items-center space-x-3 my-3'>
          <Link href='#'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='h-10 w-10 rounded-full'
            />
          </Link>
          <div className='flex-1'>
            <Link href='#'>
              <h4 className='text-sm leading-5 font-bold text-text-1'> Martin Gray</h4>
            </Link>
            <div className='mt-0.5 text-xs leading-4 text-text-2'>
              {t('Updated xx month ago', { count: 2 })}
            </div>
          </div>
          <button className='button bg-foreground-2 hover:bg-hover-2 dark:text-white'>{t('Like')}</button>
        </div>
        <div className='flex items-center space-x-3 my-3'>
          <Link href='#'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='h-10 w-10 rounded-full'
            />
          </Link>
          <div className='flex-1'>
            <Link href='#'>
              <h4 className='text-sm leading-5 font-bold text-text-1'> Monroe Parker</h4>
            </Link>
            <div className='mt-0.5 text-xs leading-4 text-text-2'>
              {t('Updated xx week ago', { count: 1 })}
            </div>
          </div>
          <button className='button bg-foreground-2 hover:bg-hover-2 dark:text-white'>{t('Like')}</button>
        </div>
        <div className='flex items-center space-x-3 my-3'>
          <Link href='#'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-1.jpg'
              alt=''
              className='h-10 w-10 rounded-full'
            />
          </Link>
          <div className='flex-1'>
            <Link href='#'>
              <h4 className='text-sm leading-5 font-bold text-text-1'> Jesse Steeve</h4>
            </Link>
            <div className='mt-0.5 text-xs leading-4 text-text-2'>
              {t('Updated xx day ago', { count: 2 })}
            </div>
          </div>
          <button className='button bg-foreground-2 hover:bg-hover-2 dark:text-white'>{t('Like')}</button>
        </div>
      </div>

      <button className='bg-foreground-2 hover:bg-hover-2 w-full text-text-1 py-1.5 font-medium px-3.5 rounded-md text-sm mt-2'>
        {t('See all')}
      </button>
    </div>
  );
}
