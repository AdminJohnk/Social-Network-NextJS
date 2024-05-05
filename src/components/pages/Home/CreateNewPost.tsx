'use client';

import { useState } from 'react';
import PostPrivacy from '@/components/shared/PostPrivacy';
import Editor from '@/components/shared/Editor/Editor';
import { useTranslations } from 'next-intl';
import { CircularProgress } from '@mui/material';
import { Editor as EditorProps } from '@tiptap/react';

import { Visibility } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCreatePost, useUploadImages } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import UploadImage from '@/components/shared/UploadImage';
import PostTemplate from '@/components/shared/PostTemplate';

interface ICreateNewPostProps {
  handleClose: () => void;
}

export default function CreateNewPost({ handleClose }: ICreateNewPostProps) {
  const t = useTranslations();

  const { mutateCreatePost } = useCreatePost();

  const [privacy, setPrivacy] = useState<Visibility>('public');
  const [editor, setEditor] = useState<EditorProps>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [images, setImages] = useState<File[]>([]);

  const { mutateUploadImages } = useUploadImages();

  const handleUploadImages = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    return await mutateUploadImages(formData);
  };

  const handleSubmit = async () => {
    const content = editor?.getHTML() as string;
    setIsLoading(true);

    if (!editor?.getText().trim()) {
      showErrorToast('Please enter some text!');
      setIsLoading(false);
      return;
    }

    const imagesUploaded = await handleUploadImages();

    mutateCreatePost(
      {
        title: '',
        content: content || '',
        images: imagesUploaded,
        visibility: privacy
      },
      {
        onSuccess() {
          showSuccessToast(t('Post created successfully!'));
          editor?.commands.clearContent();
          handleClose();
        },
        onError() {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[670px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{t('Create Post')}</h2>
      </div>

      <div className='max-h-[490px] overflow-y-scroll custom-scrollbar-bg'>
        <div className='mt-3 ps-4'>
          <Editor setEditor={setEditor}/>
        </div>

        <div className='*:mb-3 text-sm py-2 px-4 font-medium'>
          <PostTemplate editor={editor} />
          <UploadImage setImagesOfS3={setImages} />
        </div>
      </div>

      <div className='p-5 flex justify-between items-center'>
        <PostPrivacy privacy={privacy} setPrivacy={setPrivacy} />
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
  );
}
