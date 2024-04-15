import { forwardRef, useMemo } from 'react';
import { getDateTime } from '@/lib/descriptions/formatDateTime';
import { cn, getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { IMessage, IUserInfo, TypeofConversation } from '@/types';
import Image from 'next/image';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';

export interface IMessageBoxProps {
  message: IMessage;
  seen: IUserInfo[];
  isPrevMesGroup: boolean;
  isNextMesGroup: boolean;
  isLastMes: boolean;
  isMoreThan10Min: boolean;
  isAdmin: boolean;
  isCreator: boolean;
  type: TypeofConversation;
  typeCalled?: string;
}

const MessageBox = forwardRef<HTMLDivElement, IMessageBoxProps>(
  (
    {
      message,
      isLastMes,
      seen,
      isNextMesGroup,
      isPrevMesGroup,
      isMoreThan10Min,
      isAdmin,
      type,
      isCreator
    },
    ref
  ) => {
    const { data: session } = useSession();

    const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

    const seenList = useMemo(() => {
      return seen.filter((user) => user._id !== message.sender._id).map((user) => user.user_image);
    }, [seen, message]);

    const isOwn = currentUserInfo?._id === message.sender._id;

    const stateCalled = (senderId: string) => {
      if (message.content.includes('missed')) {
        return 'missed';
      }
      if (senderId === session?.id as string) {
        return 'outgoing';
      }
      return 'incoming';
    };
    const notification: Record<string, Record<string, JSX.Element>> = {
      video: {
        incoming: (
          <svg width='28' height='24' viewBox='0 0 28 24' fill='green' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.59169 5C3.68332 5 2.81215 5.30213 2.16983 5.83991C1.52752 6.3777 1.16667 7.1071 1.16667 7.86765V17.1324C1.16667 17.8929 1.52752 18.6223 2.16983 19.1601C2.81215 19.6979 3.68332 20 4.59169 20H14.6033C15.5117 20 16.3828 19.6979 17.0252 19.1601C17.6675 18.6223 18.0283 17.8929 18.0283 17.1324V7.86765C18.0283 7.1071 17.6675 6.3777 17.0252 5.83991C16.3828 5.30213 15.5117 5 14.6033 5H4.59169ZM23.4272 18.3615L19.6091 15.2291V9.85294L23.4156 6.65176C24.245 5.95471 25.6667 6.44618 25.6667 7.43V17.5735C25.6667 18.5512 24.2608 19.0453 23.4272 18.3615Z' />
            <path
              d='M11.6592 10.0323C11.7472 9.94386 11.8541 9.88151 11.9564 9.85891C12.0587 9.83632 12.1481 9.85534 12.2048 9.91178C12.2615 9.96823 12.281 10.0575 12.2589 10.1599C12.2368 10.2623 12.175 10.3695 12.087 10.4579L10.4551 12.1051L11.9523 13.5949C11.9946 13.637 12.0164 13.6977 12.0151 13.7693C12.0138 13.8409 11.9894 13.9202 11.945 13.9972C11.9006 14.0741 11.8382 14.1453 11.7656 14.2017C11.6931 14.2582 11.6137 14.2973 11.5374 14.3142L7.17299 15.278C7.07077 15.3005 6.98152 15.2815 6.92484 15.2251C6.86816 15.1687 6.84868 15.0795 6.87069 14.9772L7.81287 10.608C7.82938 10.5317 7.86811 10.4521 7.92417 10.3793C7.98023 10.3064 8.05111 10.2437 8.12785 10.1989C8.20459 10.1541 8.28375 10.1294 8.35534 10.1277C8.42693 10.126 8.48773 10.1476 8.53006 10.1896L10.0273 11.6794L11.6592 10.0323Z'
              fill='white'
            />
          </svg>
        ),
        outgoing: (
          <svg width='28' height='24' viewBox='0 0 28 24' fill='green' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.59169 5C3.68332 5 2.81215 5.30213 2.16983 5.83991C1.52752 6.3777 1.16667 7.1071 1.16667 7.86765V17.1324C1.16667 17.8929 1.52752 18.6223 2.16983 19.1601C2.81215 19.6979 3.68332 20 4.59169 20H14.6033C15.5117 20 16.3828 19.6979 17.0252 19.1601C17.6675 18.6223 18.0283 17.8929 18.0283 17.1324V7.86765C18.0283 7.1071 17.6675 6.3777 17.0252 5.83991C16.3828 5.30213 15.5117 5 14.6033 5H4.59169ZM23.4272 18.3615L19.6091 15.2291V9.85294L23.4156 6.65176C24.245 5.95471 25.6667 6.44618 25.6667 7.43V17.5735C25.6667 18.5512 24.2608 19.0453 23.4272 18.3615Z' />
            <path
              d='M7.46752 15.0981C7.37925 15.1862 7.27213 15.2482 7.16974 15.2704C7.06735 15.2926 6.97807 15.2733 6.92154 15.2166C6.86502 15.16 6.84587 15.0707 6.86832 14.9683C6.89078 14.866 6.95298 14.759 7.04126 14.6709L8.67905 13.0296L7.18712 11.5344C7.14505 11.4922 7.12343 11.4314 7.12499 11.3598C7.12656 11.2882 7.15123 11.209 7.1959 11.1322C7.24057 11.0554 7.30323 10.9844 7.37596 10.9283C7.4487 10.8721 7.52825 10.8333 7.60457 10.8167L11.9724 9.86835C12.0747 9.8462 12.1639 9.86555 12.2204 9.92216C12.2769 9.97876 12.296 10.068 12.2737 10.1702L11.3159 14.536C11.2991 14.6123 11.2601 14.6918 11.2038 14.7644C11.1475 14.837 11.0764 14.8995 10.9995 14.944C10.9226 14.9885 10.8433 15.013 10.7717 15.0144C10.7002 15.0158 10.6394 14.9941 10.5972 14.9519L9.10531 13.4568L7.46752 15.0981Z'
              fill='white'
            />
          </svg>
        ),
        missed: (
          <svg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4.59169 5C3.68332 5 2.81215 5.30213 2.16983 5.83991C1.52752 6.3777 1.16667 7.1071 1.16667 7.86765V17.1324C1.16667 17.8929 1.52752 18.6223 2.16983 19.1601C2.81215 19.6979 3.68332 20 4.59169 20H14.6033C15.5117 20 16.3828 19.6979 17.0252 19.1601C17.6675 18.6223 18.0283 17.8929 18.0283 17.1324V7.86765C18.0283 7.1071 17.6675 6.3777 17.0252 5.83991C16.3828 5.30213 15.5117 5 14.6033 5H4.59169ZM23.4272 18.3615L19.6091 15.2291V9.85294L23.4156 6.65176C24.245 5.95471 25.6667 6.44618 25.6667 7.43V17.5735C25.6667 18.5512 24.2608 19.0453 23.4272 18.3615Z'
              fill='#F80101'
            />
            <path
              d='M12.8525 15.1453C12.9464 15.2392 12.9992 15.3666 12.9992 15.4993C12.9992 15.6321 12.9464 15.7595 12.8525 15.8534C12.7586 15.9473 12.6313 16 12.4985 16C12.3657 16 12.2383 15.9473 12.1444 15.8534L9.5 13.2082L6.85472 15.8525C6.76082 15.9464 6.63347 15.9992 6.50068 15.9992C6.36789 15.9992 6.24054 15.9464 6.14665 15.8525C6.05275 15.7586 6 15.6313 6 15.4985C6 15.3657 6.05275 15.2384 6.14665 15.1445L8.79193 12.5002L6.14748 9.85509C6.05358 9.7612 6.00083 9.63385 6.00083 9.50107C6.00083 9.36829 6.05358 9.24095 6.14748 9.14705C6.24138 9.05316 6.36873 9.00042 6.50152 9.00042C6.63431 9.00042 6.76166 9.05316 6.85555 9.14705L9.5 11.7922L12.1453 9.14664C12.2392 9.05275 12.3665 9 12.4993 9C12.6321 9 12.7595 9.05275 12.8534 9.14664C12.9472 9.24053 13 9.36787 13 9.50065C13 9.63344 12.9472 9.76078 12.8534 9.85467L10.2081 12.5002L12.8525 15.1453Z'
              fill='white'
            />
          </svg>
        )
      },
      voice: {
        incoming: (
          <svg width='24' height='24' viewBox='0 0 24 24' fill='green' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.85959 9.77569C6.8416 14.0945 10.3634 17.5174 14.7353 19.3743L15.4373 19.6873C16.2147 20.0337 17.0894 20.0944 17.9071 19.8588C18.7249 19.6231 19.4333 19.1062 19.9075 18.3992L20.8253 17.0315C20.9689 16.817 21.0271 16.5565 20.9883 16.3012C20.9495 16.046 20.8166 15.8145 20.6157 15.6524L17.5062 13.1422C17.3979 13.0549 17.2731 12.9903 17.1392 12.9524C17.0054 12.9145 16.8653 12.9041 16.7273 12.9218C16.5893 12.9394 16.4563 12.9848 16.3363 13.0552C16.2163 13.1255 16.1117 13.2195 16.0289 13.3313L15.0667 14.6298C12.5968 13.4092 10.5977 11.4085 9.3783 8.93689L10.675 7.97414C10.7867 7.89125 10.8806 7.78662 10.9509 7.66653C11.0212 7.54644 11.0666 7.41337 11.0842 7.2753C11.1019 7.13724 11.0914 6.99703 11.0536 6.8631C11.0157 6.72916 10.9512 6.60427 10.8639 6.49591L8.35522 3.38451C8.19323 3.18354 7.96191 3.05056 7.70682 3.01174C7.45173 2.97293 7.19136 3.03111 6.97699 3.17481L5.60084 4.09831C4.88994 4.57533 4.37137 5.28938 4.1375 6.11325C3.90362 6.93712 3.96964 7.81732 4.32379 8.59704L4.85959 9.77569Z' />
            <path d='M19.6618 4.02969C19.7498 3.94128 19.8567 3.87893 19.959 3.85633C20.0613 3.83374 20.1507 3.85276 20.2074 3.9092C20.2641 3.96565 20.2836 4.0549 20.2615 4.15733C20.2394 4.25975 20.1776 4.36695 20.0896 4.45535L18.4577 6.10249L19.9549 7.59233C19.9972 7.63445 20.019 7.69515 20.0177 7.76674C20.0164 7.83834 19.992 7.91762 19.9476 7.99459C19.9032 8.07155 19.8408 8.14274 19.7682 8.19916C19.6957 8.25558 19.6163 8.2947 19.54 8.31159L15.1756 9.27543C15.0734 9.29795 14.9841 9.27891 14.9274 9.22251C14.8708 9.16611 14.8513 9.07695 14.8733 8.97463L15.8155 4.60545C15.832 4.5291 15.8707 4.4495 15.9268 4.37669C15.9828 4.30387 16.0537 4.24111 16.1304 4.19634C16.2072 4.15156 16.2864 4.12678 16.3579 4.12511C16.4295 4.12345 16.4903 4.14498 16.5327 4.18699L18.0299 5.67683L19.6618 4.02969Z' />
          </svg>
        ),
        outgoing: (
          <svg width='24' height='24' viewBox='0 0 24 24' fill='green' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.85959 9.77569C6.8416 14.0945 10.3634 17.5174 14.7353 19.3743L15.4373 19.6873C16.2147 20.0337 17.0894 20.0944 17.9071 19.8588C18.7249 19.6231 19.4333 19.1062 19.9075 18.3992L20.8253 17.0315C20.9689 16.817 21.0271 16.5565 20.9883 16.3012C20.9495 16.046 20.8166 15.8145 20.6157 15.6524L17.5062 13.1422C17.3979 13.0549 17.2731 12.9903 17.1392 12.9524C17.0054 12.9145 16.8653 12.9041 16.7273 12.9218C16.5893 12.9394 16.4563 12.9848 16.3363 13.0552C16.2163 13.1255 16.1117 13.2195 16.0289 13.3313L15.0667 14.6298C12.5968 13.4092 10.5977 11.4085 9.3783 8.93689L10.675 7.97414C10.7867 7.89125 10.8806 7.78662 10.9509 7.66653C11.0212 7.54644 11.0666 7.41337 11.0842 7.2753C11.1019 7.13724 11.0914 6.99703 11.0536 6.8631C11.0157 6.72916 10.9512 6.60427 10.8639 6.49591L8.35522 3.38451C8.19323 3.18354 7.96191 3.05056 7.70682 3.01174C7.45173 2.97293 7.19136 3.03111 6.97699 3.17481L5.60084 4.09831C4.88994 4.57533 4.37137 5.28938 4.1375 6.11325C3.90362 6.93712 3.96964 7.81732 4.32379 8.59704L4.85959 9.77569Z' />
            <path d='M15.4675 9.09809C15.3792 9.18618 15.2721 9.24815 15.1697 9.27038C15.0673 9.29261 14.9781 9.27328 14.9215 9.21663C14.865 9.15998 14.8459 9.07066 14.8683 8.96832C14.8908 8.86597 14.953 8.75899 15.0413 8.67091L16.679 7.02958L15.1871 5.53443C15.145 5.49215 15.1234 5.43138 15.125 5.35979C15.1266 5.2882 15.1512 5.209 15.1959 5.1322C15.2406 5.0554 15.3032 4.98443 15.376 4.92827C15.4487 4.87211 15.5282 4.83326 15.6046 4.81665L19.9724 3.86835C20.0747 3.8462 20.1639 3.86555 20.2204 3.92216C20.2769 3.97876 20.296 4.06798 20.2737 4.17023L19.3159 8.53603C19.2991 8.61231 19.2601 8.69178 19.2038 8.76439C19.1475 8.83701 19.0764 8.89951 18.9995 8.94401C18.9226 8.98852 18.8433 9.01302 18.7717 9.01443C18.7001 9.01584 18.6394 8.99409 18.5972 8.95193L17.1053 7.45677L15.4675 9.09809Z' />
          </svg>
        ),
        missed: (
          <svg width='24' height='24' viewBox='0 0 24 24' fill='red' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.85959 9.77569C6.8416 14.0945 10.3634 17.5174 14.7353 19.3743L15.4373 19.6873C16.2147 20.0337 17.0894 20.0944 17.9071 19.8588C18.7249 19.6231 19.4333 19.1062 19.9075 18.3992L20.8253 17.0315C20.9689 16.817 21.0271 16.5565 20.9883 16.3012C20.9495 16.046 20.8166 15.8145 20.6157 15.6524L17.5062 13.1422C17.3979 13.0549 17.2731 12.9903 17.1392 12.9524C17.0054 12.9145 16.8653 12.9041 16.7273 12.9218C16.5893 12.9394 16.4563 12.9848 16.3363 13.0552C16.2163 13.1255 16.1117 13.2195 16.0289 13.3313L15.0667 14.6298C12.5968 13.4092 10.5977 11.4085 9.3783 8.93689L10.675 7.97414C10.7867 7.89125 10.8806 7.78662 10.9509 7.66653C11.0212 7.54644 11.0666 7.41337 11.0842 7.2753C11.1019 7.13724 11.0914 6.99703 11.0536 6.8631C11.0157 6.72916 10.9512 6.60427 10.8639 6.49591L8.35522 3.38451C8.19323 3.18354 7.96191 3.05056 7.70682 3.01174C7.45173 2.97293 7.19136 3.03111 6.97699 3.17481L5.60084 4.09831C4.88994 4.57533 4.37137 5.28938 4.1375 6.11325C3.90362 6.93712 3.96964 7.81732 4.32379 8.59704L4.85959 9.77569Z' />
            <path d='M19.8947 8.38952C19.9617 8.45659 19.9994 8.54755 19.9994 8.64239C19.9994 8.73723 19.9617 8.82819 19.8947 8.89526C19.8276 8.96232 19.7366 9 19.6418 9C19.5469 9 19.456 8.96232 19.3889 8.89526L17.5 7.00589L15.6105 8.89466C15.5434 8.96173 15.4525 8.9994 15.3576 8.9994C15.2628 8.9994 15.1718 8.96173 15.1047 8.89466C15.0377 8.8276 15 8.73664 15 8.6418C15 8.54695 15.0377 8.45599 15.1047 8.38893L16.9942 6.50015L15.1053 4.61078C15.0383 4.54371 15.0006 4.45275 15.0006 4.35791C15.0006 4.26306 15.0383 4.1721 15.1053 4.10504C15.1724 4.03797 15.2634 4.0003 15.3582 4.0003C15.4531 4.0003 15.544 4.03797 15.6111 4.10504L17.5 5.99441L19.3895 4.10474C19.4566 4.03768 19.5475 4 19.6424 4C19.7372 4 19.8282 4.03768 19.8953 4.10474C19.9623 4.17181 20 4.26277 20 4.35761C20 4.45245 19.9623 4.54341 19.8953 4.61048L18.0058 6.50015L19.8947 8.38952Z' />
          </svg>
        )
      }
    };

    const roundedCornerStyle = (isOwn: boolean, isNextMesGroup: boolean, isPrevMesGroup: boolean) => {
      if (isOwn) {
        if (isNextMesGroup && isPrevMesGroup) return 'rounded-s-[1.5rem] rounded-e-[0.75rem] my-[1px]';
        if (isNextMesGroup && !isPrevMesGroup)
          return 'rounded-t-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.75rem] my-[1px]';
        if (!isNextMesGroup && isPrevMesGroup)
          return 'rounded-b-[1.5rem] rounded-tl-[1.5rem] rounded-tr-[0.75rem] my-[1px]';
        if (!isNextMesGroup && !isPrevMesGroup) return 'rounded-[1.5rem] my-2';
      } else {
        if (isNextMesGroup && isPrevMesGroup) return 'rounded-e-[1.5rem] rounded-s-[0.75rem] my-[1px]';
        if (isNextMesGroup && !isPrevMesGroup)
          return 'rounded-t-[1.5rem] rounded-br-[1.5rem] rounded-bl-[0.75rem] my-[1px]';
        if (!isNextMesGroup && isPrevMesGroup)
          return 'rounded-b-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[0.75rem] my-[1px]';
        if (!isNextMesGroup && !isPrevMesGroup) return 'rounded-[1.5rem] my-2';
      }
    };

    const receivedMessage = (content: string) => {
      return <>
        <div className='flex gap-3'>
          {((!isNextMesGroup && isPrevMesGroup) || (!isNextMesGroup && !isPrevMesGroup)) ? (
            <Image
              width={500}
              height={500}
              src={getImageURL(message.sender.user_image, 'avatar_mini')!}
              alt=''
              className='w-9 h-9 rounded-full shadow'
            />
          ) : (
            <div className='w-9 h-9 rounded-full'></div>
          )}
          <div className={cn('px-4 py-2 max-w-sm bg-foreground-2', roundedCornerStyle(isOwn, isNextMesGroup, isPrevMesGroup))}>{content}</div>
        </div>
      </>
    }

    const sentMessage = (content: string) => {
      return <>
        <div className='flex gap-2 flex-row-reverse items-end'>
          <div className={cn('px-4 py-2 max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow', roundedCornerStyle(isOwn, isNextMesGroup, isPrevMesGroup))}>
            {content}
          </div>
        </div>
      </>
    }
    const messageCall = () => {
      return <>
        {isOwn ? (
          <div className='flex gap-2 flex-row-reverse items-end my-1'>
            <div className='flex items-center cursor-pointer hover:scale-[103%] px-4 py-2 max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow rounded-full'>
              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-neutral-300'>
                {notification[message.type][stateCalled(message.sender._id)]}
              </div>
              <div className='flex flex-col mx-2'>
                <div>{message.content}</div>
                <div> {getDateTime(message.createdAt)}</div>
              </div>
            </div>
          </div>) : (
          <div className='flex gap-3 my-1'>
            <Image
              width={500}
              height={500}
              src={getImageURL(message.sender.user_image, 'avatar_mini')!}
              alt=''
              className='w-9 h-9 rounded-full shadow'
            />
            <div className='flex items-center cursor-pointer hover:scale-[103%] max-w-sm bg-foreground-2 px-4 py-2 rounded-full'>
              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-neutral-300'>
                {notification[message.type][stateCalled(message.sender._id)]}
              </div>
              <div className='flex flex-col mx-2'>
                <div>{message.content}</div>
                <div> {getDateTime(message.createdAt)}</div>
              </div>
            </div>
          </div>
        )}
      </>
    }

    const receivedMedia = (content: string[]) => {
      return <>
        <div className='flex gap-2 flex-row-reverse items-start'>
          <Link className='block rounded-[18px] border overflow-hidden' href='#'>
            <div className='max-w-md'>
              <div className='max-w-full relative w-72'>
                <div className='relative' style={{ paddingBottom: '57.4286%' }}>
                  <div className='w-full h-full absolute inset-0'>
                    <Image
                      width={500}
                      height={500}
                      src={getImageURL(content[0])}
                      alt=''
                      className='block max-w-full max-h-52 w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    }

    const sentMedia = (content: string[]) => {
      return <>
        <div className='flex gap-2 flex-row-reverse items-end'>
          <Link className='block rounded-[18px] border overflow-hidden' href='#'>
            <div className='max-w-md'>
              <div className='max-w-full relative w-72'>
                <div className='relative' style={{ paddingBottom: '57.4286%' }}>
                  <div className='w-full h-full absolute inset-0'>
                    <Image
                      width={500}
                      height={500}
                      src={getImageURL(content[0])}
                      alt=''
                      className='block max-w-full max-h-52 w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    }

    const time = (time: string) => {
      return <>
        <div className='flex justify-center my-4'>
          <div className='font-medium text-gray-500 text-sm dark:text-white/70'>
            {getDateTime(time)}
          </div>
        </div>
      </>
    }

    const messageContent = () => {
      if (message.type === 'text') {
        if (!isOwn) {
          return <>
            {receivedMessage(message.content)}
          </>
        } else {
          return <>
            {sentMessage(message.content)}
          </>
        }
      } else if (message.type === 'image') {
        if (!isOwn) {
          return <>
            {receivedMedia(message.images!)}
          </>
        } else {
          return <>
            {sentMedia(message.images!)}
          </>
        }
      } else if (message.type === 'voice' || message.type === 'video') {
        return <>
          {messageCall()}
        </>
      } else if (message.type === 'notification') {
        return <>
          <div className='flex justify-center mb-2'>
            <div className='text-sm text-gray-500 font-semibold'>
              {isOwn ? 'You' : message.sender.name}&nbsp;{message.content}
            </div>
          </div>
        </>
      }
    }

    return <>
      {isMoreThan10Min && time(message.createdAt)}
      {messageContent()}
      <div className='seen-message text-xs font-light'>
        <div className='relative flex flex-row-reverse items-end'>
          {isLastMes &&
            isOwn &&
            seenList.length > 0 &&
            seenList.map((userImage, index) => (
              <div
                key={index}
                className='inline-block rounded-full overflow-hidden h-4 w-4 mt-1 mr-2 mb-2'>
                <Image
                  className='h-4 w-4'
                  src={getImageURL(userImage, 'avatar_mini')}
                  alt='User Image'
                  width={500}
                  height={500}
                />
              </div>
            ))}
          {isOwn && (
            <>
              {seenList.length === 0 && message.isSending && (
                <svg
                  className='w-4 h-4 text-gray-400 -mt-1 mr-2 mb-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='10' r='8' stroke='currentColor' fill='none' />
                </svg>
              )}
              {isLastMes && seenList.length === 0 && !message.isSending && (
                <svg
                  className='w-4 h-4 text-gray-400 -mt-1 mr-2 mb-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 7.707a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5a1 1 0 10-1.414-1.414L10.5 9.086 8.707 7.707z'
                  />
                </svg>
              )}
            </>
          )}
        </div>
      </div>
    </>
  })

export default MessageBox;  