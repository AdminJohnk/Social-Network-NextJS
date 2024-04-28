import { useCallback, useEffect, useMemo, useState } from 'react';
import { Checkbox } from 'flowbite-react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';

import { useCurrentUserInfo } from '@/hooks/query';
import { messageService } from '@/services/MessageService';
import { Button } from '@/components/ui/button';
import AvatarMessage from '../Avatar/AvatarMessage';
import { IMessage, IUserInfo } from '@/types';
import { useSendMessage } from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { useDebounce } from '@/hooks/special';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { cn } from '@/lib/utils';

export interface IMembersToGroupProps {
  users: IUserInfo[];
  conversationID: string;
  handleClose: () => void;
}

export default function MembersToGroup({ users, conversationID, handleClose }: IMembersToGroupProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateSendMessage } = useSendMessage();

  const { chatSocket } = useSocketStore();

  const [checkList, setCheckList] = useState<Record<string, boolean>>({});
  const [checkedUsers, setCheckedUsers] = useState<IUserInfo[]>([]);
  const [search, setSearch] = useState<string>('');
  const [members, setMembers] = useState<IUserInfo[]>(users);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const searchDebounce = useDebounce(search, 500);

  const HandleOnClick = (userID: string) => {
    setCheckList({ ...checkList, [userID]: !checkList[userID] });
    if (checkList[userID]) {
      setCheckedUsers(checkedUsers.filter((user) => user._id !== userID));
    } else {
      setCheckedUsers([...checkedUsers, users.find((user) => user._id === userID)!]);
    }
  };

  const handleUncheck = (userID: string) => {
    setCheckList({ ...checkList, [userID]: false });
    setCheckedUsers(checkedUsers.filter((user) => user._id !== userID));
  };

  const handleFirstName = (name: string) => {
    const arr = name.split(' ');
    return arr[arr.length - 1];
  };

  const [isLoading, setIsLoading] = useState(false);
  const [membersToAdd, setMembersToAdd] = useState<IUserInfo[]>([]);

  useEffect(() => {
    setMembersToAdd(checkedUsers);
  }, [checkedUsers]);

  useEffect(() => {
    if (!searchDebounce) {
      setIsLoadingSearch(false);
      setMembers(users);
      return;
    }

    setIsLoadingSearch(false);
    setMembers(
      users.filter((user) => {
        const name = user.name
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

  const isChanged = useMemo(() => {
    return membersToAdd.length === 0;
  }, [membersToAdd]);

  const onSubmit = useCallback(() => {
    setIsLoading(true);

    messageService
      .addMember(
        conversationID,
        membersToAdd.map((member) => member._id)
      )
      .then((res) => {
        membersToAdd.forEach((member) => {
          const message = {
            _id: uuidv4().replace(/-/g, ''),
            conversation_id: conversationID,
            sender: {
              _id: currentUserInfo._id,
              user_image: currentUserInfo.user_image,
              name: currentUserInfo.name
            },
            isSending: true,
            type: 'notification',
            action: 'add_member',
            target: {
              _id: member._id,
              name: member.name
            },
            seen: []
          };

          mutateSendMessage(message as unknown as IMessage);
          chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
        });
        chatSocket.emit(Socket.ADD_MEMBER, res.data.metadata);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
        handleClose();
      });
  }, [membersToAdd]);

  return (
    <div className='rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex flex-row h-28 w-full'>
          {checkedUsers.length == 0 ? (
            <div className='w-full h-full flex items-center justify-center'>
              <div className='font-bold text-sm'>{t('You have not selected any members yet')}</div>
            </div>
          ) : (
            <div className='list-users-checked w-full flex overflow-x-auto px-3'>
              {checkedUsers.map((user) => (
                <div key={user._id} className='flex items-center justify-between gap-8 mt-4'>
                  <div className='flex flex-col items-center'>
                    <div className='avatar relative'>
                      <AvatarMessage key={user._id} user={user} size={52} />
                      <FaXmark
                        className='absolute block rounded-full -top-0.5 -left-1 w-4 h-4 cursor-pointer'
                        onClick={() => handleUncheck(user._id)}
                      />
                    </div>
                    <div className='name_career'>
                      <div className='name mb-1'>{handleFirstName(user.name)}</div>
                    </div>
                  </div>
                  <div className='flex items-center'></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full gap-5'>
          <div className='font-bold text-lg'>{t('List Friends')}</div>
          <div className='relative'>
            <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
              <IoSearchOutline className='text-xl' />
            </div>
            <input
              type='text'
              placeholder={t('Search')}
              className='w-full !pl-10 !py-2 rounded-lg bg-foreground-1'
              onChange={(e) => {
                setSearch(e.target.value);
                if (!isLoadingSearch) setIsLoadingSearch(true);
              }}
            />
          </div>
          <div className='list-users flex flex-col w-full max-h-80 overflow-auto gap-5'>
            {isLoadingSearch ? (
              <div className='flex-center p-1'>
                <CircularProgress size={20} className='!text-text-1' />
              </div>
            ) : users.length == 0 ? (
              <div className='w-full h-full flex items-center justify-center'>
                <div className='font-bold text-sm py-2'>You don't have any friends anymore :(</div>
              </div>
            ) : members.length == 0 ? (
              <div className='w-full h-full flex items-center justify-center'>
                <div className='font-bold text-sm py-2'>{t('Not found any friends')}</div>
              </div>
            ) : (
              members.map((user) => (
                <div
                  className='user flex items-center justify-between cursor-pointer'
                  key={user._id}
                  onClick={() => HandleOnClick(user._id)}>
                  <div className='info flex items-center'>
                    <div className='avatar relative'>
                      <AvatarMessage key={user._id} user={user} />
                    </div>
                    <div className='name text-center ml-2 font-bold'>{user.name}</div>
                  </div>
                  <Checkbox className='items-end mr-1' checked={checkList[user._id]} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-end mt-2 gap-5'>
        <Button
          className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
          variant='destructive'
          onClick={handleClose}
          disabled={isLoading}>
          <div className='font-bold'>{t('Cancel')}</div>
        </Button>
        <Button
          className={cn(
            'button lg:px-6 text-white max-md:flex-1',
            (!isChanged || isLoading) && 'select-none'
          )}
          onClick={onSubmit}
          disabled={isChanged || isLoading}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          <div className='font-bold'>{t('Add')}</div>
        </Button>
      </div>
    </div>
  );
}
