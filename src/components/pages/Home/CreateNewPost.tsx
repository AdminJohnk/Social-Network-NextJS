'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import Editor from '@/components/shared/Editor/Editor';
import PostPrivacy from '@/components/shared/PostPrivacy';
import PostTemplate from '@/components/shared/PostTemplate';
import UploadImage from '@/components/shared/UploadImage';
import { Button } from '@/components/ui/button';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCreatePost, useUploadImages } from '@/hooks/mutation';
import { useGetAllHashtags } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { Visibility } from '@/types';
import { CircularProgress } from '@mui/material';
import { Editor as EditorProps } from '@tiptap/react';

interface ICreateNewPostProps {
  handleClose: () => void;
  communityID?: string;
}

export default function CreateNewPost({ handleClose, communityID }: ICreateNewPostProps) {
  const t = useTranslations();

  const { allHashtags, isLoadingAllHashtags } = useGetAllHashtags();
  const { mutateCreatePost } = useCreatePost(communityID);

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
    setIsLoading(true);
    const content = editor?.getHTML() as string;
    setIsLoading(true);

    // get hashtags from content
    const hashtags = content.match(/#[a-zA-Z0-9]+/g);
    const uniqueHashtags = Array.from(new Set(hashtags));

    if (!editor?.getText().trim()) {
      showErrorToast('Please enter some text!');
      setIsLoading(false);
      return;
    }

    const imagesUploaded = await handleUploadImages();

    if (communityID) {
      mutateCreatePost(
        {
          title: '',
          content: content || '',
          images: imagesUploaded,
          scope: 'Community',
          visibility: privacy,
          community: communityID,
          hashtags: hashtags ? uniqueHashtags : undefined
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
    } else {
      mutateCreatePost(
        {
          title: '',
          content: content || '',
          images: imagesUploaded,
          visibility: privacy,
          hashtags: hashtags ? uniqueHashtags : undefined
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
    }
  };

  return (
    <div className='relative mx-auto w-[800px] animate-fade-up rounded-lg bg-background-1 shadow-xl'>
      <div className='mb-0 border-b border-border-1 py-4 text-center'>
        <h2 className='text-sm font-medium text-text-1'>{t('Create Post')}</h2>
      </div>

      {isLoadingAllHashtags ? (
        <div className='flex-center h-full w-full p-5'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <>
          <div className='custom-scrollbar-bg max-h-[520px] overflow-y-scroll'>
            <div className='mt-3 ps-4'>
              <Editor
                setEditor={setEditor}
                placeholder={t('What do you want to share?')}
                dataSuggestions={allHashtags?.map((tag) => tag.name.substring(1)) || []}
              />
            </div>

            <div className='px-4 py-2 text-sm font-medium *:mb-3'>
              <PostTemplate editor={editor} />
              <UploadImage setImagesOfS3={setImages} />
            </div>
          </div>

          <div className={cn('flex-between p-5', communityID && 'flex-end')}>
            {!communityID && <PostPrivacy privacy={privacy} setPrivacy={setPrivacy} />}
            <div className='flex items-center gap-2'>
              <Button
                type='button'
                className={cn('button text-white max-md:flex-1 lg:px-6', isLoading && 'select-none')}
                disabled={isLoading}
                onClick={handleSubmit}>
                {isLoading && <CircularProgress size={20} className='mr-2 !text-text-1' />}
                {t('Create')} <span className='ripple-overlay'></span>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
