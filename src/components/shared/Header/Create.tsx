'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { FaQuestion, FaSwatchbook, FaUsers } from 'react-icons/fa';
import { IoAdd, IoAddCircleOutline, IoBook, IoChevronBack, IoChevronForward, IoHappy } from 'react-icons/io5';

import CreateEditCommunity from '@/components/pages/Community/CreateEditCommunity';
import CreateNewPost from '@/components/pages/Home/CreateNewPost';
import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import CreateEditSeries from '@/components/pages/Series/CreateEditSeries';
import { Link } from '@/navigation';

import Modal from '../Modal';

export default function CreateHeader() {
  const t = useTranslations();

  // Modal
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [openCreateSeries, setOpenCreateSeries] = useState(false);
  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
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
        className='w-screen rounded-lg border-border-1 bg-foreground-2 p-4 drop-shadow-xl md:w-[324px]'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '
        hidden>
        <h3 className='text-xl font-bold text-text-1'>{t('Create')}</h3>

        <div className='mt-4' data-uk-slider='finite:true;sets: true'>
          <div className='uk-slider-container pb-1'>
            <ul
              className='uk-slider-items grid-small *:cursor-pointer'
              data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-right-small; delay: 20 ;repeat: true'>
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
              className='absolute -left-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-start rounded-full bg-gradient-to-r from-blue-500 to-blue-300 px-1.5 shadow-md dark:from-transparent dark:via-transparent'
              href=''
              data-uk-slider-item='previous'>
              <IoChevronBack className='text-xl text-white' />
            </Link>
            <Link
              className='absolute -right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-end rounded-full bg-gradient-to-l from-blue-500 to-blue-300 px-1.5 shadow-md dark:from-transparent dark:via-transparent'
              href=''
              data-uk-slider-item='next'>
              <IoChevronForward className='text-xl text-white' />
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
              <div className='mt-1 text-xs'>
                {t('Connect with diverse communities around various topics')}
              </div>
            </div>
          </li>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/blog.png' alt='' className='w-7' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Series')}</h4>
              </Link>
              <div className='mt-1'>{t('Dive into engaging series on various topics')}</div>
            </div>
          </li>
          <li className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-hover-1'>
            <Image src='/images/home/question.png' className='w-7' alt='' width={50} height={50} />
            <div className='flex-1 text-text-1'>
              <Link href=''>
                <h4 className='text-sm font-medium'>{t('Questions')}</h4>
              </Link>
              <div className='mt-1'>{t('Uncover intriguing questions and answers on various topics')}</div>
            </div>
          </li>
        </ul>

        <div className='absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-foreground-2 dark:border-transparent max-md:hidden' />
      </div>
    </>
  );
}
