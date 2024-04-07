import { useCurrentUserInfo } from "@/hooks/query";
import { cn, getImageURL } from "@/lib/utils";
import { IUserInfo } from "@/types";
import Image from "next/image";
import { FaEye } from "react-icons/fa";



interface IAvatarGroup {
  users: IUserInfo[];
  size?: number;
  preview?: boolean;
  image?: string;
}

const AvatarGroup: React.FC<IAvatarGroup> = ({ size = 36, users, image, preview = false }) => {

  // const { activeMembers: members } = useAppSelector((state) => state.socketIO);
  const activeMembers = true;
  const { currentUserInfo } = useCurrentUserInfo();

  const slicedUsers = users.length > 3 ? users.slice(0, 4) : users.slice(0, 3);
  const isActive =
    users
      .map((user) => {
        if (user._id === currentUserInfo?._id) return;
        // return members.some((member) => member._id === user._id && member.is_online);
        return activeMembers;
      })
      .indexOf(true) !== -1;

  const positionMap: Record<number, string> = {
    0: `top-0 left-[${size / 4}px]`,
    1: 'bottom-1',
    2: 'bottom-1 right-0'
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
            src={getImageURL(image, 'avatar_mini')!}
            alt='Avatar'
            referrerPolicy="no-referrer"
            // preview={preview ? { src: getImageURL(image), mask: <FaEye /> } : false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      ) : (
        slicedUsers.map((user, index) => (
          <div
            key={user._id}
            className={cn('absolute inline-block rounded-full overflow-hidden', positionMap[index])}
            style={{ width: size / 2, height: size / 2 }}>
            {index < 3 ? (
              <img
                src={getImageURL(user.user_image, 'avatar_mini')}
                alt='Avatar'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <span className='flex flex-row items-center justify-center w-full h-full'>
                <div
                  className='text-xs'
                  style={{
                    fontSize: size / 4,
                  }}>
                  +{users.length - 3}
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
