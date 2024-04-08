import { forwardRef } from 'react';
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
      isCreator
    },
    ref
  ) => {

    const { data: session } = useSession();

    const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

    const isOwn = currentUserInfo?._id === message.sender._id;

    const roundedCornerStyle = (isOwn: boolean, isNextMesGroup: boolean, isPrevMesGroup: boolean) => {
      if (isOwn) {
        if (isNextMesGroup && isPrevMesGroup) return 'rounded-s-[1.5rem] rounded-e-[0.75rem]';
        if (isNextMesGroup && !isPrevMesGroup)
          return 'rounded-t-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.75rem]';
        if (!isNextMesGroup && isPrevMesGroup)
          return 'rounded-b-[1.5rem] rounded-tl-[1.5rem] rounded-tr-[0.75rem]';
        if (!isNextMesGroup && !isPrevMesGroup) return 'rounded-[1.5rem] my-1';
      } else {
        if (isNextMesGroup && isPrevMesGroup) return 'rounded-e-[1.5rem] rounded-s-[0.75rem]';
        if (isNextMesGroup && !isPrevMesGroup)
          return 'rounded-t-[1.5rem] rounded-br-[1.5rem] rounded-bl-[0.75rem]';
        if (!isNextMesGroup && isPrevMesGroup)
          return 'rounded-b-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[0.75rem]';
        if (!isNextMesGroup && !isPrevMesGroup) return 'rounded-[1.5rem] my-1';
      }
    };

    const receivedMessage = (content: string) => {
      return <>
        <div className='flex gap-3'>
          <Image
            width={500}
            height={500}
            src={getImageURL(message.sender.user_image, 'avatar_mini')!}
            alt=''
            className='w-9 h-9 rounded-full shadow'
          />
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

    const receivedMedia = (content: string[]) => {
      return <>

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

    if (message.type === 'text') {
      if (isAdmin) {
        return <>
          {isMoreThan10Min && time(message.createdAt)}
          {receivedMessage(message.content)}
        </>
      } else {
        return <>
          {isMoreThan10Min && time(message.createdAt)}
          {sentMessage(message.content)}
        </>
      }
    } else if (message.type === 'image') {
      if (isAdmin) {
        return <>
          {isMoreThan10Min && time(message.createdAt)}
          {receivedMedia(message.images!)}
        </>
      } else {
        return <>
          {isMoreThan10Min && time(message.createdAt)}
          {sentMedia(message.images!)}
        </>
      }
    }
  })

export default MessageBox;  