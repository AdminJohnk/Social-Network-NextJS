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
import { Button } from '@/components/ui/button';

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
  const [isCreateConversation, setIsCreateConversation] = useState(false);

  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const searchDebounce = useDebounce(search, 500);

  const handleOnClick = (userFriend: string) => {
    setIsCreateConversation(true);
    messageService
      .createConversation({
        type: 'private',
        members: [userFriend]
      })
      .then((res) => {
        chatSocket.emit(Socket.NEW_CONVERSATION, res.data.metadata);
        mutateReceiveConversation(res.data.metadata);
        router.push(`/messages/${res.data.metadata._id}`);
      })
      .finally(() => setIsCreateConversation(false));
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
    <>
      {/* <!-- heading title --> */}
      <div className='p-4'>
        <div className='mt-2 flex items-center justify-between'>
          <h2 className='ml-1 text-2xl font-bold text-black dark:text-white'> {t('Contacts')} </h2>
          {/* <!-- right action buttons --> */}
          <div className='rounded-full p-2 hover:bg-hover-1'>
            <FaUserPlus className='rounded-lg text-2xl' />
          </div>
        </div>

        {/* <!-- search --> */}
        <div className='relative mt-4'>
          <div className='absolute bottom-1/2 left-3 flex translate-y-1/2'>
            <IoSearchOutline className='text-xl' />
          </div>
          <input
            type='text'
            placeholder={t('Search')}
            className='w-full !rounded-lg bg-foreground-1 !py-2 !pl-10'
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isLoadingSearch) setIsLoadingSearch(true);
            }}
          />
        </div>
      </div>
      <div className='w-full px-2'>
        <div className='flex flex-col gap-1 overflow-auto'>
          {searchFriends.length === 0 ? (
            <div className='flex-center flex-row gap-4'>
              <Image
                className='h-10 w-10 !text-red-500'
                src='https://static.thenounproject.com/png/3668369-200.png'
                alt={t('Not found any friends')}
                width={500}
                height={500}
              />
              <span className='text-center'>{t('Not found any friends')}</span>
            </div>
          ) : (
            searchFriends.map((item) => {
              return (
                <Button
                  variant='main'
                  className='user flex-start gap-3 rounded-xl bg-transparent p-4 hover:bg-hover-1'
                  disabled={isCreateConversation}
                  key={item._id}
                  onClick={() => handleOnClick(item._id)}>
                  <AvatarMessage key={item._id} user={item} />
                  <div className='name text-center font-bold'>{item.name}</div>
                </Button>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
