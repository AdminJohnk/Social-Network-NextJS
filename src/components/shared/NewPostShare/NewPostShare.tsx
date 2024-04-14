'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { IEmoji, IPost } from '@/types';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Post from '../Post';
import { Link } from '@/navigation';
import { Avatar, CircularProgress, Skeleton } from '@mui/material';
import { getImageURL } from '@/lib/utils';
import PostPrivacy from '../PostPrivacy';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';
import Picker from '@emoji-mart/react';
import { useThemeMode } from 'flowbite-react';
import { IoHappyOutline } from 'react-icons/io5';
import Popover from '@/components/ui/popover';

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState('public');

  const [text, setText] = useState('');
  const addEmoji = (emoji: string) => setText(`${text}${emoji}`);

  async function onSubmit() {}

  return (
    <div className='w-[610px] max-h-[600px] p-7 animate-fade-up overflow-y-scroll custom-scrollbar-fg'>
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
              className='w-full mt-3'
              placeholder={t('What do you have in mind?')}
              value={text}
              onChange={event => setText(event.target.value)}
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
                    console.log(emoji.native);
                    addEmoji(emoji.native)
                  }}
                  theme={mode}
                />
              }
            />
          </div>
        </div>
      )}
      <div>
        <Post post={post} feature='sharing' />
      </div>
      <div className='flex-between mt-6'>
        <PostPrivacy setPrivacy={setPrivacy} />
        <Button
          type='submit'
          className='button lg:px-6 text-white max-md:flex-1'
          // disabled={!isChanged || isLoading}
          onClick={onSubmit}
        >
          {isLoading && (
            <CircularProgress size={20} className='text-text-1 mr-2' />
          )}
          {t('Share')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
