'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { IEmoji, IPost, Visibility } from '@/types';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Post from '../Post';
import { Link } from '@/navigation';
import { Avatar, CircularProgress, Skeleton } from '@mui/material';
import { getImageURL } from '@/lib/utils';
import PostPrivacy from '../PostPrivacy';
import { use, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';
import Picker from '@emoji-mart/react';
import { useThemeMode } from 'flowbite-react';
import { IoHappyOutline } from 'react-icons/io5';
import Popover from '@/components/ui/popover-v2';
import { showSuccessToast } from '@/components/ui/toast';
import { useSharePost } from '@/hooks/mutation';

export interface INewPostShareProps {
  handleClose: () => void;
  post: IPost;
}

export default function NewPostShare({
  handleClose,
  post
}: INewPostShareProps) {
  const t = useTranslations();
  const { mode } = useThemeMode();
  const { data: session } = useSession();
  const { currentUserInfo, isLoadingCurrentUserInfo } = useCurrentUserInfo(
    session?.id || ''
  );
  const { mutateSharePost } = useSharePost();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<Visibility>('public');

  const [text, setText] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    mutateSharePost(
      {
        post: post._id,
        visibility: privacy,
        owner_post: post.post_attributes.user._id,
        content_share: text
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

  const [cursor, setCursor] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.classList.add('custom-scrollbar-fg');
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className='w-[630px] max-h-[600px] overflow-y-scroll custom-scrollbar-fg p-7 animate-fade-up'>
        {isLoadingCurrentUserInfo ? (
          <div className='flex-between'>
            <div className='flex-start gap-3'>
              <Skeleton
                className='bg-foreground-2'
                variant='circular'
                width={40}
                height={40}
              />
              <div className='flex flex-col'>
                <Skeleton
                  className='bg-foreground-2 w-36'
                  variant='text'
                  sx={{ fontSize: '1.5rem' }}
                />
                <Skeleton
                  className='bg-foreground-2 w-36'
                  variant='text'
                  sx={{ fontSize: '1rem' }}
                />
              </div>
            </div>
            <div>
              <Skeleton
                className='bg-foreground-2'
                variant='circular'
                width={25}
                height={25}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className='flex-start'>
              <Link href={`/profile/${currentUserInfo?._id}`}>
                <Avatar src={getImageURL(currentUserInfo?.user_image)} />
              </Link>
              <div className='flex flex-col ms-3'>
                <Link
                  href={`/profile/${currentUserInfo?._id}`}
                  className='base-bold'
                >
                  {currentUserInfo?.name}
                </Link>
              </div>
            </div>
            <div className='flex-between'>
              <Textarea
                slotProps={{ textarea: { ref: textareaRef } }}
                className='w-full mt-3'
                placeholder={t('What do you have in mind?')}
                value={text}
                onChange={event => {
                  // const position = textareaRef.current?.selectionStart;
                  // setCursor(position || 0);
                  setText(event.target.value);
                }}
                // onKeyUp={() => {
                //   const position = textareaRef.current?.selectionStart;
                //   setCursor(position || 0);
                // }}
                // onClick={() => {
                //   const position = textareaRef.current?.selectionStart;
                //   setCursor(position || 0);
                // }}
                maxRows={7}
              />
              <Popover
                open={false}
                mainContent={<IoHappyOutline className='text-2xl flex' />}
                hoverContent={
                  <Picker
                    data={async () => {
                      const response = await fetch(
                        'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
                      );

                      return response.json();
                    }}
                    onEmojiSelect={(emoji: IEmoji) => {
                      const newText =
                        text.slice(0, cursor) +
                        emoji.native +
                        text.slice(cursor);
                      setText(newText);
                      setCursor(cursor + emoji.native.length);
                    }}
                    theme={mode}
                  />
                }
              />
            </div>
          </div>
        )}

        <Post post={post} feature='sharing' />

        <div className='flex-between mt-6'>
          <PostPrivacy setPrivacy={setPrivacy} />
          <Button
            type='submit'
            className='button lg:px-6 text-white max-md:flex-1'
            // disabled={!isChanged || isLoading}
          >
            {isLoading && (
              <CircularProgress size={20} className='text-text-1 mr-2' />
            )}
            {t('Share')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </form>
  );
}
