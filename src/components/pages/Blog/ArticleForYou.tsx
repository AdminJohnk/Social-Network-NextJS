import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export interface IArticleForYouProps {}

export default function ArticleForYou(props: IArticleForYouProps) {
  const t = useTranslations();
  return (
    <div>
      <div className='flex items-center justify-between py-3 mt-8'>
        <h3 className='text-xl font-semibold'> {t('Articles for you')} </h3>
        <Link href='#' className='text-sm text-blue-500'>
          {t('See all')}
        </Link>
      </div>

      <div className='box p-5 mt-4'>
        <div className='card-list'>
          <Link href='/blogs/123' className='lg:order-1'>
            <div className='card-list-media h-32'>
              <Image
                src='/images/blog/img-2.jpg'
                alt=''
                width={1000}
                height={1000}
              />
            </div>
          </Link>
          <div className='card-list-body'>
            <Link href='/blogs/123'>
              <h3 className='card-list-title'>
                Top amazing web demos and experiments in 2024 should know about
              </h3>
            </Link>
            <p className='card-list-text'>
              consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wiis enim ad
              minim veniam,
            </p>
            <Link href='#'>
              <div className='card-list-link'> Jesse Steeve </div>
            </Link>
            <div className='card-list-info'>
              <div className='flex items-center gap-2'>
                <CiHeart className='size-5' />
                45
              </div>
              <div className='md:block hidden'>·</div>
              <div className='flex items-center gap-2'>
                <IoChatbubbleEllipsesOutline className='size-5' />
                156.9K
              </div>
            </div>
          </div>
        </div>
        <hr className='card-list-divider' />
        <div className='card-list'>
          <Link href='/blogs/123' className='lg:order-1'>
            <div className='card-list-media h-32'>
              <Image
                src='/images/blog/img-3.jpg'
                alt=''
                width={1000}
                height={1000}
              />
            </div>
          </Link>
          <div className='card-list-body'>
            <Link href='/blogs/123'>
              <h3 className='card-list-title'>
                Interesting JavaScript and CSS libraries should Know About
              </h3>
            </Link>
            <p className='card-list-text'>
              consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wiis enim ad
              minim veniam,
            </p>
            <Link href='#'>
              <div className='card-list-link'> Monroe Parker </div>
            </Link>
            <div className='card-list-info'>
              <div className='flex items-center gap-2'>
                <CiHeart className='size-5' />
                45
              </div>
              <div className='md:block hidden'>·</div>
              <div className='flex items-center gap-2'>
                <IoChatbubbleEllipsesOutline className='size-5' />
                156.9K
              </div>
            </div>
          </div>
        </div>
        <hr className='card-list-divider' />
        <div className='card-list'>
          <Link href='/blogs/123' className='lg:order-1'>
            <div className='card-list-media h-32'>
              <Image
                src='/images/blog/img-4.jpg'
                alt=''
                width={1000}
                height={1000}
              />
            </div>
          </Link>
          <div className='card-list-body'>
            <Link href='/blogs/123'>
              <h3 className='card-list-title'>
                Interesting javaScript and CSS libraries you should be learn
              </h3>
            </Link>
            <p className='card-list-text'>
              consectetur adipiscing elit, sed diam nodum nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wiis enim ad
              minim veniam,
            </p>
            <Link href='#'>
              <div className='card-list-link'> Martin Gray </div>
            </Link>
            <div className='card-list-info'>
              <div className='flex items-center gap-2'>
                <CiHeart className='size-5' />
                45
              </div>
              <div className='md:block hidden'>·</div>
              <div className='flex items-center gap-2'>
                <IoChatbubbleEllipsesOutline className='size-5' />
                156.9K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
