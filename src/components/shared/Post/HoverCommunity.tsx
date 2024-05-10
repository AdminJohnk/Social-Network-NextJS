import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';
import FriendButton from '@/components/pages/Profile/FriendButton';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Link, useRouter } from '@/navigation';
import { IUserInfo } from '@/types';
import { FaUserFriends } from 'react-icons/fa';

export interface IHoverCommunityProps {
  children: React.ReactNode;
  user: IUserInfo;
}

export default function HoverCommunity({ children, user }: IHoverCommunityProps) {
  const t = useTranslations();
  const router = useRouter();
  const { otherUserInfo } = useOtherUserInfo(user._id);
  
  const { currentUserInfo } = useCurrentUserInfo();

  const isMe = currentUserInfo._id === user._id;

  return (
    <HoverCard openDelay={100} closeDelay={10}>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className='border-border-1 bg-foreground-1 flex flex-col gap-3 !w-fit' side='top'>
        <div className='flex items-start gap-4'>
          <AvatarMessage size={50} user={user} />
          <div className='flex flex-col'>
            <span className='font-bold hover:underline'>{user.name}</span>
            <span className='font-semibold text-text-2'>{user.email}</span>
            <div className='flex flex-col mt-2'>
              <div className='flex items-center gap-2'>
                <FaUserFriends className='text-xl' />
                <span className='text-text-1'>{t('Friends')}</span>
                <span className='text-text-2'>{otherUserInfo?.friends.length}</span>
              </div>

              <div className='flex mt-0.5 w-full h-8'>
                {otherUserInfo?.friends.slice(0, 5).map((friend, index) => (
                  <Link
                    key={friend._id}
                    href={`/profile/${friend._id}`}
                    className={cn(index !== 0 && '-ml-2')}>
                    <Image
                      width={200}
                      height={200}
                      src={getImageURL(friend.user_image)}
                      alt={friend.name}
                      className='object-cover w-6 h-6 rounded-full inset-0 hover:'
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {!isMe && (
          <div className='flex gap-2 w-fit'>
            <FriendButton profileID={user._id} />
            <Button
              variant='main'
              preIcon={<IoChatboxEllipsesOutline className='text-xl' />}
              onClick={() => {
                router.push(`/messages/${user._id}`);
              }}>
              {t('Message')}
            </Button>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
