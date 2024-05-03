'use client';

import { useTranslations } from 'next-intl';
import { FaImages } from 'react-icons/fa';
import { RiLiveFill } from 'react-icons/ri';
import { useState } from 'react';

import CreateNewPost from '@/components/pages/Home/CreateNewPost';
import Modal from '@/components/shared/Modal';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';

export interface INewPostProps {
  profileID?: string;
}

export default function NewPost({ profileID }: INewPostProps) {
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  const { currentUserInfo } = useCurrentUserInfo();
  const { otherUserInfo } = useOtherUserInfo(profileID || '');

  const isMe = currentUserInfo._id === profileID;

  return (
    <div>
      <div
        className='new-post w-full px-4 py-5 bg-foreground-1 flex-between gap-1 rounded-lg'
        onClick={() => setOpen(true)}>
        <div className='text-center py-2 bg-foreground-2 basis-9/12 rounded-lg hover:bg-hover-2 cursor-pointer duration-300'>
          {profileID ? (
            <span>
              {isMe
                ? t('What do you have in mind?')
                : t('Write some thing for') + ' ' + otherUserInfo?.name + '...'}
            </span>
          ) : (
            <span> {t('What do you have in mind?')} </span>
          )}
        </div>
        <div className='basis-1/12 bg-blue-3 hover:bg-blue-4 flex-center py-2 rounded-lg duration-300 cursor-pointer'>
          <FaImages className='size-5 text-blue-1' />
        </div>
        <div className='basis-1/12 bg-pink-3 hover:bg-pink-4 flex-center py-2 rounded-lg duration-300 cursor-pointer'>
          <RiLiveFill className='size-5 text-pink-1' />
        </div>
      </div>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <CreateNewPost handleClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
