'use client';

import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';

import AvatarMessage from './Avatar/AvatarMessage';
import { useSocketStore } from '@/store/socket';
import { useRouter } from '@/navigation';
import { IUserInfo } from '@/types';
import { useReceiveConversation } from '@/hooks/mutation';
import { messageService } from '@/services/MessageService';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { useTranslations } from 'next-intl';
import { useDebounce } from '@/hooks/special';

export interface IContactListProps {
  contacts: IUserInfo[];
}

export default function ContactList({ contacts }: IContactListProps) {
  const t = useTranslations();

  const { chatSocket } = useSocketStore();

  const { mutateReceiveConversation } = useReceiveConversation();

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [searchFriends, setSearchFriends] = useState<IUserInfo[]>(contacts);

  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const searchDebounce = useDebounce(search, 500);

  const HandleOnClick = (userFriend: string) => {
    void messageService
      .createConversation({
        type: 'private',
        members: [userFriend]
      })
      .then((res) => {
        chatSocket.emit(Socket.NEW_CONVERSATION, res.data.metadata);
        mutateReceiveConversation(res.data.metadata);
        router.push(`/messages/${res.data.metadata._id}`);
      });
  };

  useEffect(() => {
    setSearchFriends(contacts);
  }, [contacts]);

  useEffect(() => {
    if (!searchDebounce) {
      setIsLoadingSearch(false);
      setSearchFriends(contacts);
      return;
    }

    setIsLoadingSearch(false);
    setSearchFriends(
      contacts.filter((contact) => {
        const name = contact.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        const search = searchDebounce
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        return name.includes(search);
      })
    );
  }, [searchDebounce]);

  return (
    <div className='flex flex-col'>
      <div className='p-4'>
        <div className='flex mt-2 items-center justify-between'>
          <h2 className='text-2xl font-bold text-black ml-1 dark:text-white'> {t('Contacts')} </h2>
          {/* <!-- right action buttons --> */}
          <div className='flex items-center gap-2.5'>
            <div className='cursor-pointer' onClick={() => {}}>
              <FaUserPlus className='text-2xl rounded-lg' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pb-4 w-full'>
        <div className='relative mt-4'>
          <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
            <IoSearchOutline className='text-xl' />
          </div>
          <input
            type='text'
            placeholder={t('Search')}
            className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isLoadingSearch) setIsLoadingSearch(true);
            }}
          />
        </div>
      </div>
      <div className='px-2 w-full'>
        <div className='flex flex-col overflow-auto'>
          {searchFriends.length === 0 ? (
            <div className='flex flex-row items-center justify-center gap-4'>
              <Image
                className='!text-red-500 h-10 w-10'
                src='https://static.thenounproject.com/png/3668369-200.png'
                alt={t('Not found any friends')}
                width={500}
                height={500}
              />
              <span className='whitespace-nowrap'>{t('Not found any friends')}</span>
            </div>
          ) : (
            searchFriends.map((item) => {
              return (
                <div
                  className='user flex items-center cursor-pointer p-4 rounded-xl hover:bg-hover-1'
                  key={item._id}
                  onClick={() => HandleOnClick(item._id)}>
                  <div className='avatar relative'>
                    <AvatarMessage key={item._id} user={item} />
                  </div>
                  <div className='name text-center ml-2 font-bold'>{item.name}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
