'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useMemo } from 'react';
import { useSession } from 'next-auth/react';
import {
  IoClose,
  IoFlagOutline,
  IoNotificationsOffOutline,
  IoSettingsOutline,
  IoStopCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';

import { useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';

export interface IChatInfoProps {
  conversationID: string[] | undefined;
}

export default function ChatInfo({ conversationID }: IChatInfoProps) {
  if (conversationID === undefined) return <></>;

  const t = useTranslations();
  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { currentConversation, isLoadingCurrentConversation } = useCurrentConversationData(conversationID[0]);

  const otherUser = useMemo(() => {
    return currentConversation?.members?.filter((member) => member._id !== currentUserInfo?._id)[0];
  }, [currentUserInfo, currentConversation?.members]);

  return (
    <>
      {isLoadingCurrentConversation ? (
        <></>
      ) : (
        <div className='right w-full h-full absolute top-0 right-0 z-10 hidden transition-transform'>
          <div className='uk-animation-slide-right-medium w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 z-50 dark:bg-background-2 dark:border-slate-700'>
            <div className='w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px'></div>

            <div className='py-10 flex-center flex-col text-center text-sm pt-20'>
              {currentConversation.type === 'group' ? (
                <AvatarGroup
                  key={currentConversation._id}
                  users={currentConversation.members}
                  image={currentConversation.image}
                  size={96}
                />
              ) : (
                <Link href={`/profile/${otherUser._id}`}>
                  <AvatarMessage key={otherUser._id} user={otherUser} size={96} />
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
                  <div className='mt-5'>
                    <Link
                      href={`/profile/${otherUser._id}`}
                      className='inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-foreground-2'>
                      {t('View profile')}
                    </Link>
                  </div>
                </>
              )}
            </div>

            <hr className='opacity-80 dark:border-slate-700' />

            <ul className='text-base font-medium p-3'>
              <li>
                <div className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                  <IoNotificationsOffOutline className='text-2xl' />
                  {t('Mute Notification')}
                  <label className='switch cursor-pointer ml-auto'>
                    <input type='checkbox' defaultChecked />
                    <span className='switch-button !relative'></span>
                  </label>
                </div>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                  <IoFlagOutline className='text-2xl' /> {t('Report')}
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                  <IoSettingsOutline className='text-2xl' /> {t('Ignore messages')}
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                  <IoStopCircleOutline className='text-2xl' /> {t('Block')}
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500'>
                  <IoTrashOutline className='text-2xl' /> {t('Delete Chat')}
                </button>
              </li>
            </ul>

            {/* <!-- close button --> */}
            <button
              type='button'
              className='absolute top-0 right-0 m-4 p-2 hover:bg-hover-1 rounded-full'
              data-uk-toggle='target: .right; cls: hidden'>
              <IoClose className='text-2xl flex' />
            </button>
          </div>

          {/* <!-- overlay --> */}
          <div
            className='bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40'
            data-uk-toggle='target: .right;cls: hidden'></div>
        </div>
      )}
    </>
  );
}
