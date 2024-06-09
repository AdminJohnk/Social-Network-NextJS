'use client';

import { useState } from 'react';
import Modal from '../Modal';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoAdd, IoAddCircleOutline, IoBook, IoChevronBack, IoChevronForward, IoHappy } from 'react-icons/io5';
import { FaQuestion, FaSwatchbook, FaUsers } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import CreateEditSeries from '@/components/pages/Series/CreateEditSeries';
import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import CreateNewPost from '@/components/pages/Home/CreateNewPost';
import CreateEditCommunity from '@/components/pages/Community/CreateEditCommunity';

export default function CreateHeader() {
  const t = useTranslations();

  // Modal
  const [openCreateSeries, setOpenCreateSeries] = useState(false);
  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);

  return (
    <>
      <button
        type='button'
        className='relative rounded-full p-1 sm:bg-foreground-1 sm:p-2'
        data-uk-tooltip={`title: ${t('Create')}; pos: bottom; offset:6`}>
        <IoAdd className='h-5 w-5 max-sm:hidden' />
        <IoAddCircleOutline className='text-2xl sm:hidden' />
      </button>

      <div
        className='hidden w-screen rounded-lg border-border-1 bg-foreground-2 p-4 drop-shadow-xl md:w-[324px]'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <h3 className='text-xl font-bold text-text-1'>{t('Create')}</h3>

        <div className='mt-4' data-uk-slider='finite:true;sets: true'>
          <div className='uk-slider-container pb-1'>
            <ul
              className='uk-slider-items grid-small *:cursor-pointer'
              data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-right-small; delay: 20 ;repeat: true'>
              <li className='uk-drop-close min-w-28'>
                <div className='rounded-lg bg-foreground-1 p-3 px-4 text-pink-600'>
                  <IoHappy className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>{t('Status')}</div>
                </div>
              </li>
              <li className='uk-drop-close min-w-28' onClick={() => setOpenCreatePost(true)}>
                <div className='rounded-lg bg-foreground-1 p-3 px-4 text-sky-600'>
                  <IoBook className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>{t('Post')}</div>
                </div>
              </li>
              <Modal open={openCreatePost} handleClose={() => setOpenCreatePost(false)}>
                <CreateNewPost handleClose={() => setOpenCreatePost(false)} />
              </Modal>
              <li className='uk-drop-close min-w-28' onClick={() => setOpenCreateSeries(true)}>
                <div className='rounded-lg bg-foreground-1 p-3 px-4 text-purple-600'>
                  <FaSwatchbook className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>{t('Series')}</div>
                </div>
              </li>
              <Modal open={openCreateSeries} handleClose={() => setOpenCreateSeries(false)}>
                <CreateEditSeries handleClose={() => setOpenCreateSeries(false)} />
              </Modal>
              <li className='uk-drop-close min-w-28' onClick={() => setOpenCreateQuestion(true)}>
                <div className='rounded-lg bg-foreground-1 p-3 px-4 text-yellow-500'>
                  <FaQuestion className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>{t('Question')}</div>
                </div>
              </li>
              <Modal open={openCreateQuestion} handleClose={() => setOpenCreateQuestion(false)}>
                <CreateEditQuestion handleClose={() => setOpenCreateQuestion(false)} />
              </Modal>
              <li className='uk-drop-close min-w-28' onClick={() => setOpenCreateCommunity(true)}>
                <div className='rounded-lg bg-foreground-1 p-3 px-4 text-teal-500'>
                  <FaUsers className='text-2xl drop-shadow-md' />
                  <div className='mt-1.5 text-sm font-medium'>{t('Community')}</div>
                </div>
              </li>
              <Modal open={openCreateCommunity} handleClose={() => setOpenCreateCommunity(false)}>
                <CreateEditCommunity handleClose={() => setOpenCreateCommunity(false)} />
              </Modal>
            </ul>
          </div>

          <div className='dark:hidden'>
            <Link
              className='absolute -left-4 top-1/2 flex h-full w-8 -translate-y-1/2 items-center justify-start bg-gradient-to-r from-white via-white px-1.5 dark:from-transparent dark:via-transparent'
              href=''
              data-uk-slider-item='previous'>
              <IoChevronBack className='text-xl' />
            </Link>
            <Link
              className='absolute -right-4 top-1/2 flex h-full w-8 -translate-y-1/2 items-center justify-end bg-gradient-to-l from-white via-white px-1.5 dark:from-transparent dark:via-transparent'
              href=''
              data-uk-slider-item='next'>
              <IoChevronForward className='text-xl' />
            </Link>
          </div>

          <div className='-mb-2 mt-2 hidden justify-center dark:flex'>
            <ul className='uk-dotnav uk-slider-nav inline-flex flex-wrap justify-center gap-1'></ul>
          </div>
        </div>

        <ul
          className='-m-1 mt-4 pb-1 text-xs *:duration-300 hover:*:bg-hover-2'
          data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/group.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Communities')}</h4>
              </Link>
              <div className='mt-1 text-xs'>{t('Meet people with similar interests')}</div>
            </div>
          </li>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/page.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Pages')}</h4>
              </Link>
              <div className='mt-1'>{t('Find and connect with businesses')}</div>
            </div>
          </li>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/event.png' className='w-7' alt='' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Event')}</h4>
              </Link>
              <div className='mt-1'>{t('Discover fun activities near you')}</div>
            </div>
          </li>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/game.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Games')}</h4>
              </Link>
              <div className='mt-1'>{t('Play game with friends have fun')}</div>
            </div>
          </li>
        </ul>

        <div className='absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-foreground-2 dark:border-transparent max-md:hidden' />
      </div>
    </>
  );
}
