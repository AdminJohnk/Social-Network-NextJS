import { useCallback, useEffect, useMemo, useState } from 'react';
import { Checkbox, TextInput } from 'flowbite-react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { useCurrentUserInfo } from '@/hooks/query';

import { messageService } from '@/services/MessageService';
import AvatarMessage from '../Avatar/AvatarMessage';
import { IMessage, IUserInfo } from '@/types';
import { useSendMessage } from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { Button } from '@mui/material';

export interface IMembersToGroupProps {
  users: IUserInfo[];
  conversationID: string;
  handleClose: () => void;
}

export default function MembersToGroup({ users, conversationID, handleClose }: IMembersToGroupProps) {

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);
  const { mutateSendMessage } = useSendMessage();

  const { chatSocket } = useSocketStore()


  const [checkList, setCheckList] = useState<Record<string, boolean>>({});
  const [checkedUsers, setCheckedUsers] = useState<IUserInfo[]>([]);
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
            content: `added ${member.name} to the group`,
            createdAt: new Date()
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
    <div className='bg-foreground-1 rounded-lg p-8 w-[720px]'>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <TextInput
            placeholder='Search'
            className='rounded-full'
            addon={<IoSearchOutline className='text-xl' />}
          // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='flex flex-row h-28 w-full'>
          {checkedUsers.length == 0 && (
            <div className='w-full h-full flex items-center justify-center'>
              <div className='font-bold text-sm'>You have not selected any members yet</div>
            </div>
          )}
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
                    <div className='name mb-1'> {handleFirstName(user.name)}</div>
                  </div>
                </div>
                <div className='flex items-center'></div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='font-bold text-lg'> List Friends </div>
          <div className='list-users flex flex-col w-full max-h-80 overflow-auto'>
            {users.length == 0 && (
              <div className='w-full h-full flex items-center justify-center'>
                <div className='font-bold text-sm py-2'>You don't have any friends anymore :(</div>
              </div>
            )}
            {users.map((user) => (
              <div
                className='user flex items-center justify-between cursor-pointer mt-5'
                key={user._id}
                onClick={() => HandleOnClick(user._id)}>
                <div className='info flex items-center'>
                  <div className='avatar relative'>
                    <AvatarMessage key={user._id} user={user} />
                  </div>
                  <div className='name text-center ml-2 font-bold'>
                    {user.name}
                  </div>
                </div>
                <Checkbox className='items-end mr-1' checked={checkList[user._id]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-end mt-4'>
        <Button onClick={() => handleClose()} disabled={isLoading}>
          <div className='font-bold text-lg'>Cancel</div>
        </Button>
        <Button onClick={onSubmit} disabled={isChanged}>
          <div className='font-bold text-lg'>Add</div>
        </Button>
      </div>
    </div>

  );
}
