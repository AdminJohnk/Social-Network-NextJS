'use client';

import { ReactElement, useEffect, useMemo, useState } from 'react';
import { IoMoonOutline, IoSettingsSharp } from 'react-icons/io5';
import { FaComment, FaSnowflake, FaUser, FaVideo } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';
import { ThemeMode, useThemeMode } from 'flowbite-react';

import { Link } from '@/navigation';
import { useConversationsData, useCurrentConversationData, useCurrentUserInfo, useGetCalled } from '@/hooks/query';
import { cn } from '@/lib/utils';
import ConversationList from '../ConversationList';
import Language from '@/components/shared/Header/Language';

export interface IChatSideBarProps {
  conversationID: string | undefined;
  setSideBarSelect: (list: ReactElement) => void;
}

export default function ChatSideBar({ conversationID, setSideBarSelect }: IChatSideBarProps) {
  const t = useTranslations();
  const [modeTheme, setModeTheme] = useState<ThemeMode>('dark');
  const { toggleMode, mode } = useThemeMode();


  const { calledList } = useGetCalled();
  const { data: session } = useSession();

  const { isLoadingCurrentUserInfo, currentUserInfo } = useCurrentUserInfo(session?.id as string);
  const { conversations, isLoadingConversations } = useConversationsData();
  const { isLoadingCurrentConversation } = useCurrentConversationData(conversationID!);

  const notSeenCount = useMemo(() => {
    if (!currentUserInfo || !conversations) return 0;
    return conversations.reduce((count, conversation) => {
      if (
        conversation.seen.some((user) => user._id === currentUserInfo._id) ||
        conversation.lastMessage?.sender?._id === currentUserInfo._id ||
        !conversation.lastMessage
      )
        return count;

      return count + 1;
    }, 0);
  }, [conversations]);

  const contacts = useMemo(() => {
    return currentUserInfo?.members ?? [];
  }, [currentUserInfo?.members]);

  const contactCount = useMemo(() => {
    if (!contacts) return 0;
    return contacts.length;
  }, [contacts]);

  const [optionIndex, setOptionIndex] = useState(0);


  const options = [
    { name: 'new message', icon: <FaComment className='text-2xl' />, count: notSeenCount },
    { name: 'contact', icon: <FaUser className='text-2xl' />, count: contactCount },
    { name: 'missing call', icon: <FaVideo className='text-2xl' />, count: calledList?.length ?? 0 }
  ];

  const OptionRender = useMemo(() => {
    switch (optionIndex) {
      case 0:
        return <ConversationList conversationID={conversationID} />;
      case 1:
        // return <ContactList contacts={contacts} />;
        return <>contact</>;
      case 2:
        // return <CalledList />;
        return <>missing call</>;
      default:
        return <></>;
    }
  }, [conversations, contacts, conversationID, optionIndex, calledList]);

  useEffect(() => {
    setSideBarSelect(OptionRender);
  }, [optionIndex, OptionRender]);

  return (
    <div className='fixed top-0 left-0 z-[99] pt-2 h-dvh overflow-hidden transition-transform lg:duration-500 max-lg:w-full max-lg:-translate-x-full'>
      <div className='option flex flex-col h-full items-center justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/' className='icon_logo'>
            <FaSnowflake className='text-3xl' />
          </Link>
          <div className='max-md/2:pt-0 pt-6'>
            {options.map((option, index) => (
              <div
                key={index}
                className={cn('optionItem flex p-4 rounded-xl transition-colors', option.name)}
                onClick={() => setOptionIndex(index)}
              >
                <button type="button" className={cn("relative inline-flex items-center p-3 text-sm font-medium text-center text-text-1 rounded-lg hover:bg-hover-1", index === optionIndex && 'bg-hover-1')}>
                  {option.icon}
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{option.count}</div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='mb-4'>
          <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-text-1 rounded-lg hover:bg-hover-1">
            <IoSettingsSharp className='text-2xl' />
          </button>
          <div
            className='hidden bg-foreground-2 pr-1.5 rounded-lg drop-shadow-xl md:w-[360px] w-screen border-border-1'
            data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
            <button type='button' className='w-full'>
              <div className='flex items-center gap-2.5 hover:bg-hover-2 p-2 px-2.5 rounded-md'>
                <IoMoonOutline className='size-6' />
                {t('Night Mode')}
                <label className='switch cursor-pointer ml-auto'>
                  <input
                    type='checkbox'
                    checked={modeTheme === 'dark' ? true : false}
                    onChange={toggleMode}
                  />
                  <span className='switch-button !relative'></span>
                </label>
              </div>
            </button>
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}
