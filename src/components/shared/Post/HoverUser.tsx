import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';
import FriendButton from '@/components/pages/Profile/FriendButton';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useOtherUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link, useRouter } from '@/navigation';
import { IUserInfo } from '@/types';
import { FaUserFriends } from 'react-icons/fa';

export interface IHoverUserProps {
  children: React.ReactNode;
  user: IUserInfo;
}

export default function HoverUser({ children, user }: IHoverUserProps) {
  const t = useTranslations();
  const router = useRouter();
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(user._id);
  return (
    <HoverCard openDelay={100} closeDelay={10}>
      <HoverCardTrigger>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className='border-border-1 bg-foreground-1 flex flex-col gap-3 !w-fit'>
        <div className='flex items-start gap-4'>
          <AvatarMessage size={50} user={user} />
          <div className='flex flex-col'>
            <span className='font-bold hover:underline'>{user.name}</span>
            <span className='font-semibold text-text-2'>{user.email}</span>
            <div className='flex flex-col mt-2'>
              {/* <div className='flex items-ce justify-between text-text-1'>
                <h3 className='font-bold text-lg'>
                  {t('Friends')}
                  <span className='block text-sm text-gray-500 mt-0. font-normal dark:text-white'>
                    {t('Num Friends', { count: otherUserInfo?.friends?.length || 0 })}
                  </span>
                </h3>
              </div> */}
              <div className='flex items-center gap-2'>
                <FaUserFriends className='text-xl' />
                <span className='text-text-1'>{t('Friends')}</span>
                <span className='text-text-2'>{otherUserInfo?.friends.length}</span>
              </div>

              <div className='relative w-full h-8'>
                {otherUserInfo?.friends.slice(0, 5).map((friend, index) => (
                  <Link key={friend._id} href={`/profile/${friend._id}`} className={`absolute top-0 left-${index === 0 ? index : (index + 3)} z-${index * 10}`}>
                    {/* <div className='w-fit aspect-square rounded-full overflow-hidden'> */}
                    <Image
                      width={200}
                      height={200}
                      src={getImageURL(friend.user_image)}
                      alt={friend.name}
                      className='object-cover w-6 h-6 rounded-full inset-0 hover:'
                    />
                    {/* </div> */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-2 w-fit'>
          <FriendButton profileID={user._id} />
          <Button
            variant='main'
            preIcon={
              <IoChatboxEllipsesOutline className='text-xl' />
            }
            onClick={() => {
              router.push(`/messages/${user._id}`);
            }}>
            {t('Message')}
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
