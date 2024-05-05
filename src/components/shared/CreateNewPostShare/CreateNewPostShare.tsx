'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { IPost, Visibility } from '@/types';
import { useTranslations } from 'next-intl';
import Post from '../Post';
import { Link } from '@/navigation';
import { Avatar, CircularProgress, Skeleton } from '@mui/material';
import { getImageURL } from '@/lib/utils';
import PostPrivacy from '../PostPrivacy';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { showSuccessToast } from '@/components/ui/toast';
import { useSharePost } from '@/hooks/mutation';
import { Editor as EditorProps } from '@tiptap/react';
import Editor from '../Editor/Editor';

export interface ICreateNewPostShareProps {
  handleClose: () => void;
  post: IPost;
}

export default function CreateNewPostShare({ handleClose, post }: ICreateNewPostShareProps) {
  const t = useTranslations();
  const { currentUserInfo, isLoadingCurrentUserInfo } = useCurrentUserInfo();
  const { mutateSharePost } = useSharePost();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<Visibility>(post.visibility || 'public');

  const [editor, setEditor] = useState<EditorProps>();

  async function onSubmit() {
    setIsLoading(true);
    let content = editor?.getHTML() as string;

    if (!editor?.getText().trim()) {
      content = '';
    }

    mutateSharePost(
      {
        post: post._id,
        visibility: privacy,
        owner_post: post.post_attributes.user._id,
        content_share: content
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Shared post successfully!'));
        },
        onSettled: () => {
          setIsLoading(false);
          handleClose();
        }
      }
    );
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.classList.add('custom-scrollbar-fg');
  }, []);

  return (
    <div className='w-[740px] max-h-[600px] overflow-y-scroll bg-foreground-1 rounded-lg custom-scrollbar-fg p-7 animate-fade-up'>
      {isLoadingCurrentUserInfo ? (
        <div className='flex-between'>
          <div className='flex-start gap-3'>
            <Skeleton className='bg-foreground-2' variant='circular' width={40} height={40} />
            <div className='flex flex-col'>
              <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '1.5rem' }} />
              <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '1rem' }} />
            </div>
          </div>
          <div>
            <Skeleton className='bg-foreground-2' variant='circular' width={25} height={25} />
          </div>
        </div>
      ) : (
        <div>
          <div className='flex-start'>
            <Link href={`/profile/${currentUserInfo._id}`}>
              <Avatar src={getImageURL(currentUserInfo.user_image)} />
            </Link>
            <div className='flex flex-col ms-3'>
              <Link href={`/profile/${currentUserInfo._id}`} className='base-bold'>
                {currentUserInfo.name}
              </Link>
            </div>
          </div>
          <div className='space-y-5 mt-3 p-2'>
            <Editor setEditor={setEditor} />
          </div>
        </div>
      )}

      <Post post={post} feature='sharing' />

      <div className='flex-between mt-6'>
        <PostPrivacy privacy={privacy} setPrivacy={setPrivacy} />
        <Button
          type='submit'
          className='button lg:px-6 text-white max-md:flex-1'
          disabled={isLoading}
          onClick={onSubmit}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          {t('Share')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
