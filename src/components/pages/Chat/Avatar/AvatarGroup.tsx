import Image from 'next/image';

import { useCurrentUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { useSocketStore } from '@/store/socket';
import { IUserInfo } from '@/types';

interface IAvatarGroup {
  users: IUserInfo[];
  size?: number;
  preview?: boolean;
  image?: string;
}

const AvatarGroup: React.FC<IAvatarGroup> = ({ size = 36, users, image, preview = false }) => {
  const { activeMembers: members } = useSocketStore();

  const { currentUserInfo } = useCurrentUserInfo();

  const slicedUsers = users.length > 3 ? users.slice(0, 4) : users.slice(0, 3);
  const isActive =
    users
      .map((user) => {
        if (user._id === currentUserInfo._id) return;
        return members.some((member) => member._id === user._id && member.is_online);
      })
      .indexOf(true) !== -1;

  let pixelValue = Math.floor(size / 4);
  let floatValue = pixelValue / 4;

  // Check if the decimal part is not 0.5
  if (floatValue % 1 !== 0.5) {
    // Round down to the nearest integer
    floatValue = Math.floor(floatValue);
  }

  const positionMap: Record<number, string> = {
    0: `top-0.5 left-${floatValue}`,
    1: 'bottom-0.5 left-0',
    2: 'bottom-0.5 right-0'
  };

  if (users.length > 3) {
    positionMap[0] = 'top-0 left-0';
    positionMap[1] = 'top-0 right-0';
    positionMap[2] = 'bottom-0 left-0';
    positionMap[3] = 'bottom-0 right-0';
  }

  return (
    <div className='relative' style={{ width: size, height: size }}>
      {image ? (
        <div className='relative flex rounded-full overflow-hidden' style={{ width: size, height: size }}>
          <Image
            width={500}
            height={500}
            src={getImageURL(image, 'avatar')!}
            alt='Avatar'
            referrerPolicy='no-referrer'
            className='w-full h-full object-cover'
            priority
          />
        </div>
      ) : (
        slicedUsers.map((user, index) => (
          <div
            key={user._id}
            className={cn('absolute inline-block rounded-full overflow-hidden', positionMap[index])}
            style={{ width: size / 2, height: size / 2 }}>
            {users.length === 4 || (users.length > 4 && index < 3) ? (
              <Image
                width={500}
                height={500}
                src={getImageURL(user.user_image, 'avatar')}
                alt='Avatar'
                referrerPolicy='no-referrer'
                className='w-full h-full object-cover'
                priority
              />
            ) : (
              <span className='flex flex-row items-center justify-center w-full h-full bg-foreground-2'>
                <div
                  className='text-xs'
                  style={{
                    fontSize: size / 4
                  }}>
                  {users.length - 3}
                </div>
              </span>
            )}
          </div>
        ))
      )}
      {isActive && (
        <span
          className={cn(
            'absolute block rounded-full bg-green-500 ring-white',
            image ? 'top-0 right-0' : '-top-1 -right-1',
            size / 4 < 20 ? 'ring-2' : 'ring-4'
          )}
          style={{ width: size / 4, height: size / 4 }}
        />
      )}
    </div>
  );
};

export default AvatarGroup;
