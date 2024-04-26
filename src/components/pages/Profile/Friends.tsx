import { useOtherUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface IFriendsProps {
  profileID: string;
}

// const listFriends = [
//   {
//     id: 1,
//     name: 'Jesse Steeve',
//     avatar: '/images/avatars/avatar-7.jpg'
//   },
//   {
//     id: 2,
//     name: 'John Michael',
//     avatar: '/images/avatars/avatar-2.jpg'
//   },
//   {
//     id: 3,
//     name: 'Monroe Parker',
//     avatar: '/images/avatars/avatar-3.jpg'
//   },
//   {
//     id: 4,
//     name: 'Martin Gray',
//     avatar: '/images/avatars/avatar-4.jpg'
//   },
//   {
//     id: 5,
//     name: 'James Lewis',
//     avatar: '/images/avatars/avatar-5.jpg'
//   },
//   {
//     id: 6,
//     name: 'Alex stella',
//     avatar: '/images/avatars/avatar-6.jpg'
//   }
// ];

export default function Friends({ profileID }: IFriendsProps) {
  const t = useTranslations();
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  return (
    <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
      <div className='flex items-ce justify-between text-text-1'>
        <h3 className='font-bold text-lg'>
          {t('Friends')}
          <span className='block text-sm text-gray-500 mt-0. font-normal dark:text-white'>
            {t('Num Friends', { count: otherUserInfo?.friends?.length || 0 })}
          </span>
        </h3>
      </div>

      <div className='grid grid-cols-3 gap-2 gap-y-5 text-center text-sm mt-4 mb-2'>
        {otherUserInfo?.friends.map((friend) => (
          <Link key={friend._id} href={`/profile/${friend._id}`}>
            <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
              <Image
                width={500}
                height={500}
                src={getImageURL(friend.user_image)}
                alt={friend.name}
                className='object-cover w-full h-full inset-0 hover:'
              />
            </div>
            <div className='mt-2 line-clamp-1'>{friend.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
