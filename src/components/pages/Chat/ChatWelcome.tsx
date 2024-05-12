'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';
import { IConversation, IUserInfo } from '@/types';

export interface IChatWelcomeProps {
  currentConversation: IConversation;
  otherUser: IUserInfo;
}

export default function ChatWelcome({ currentConversation, otherUser }: IChatWelcomeProps) {
  const t = useTranslations();

  return (
    <div className='py-10 flex-center flex-col text-center text-sm lg:pt-8'>
      {currentConversation.type === 'group' ? (
        <AvatarGroup
          key={currentConversation._id}
          users={currentConversation.members}
          image={currentConversation.image}
          size={80}
        />
      ) : (
        <Link href={`/profile/${otherUser._id}`}>
          <AvatarMessage key={otherUser._id} user={otherUser} size={100} />
        </Link>
      )}
      {currentConversation.type === 'group' ? (
        <>
          <div className='mt-8'>
            <div className='md:text-xl text-base font-medium text-black dark:text-white'>
              {currentConversation.name}
            </div>
            <div className='text-gray-500 text-sm dark:text-white/80'>
              {currentConversation.members.length} {t('members')}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='mt-8'>
            <div className='md:text-xl text-base font-medium text-black dark:text-white'>
              {otherUser.name}
            </div>

            <div className='text-gray-500 text-sm dark:text-white/80'>
              {otherUser.alias && <>@{otherUser.alias}</>}
            </div>
          </div>
          <div className='mt-3.5'>
            <Link
              href={`/profile/${otherUser._id}`}
              className='inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-foreground-2 hover:bg-hover-1'>
              {t('View profile')}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
