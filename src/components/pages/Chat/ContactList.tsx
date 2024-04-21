'use client';

import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import Image from 'next/image';
import { TextInput } from 'flowbite-react';
import { IoSearchOutline } from 'react-icons/io5';

import AvatarMessage from './Avatar/AvatarMessage';
import { useSocketStore } from '@/store/socket';
import { useRouter } from '@/navigation';
import { IUserInfo } from '@/types';
import { useReceiveConversation } from '@/hooks/mutation';
import { messageService } from '@/services/MessageService';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { useTranslations } from 'next-intl';
import SearchChat from './SearchChat';

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
    if (search === '') {
      setSearchFriends(contacts);
    } else {
      const searchTerm = removeAccents(search).toLowerCase();

      setSearchFriends(
        contacts.filter((friend) => {
          const name = removeAccents(friend.name).toLowerCase();
          return name.includes(searchTerm);
        })
      );
    }
  }, [search]);

  const removeAccents = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };

  return (
    <div>
      <div className='flex flex-col'>
        <div>
          <div className='myInfo flex justify-between items-center py-4 px-3 w-full'>
            <div className='text-2xl'>
              {t("Contacts")}
            </div>
            <div className='iconPlus cursor-pointer' onClick={() => { }}>
              <FaUserPlus
                className='text-2xl rounded-lg'
              />
            </div>
          </div>
        </div>
        <div className='px-4 pb-4 w-full'>
          {/* <TextInput
            placeholder='Search'
            className='rounded-full'
            addon={<IoSearchOutline className='text-xl rounded-md' />}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <SearchChat setSearch={setSearch} />
        </div>
        <div className='px-2 w-full'>
          <div
            className='flex flex-col overflow-auto'>
            {searchFriends.length === 0 ? (
              // <Empty
              //   image='https://static.thenounproject.com/png/3668369-200.png'
              //   description={
              //     <p className='text-sm' style={{ color: themeColorSet.colorText2 }}>
              //       No contact found
              //     </p>
              //   }
              //   imageStyle={{
              //     display: 'flex',
              //     justifyContent: 'center',
              //     filter: theme === 'dark' ? 'invert(1)' : 'invert(0)'
              //   }}
              // />
              <div className='flex flex-row items-center justify-center gap-4'>
                <Image
                  className='!text-red-500 h-10 w-10'
                  src='https://static.thenounproject.com/png/3668369-200.png'
                  alt='No contact found'
                  width={500}
                  height={500} />
                <span className='whitespace-nowrap'>{t("No contact found")}</span>
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
                    <div className='name text-center ml-2 font-bold'>
                      {item.name}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
