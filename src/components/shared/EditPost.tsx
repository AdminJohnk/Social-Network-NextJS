'use client';

import { IPost, Visibility } from '@/types';
import { use, useEffect, useState } from 'react';
import { Editor as EditorProps } from '@tiptap/react';
import { useTranslations } from 'next-intl';
import Editor from './Editor/Editor';
import PostPrivacy from './PostPrivacy';
import { Button } from '@/components/ui/button';
import { showErrorToast, showSuccessToast } from '../ui/toast';
import { useUpdatePost, useUploadImages } from '@/hooks/mutation';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';
import UploadImage from './UploadImage';

export interface IEditPostProps {
  post: IPost;
  handleClose: () => void;
}

export default function EditPost({ post, handleClose }: IEditPostProps) {
  const t = useTranslations();
  const [privacy, setPrivacy] = useState<Visibility>('public');
  const [editor, setEditor] = useState<EditorProps>();
  const [ImagesPost, setImagesPost] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const { mutateUploadImages } = useUploadImages();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdatePost } = useUpdatePost();

  const handleUploadImages = async () => {
    const formData = new FormData();
    images.forEach(image => {
      formData.append('images', image);
    });
    return await mutateUploadImages(formData);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const content = editor?.getHTML() as string;

    if (!editor?.getText().trim()) {
      showErrorToast('Please enter some text!');
      setIsLoading(false);
      return;
    }

    const imagesUploaded = await handleUploadImages();

    mutateUpdatePost(
      {
        id: post._id,
        postUpdate: {
          title: '',
          content: content || '',
          images: ImagesPost.concat(imagesUploaded || []),
          visibility: privacy
        }
      },
      {
        onSuccess() {
          showSuccessToast(t('Post updated successfully!'));
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
    <div className='w-[600px] mx-auto bg-background-1 shadow-xl rounded-lg animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{t('Edit Status')}</h2>
        <button
          type='button'
          className='button-icon absolute top-0 right-0 m-2.5'
          onClick={handleClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>

      <div className='max-h-[490px] overflow-y-scroll custom-scrollbar-bg'>
        <div className='space-y-5 mt-3 p-2'>
          <Editor
            setEditor={setEditor}
            content={post.post_attributes.content}
          />
        </div>

        <div className='flex items-center gap-2 text-sm py-2 px-4 font-medium flex-wrap'>
          <UploadImage
            imagesOfPost={post.post_attributes.images as string[]}
            setImagesOfPost={setImagesPost}
            setImagesOfS3={setImages}
          />
        </div>
      </div>

      <div className='p-5 flex justify-between items-center'>
        <PostPrivacy setPrivacy={setPrivacy} />
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn(
              'button lg:px-6 text-white max-md:flex-1',
              isLoading && 'select-none'
            )}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading && (
              <CircularProgress size={20} className='!text-text-1 mr-2' />
            )}
            {t('Update')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
