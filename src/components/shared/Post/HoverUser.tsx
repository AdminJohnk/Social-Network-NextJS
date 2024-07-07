import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';
import FriendButton from '@/components/pages/Profile/FriendButton';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useReceiveConversation } from '@/hooks/mutation';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { Link, useRouter } from '@/navigation';
import { messageService } from '@/services/MessageService';
import { useSocketStore } from '@/store/socket';
import { IUserInfo } from '@/types';

export interface IHoverUserProps {
  children: React.ReactNode;
  user: IUserInfo;
}

export default function HoverUser({ children, user }: IHoverUserProps) {
  const t = useTranslations();
  const router = useRouter();

  const [isCreateConversation, setIsCreateConversation] = useState(false);

  const { otherUserInfo } = useOtherUserInfo(user._id);
  const { currentUserInfo } = useCurrentUserInfo();

  const { chatSocket } = useSocketStore();

  const { mutateReceiveConversation } = useReceiveConversation();

  const mutualFriends = useMemo(() => {
    if (!otherUserInfo?.friends) return [];
    return otherUserInfo?.friends.filter((friend) => {
      return currentUserInfo?.friends?.findIndex((f) => f._id === friend._id) !== -1;
    });
  }, [otherUserInfo?.friends, currentUserInfo?.friends]);

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

  const isMe = currentUserInfo._id === user._id;

  return (
    <HoverCard openDelay={100} closeDelay={10}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='flex !w-fit flex-col gap-3 border-border-1 bg-foreground-1' side='top'>
        <div className='flex items-start gap-4'>
          <AvatarMessage size={50} user={user} />
          <div className='flex flex-col'>
            <span
              className='cursor-pointer font-bold hover:underline'
              onClick={() => {
                router.push(`/profile/${user._id}`);
              }}>
              {user.name}
            </span>
            <span className='font-semibold text-text-2'>{user.email}</span>
            {!isMe && (
              <div className='mt-2 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <FaUserFriends className='text-xl' />
                  <span className='text-text-1'>
                    {t('Num mutual friends', { count: mutualFriends?.length || 0 })}
                  </span>
                </div>

                <div className='flex-start mt-0.5 h-8 w-full'>
                  {mutualFriends?.slice(0, 5).map((friend, index) => (
                    <Link
                      key={friend._id}
                      href={`/profile/${friend._id}`}
                      className={cn(index !== 0 && '-ml-2')}>
                      <Image
                        width={200}
                        height={200}
                        src={getImageURL(friend.user_image)}
                        alt={friend.name}
                        className='hover: inset-0 h-6 w-6 rounded-full object-cover'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {!isMe && (
          <div className='flex w-fit gap-2'>
            <FriendButton profileID={user._id} />
            <Button
              variant='main'
              disabled={isCreateConversation}
              preIcon={<IoChatboxEllipsesOutline className='text-xl' />}
              onClick={() => handleOnClick(user._id)}>
              {t('Message')}
              {isCreateConversation && '...'}
            </Button>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
