'use client';

import { useState } from 'react';
import PostPrivacy from '@/components/shared/PostPrivacy';
import Editor from '@/components/shared/Editor/Editor';
import { useTranslations } from 'next-intl';

import { IoImage, IoVideocam } from 'react-icons/io5';
import { Visibility } from '@/types';
import { Editor as EditorProps } from '@tiptap/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CircularProgress } from '@mui/material';
import { useCreatePost } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export default function CreateNewPost() {
  const t = useTranslations();

  const { mutateCreatePost } = useCreatePost();

  const [privacy, setPrivacy] = useState<Visibility>('public');
  const [editor, setEditor] = useState<EditorProps>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const content = editor?.getHTML() as string;

    if (!editor?.getText().trim()) {
      showErrorToast('Please enter some text!');
      setIsLoading(false);
      return;
    }

    mutateCreatePost(
      {
        title: '',
        content: content || '',
        images: [],
        visibility: privacy
      },
      {
        onSuccess() {
          showSuccessToast(t('Post created successfully!'));
          editor?.commands.clearContent();
          UIkit.modal('#create-status').hide();
        },
        onError() {
          showErrorToast('Something went wrong! Please try again.');
        },
        onSettled() {
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <div className='hidden lg:p-20' id='create-status' data-uk-modal>
      <div className='uk-modal-dialog tt relative mx-auto bg-background-1 shadow-xl rounded-lg md:w-[600px] w-full'>
        <div className='text-center py-4 border-b mb-0 border-border-1'>
          <h2 className='text-sm font-medium text-text-1'>{t('Create Status')}</h2>

          {/* <!-- close button --> */}
          <button type='button' className='button-icon absolute top-0 right-0 m-2.5 uk-modal-close'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>

        <div className='space-y-5 mt-3 p-2'>
          <Editor setEditor={setEditor} />
        </div>

        <div className='flex items-center gap-2 text-sm py-2 px-4 font-medium flex-wrap'>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-sky-50 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:border-sky-900'>
            <IoImage className='text-base' />
            {t('Image')}
          </button>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-teal-50 text-teal-600 rounded-full py-1 px-2 border-2 border-teal-100 dark:bg-teal-950 dark:border-teal-900'>
            <IoVideocam className='text-base' />
            {t('Video')}
          </button>
          {/* <button
            type='button'
            className='flex items-center gap-1.5 bg-orange-50 text-orange-600 rounded-full py-1 px-2 border-2 border-orange-100 dark:bg-yellow-950 dark:border-yellow-900'
          >
            <IoHappy className='text-base' />
            {t('Feeling')}
          </button>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-red-50 text-red-600 rounded-full py-1 px-2 border-2 border-rose-100 dark:bg-rose-950 dark:border-rose-900'
          >
            <IoLocation className='text-base' />
            {t('Check in')}
          </button>
          <button
            type='button'
            className='grid place-items-center w-8 h-8 text-xl rounded-full hover:bg-hover-1'
          >
            <IoEllipsisHorizontal />
          </button> */}
        </div>

        <div className='p-5 flex justify-between items-center'>
          <PostPrivacy setPrivacy={setPrivacy} />
          <div className='flex items-center gap-2'>
            <Button
              type='button'
              className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
              disabled={isLoading}
              onClick={handleSubmit}>
              {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
              {t('Create')} <span className='ripple-overlay'></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
