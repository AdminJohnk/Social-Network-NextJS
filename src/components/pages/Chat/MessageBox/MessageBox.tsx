import { forwardRef } from 'react';
import { getDateTime } from '@/lib/descriptions/formatDateTime';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { IMessage, IUserInfo, TypeofConversation } from '@/types';
import Image from 'next/image';

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

export const MessageBox = forwardRef<HTMLDivElement, IMessageBoxProps>(
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

    console.log('message', message)
    console.log('seen', seen)
    console.log('isLastMes', isLastMes)
    console.log('isNextMesGroup', isNextMesGroup)
    console.log('isPrevMesGroup', isPrevMesGroup)
    console.log('isMoreThan10Min', isMoreThan10Min)
    console.log('isAdmin', isAdmin)
    console.log('type', type)
    console.log('isCreator', isCreator)

    const receivedMessage = (content: string) => {
      return <>
        <div className='flex gap-3'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-2.jpg'
            alt=''
            className='w-9 h-9 rounded-full shadow'
          />
          <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>{content}</div>
        </div>
      </>
    }

    const sentMessage = (content: string) => {
      return <>
        <div className='flex gap-2 flex-row-reverse items-end'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-3.jpg'
            alt=''
            className='w-4 h-4 rounded-full shadow'
          />
          <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
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
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-3.jpg'
            alt=''
            className='w-4 h-4 rounded-full shadow'
          />

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
        <div className='flex justify-center '>
          <div className='font-medium text-gray-500 text-sm dark:text-white/70'>
            {getDateTime(time)}
          </div>
        </div>
      </>
    }

    return (
      <div>

      </div>
    );
  })
