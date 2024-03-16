import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { IoChevronForward, IoPersonAddOutline } from 'react-icons/io5';

export interface IRecommendWriterProps {}

export default function RecommendWriter(props: IRecommendWriterProps) {
  const t = useTranslations();
  return (
    <div className='bg-foreground-1 p-6 rounded-md mt-8 shadow'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>
          {t('Recommended Writers for you')}
        </h3>
        <Link
          href='#'
          className='text-sm text-blue-500 flex items-center gap-2'
        >
          {t('See all')} <IoChevronForward />
        </Link>
      </div>

      <div className='grid sm:grid-cols-2 gap-3 mt-4'>
        <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-5.jpg'
              alt=''
              className='rounded-full w-10 h-10'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend'>
              <h4 className='side-list-title'> James Lewis</h4>
            </Link>
            <div className='side-list-info'> 42 {t('articles')} </div>
          </div>
          <button type='button' className='button-icon bg-foreground-2'>
            <IoPersonAddOutline className='size-5' />
          </button>
        </div>
        <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='rounded-full w-10 h-10'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend'>
              <h4 className='side-list-title'> Martin Gray</h4>
            </Link>
            <div className='side-list-info'> 25 {t('articles')} </div>
          </div>
          <button type='button' className='button-icon bg-foreground-2'>
            <IoPersonAddOutline className='size-5' />
          </button>
        </div>
        <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='rounded-full w-10 h-10'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend'>
              <h4 className='side-list-title'> Monroe Parker</h4>
            </Link>
            <div className='side-list-info'> 15 {t('articles')} </div>
          </div>
          <button type='button' className='button-icon bg-foreground-2'>
            <IoPersonAddOutline className='size-5' />
          </button>
        </div>
        <div className='side-list-item p-4 box bg-foreground-2 rounded-lg'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-7.jpg'
              alt=''
              className='rounded-full w-10 h-10'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend'>
              <h4 className='side-list-title'> Jesse Steeve</h4>
            </Link>
            <div className='side-list-info'> 36 {t('articles')} </div>
          </div>
          <button type='button' className='button-icon bg-foreground-2'>
            <IoPersonAddOutline className='size-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
