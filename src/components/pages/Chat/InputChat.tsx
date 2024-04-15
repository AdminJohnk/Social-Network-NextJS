import { useCallback, useState } from 'react';
import {
  IoAddCircleOutline,
  IoDocumentText,
  IoHappyOutline,
  IoHeartOutline,
  IoImage,
  IoImages,
  IoSendOutline
} from 'react-icons/io5';
import { FaGift, FaPaperPlane } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { useThemeMode } from 'flowbite-react';
import Picker from '@emoji-mart/react';
import { useSocketStore } from '@/store/socket';
import { debounce } from 'lodash';

import { useSendMessage } from '@/hooks/mutation';
import { IEmoji, IMessage, IUserInfo } from '@/types';
import { cn } from '@/lib/utils';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { imageService } from '@/services/ImageService';

export interface IInputChatProps {
  conversationID: string[] | undefined;
  members: IUserInfo[];
}

export default function InputChat({ conversationID, members }: IInputChatProps) {
  const t = useTranslations();
  const { mode } = useThemeMode();
  const { data: session } = useSession();
  const ID = conversationID ? conversationID[0] : '';


  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);
  const { mutateSendMessage } = useSendMessage();
  const [id, setId] = useState(uuidv4().replace(/-/g, ''));

  const { chatSocket } = useSocketStore()


  const [messageContent, setMessage] = useState('');
  const [cursor, setCursor] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (content: string) => {
    if (!conversationID) return;
    if (!content && !files.length) return;

    setMessage('');

    if (content.trim() !== '' || content.trim().length !== 0) {
      const message = {
        _id: id,
        conversation_id: ID,
        sender: {
          _id: currentUserInfo._id,
          user_image: currentUserInfo.user_image,
          name: currentUserInfo.name
        },
        type: 'text',
        isSending: true,
        content: content,
        createdAt: new Date()
      };

      setId(uuidv4().replace(/-/g, ''));
      mutateSendMessage(message as unknown as IMessage);
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: ID, message });
      chatSocket.emit(Socket.STOP_TYPING, { conversationID: ID, userID: currentUserInfo._id, members });
    }

    if (files.length > 0) {
      const newFiles = [...files];
      setFiles([]);
      const result = await handleUploadImage(newFiles);
      const newMessage = {
        _id: id + 'image',
        conversation_id: ID,
        images: result,
        sender: {
          _id: currentUserInfo._id,
          user_image: currentUserInfo.user_image,
          name: currentUserInfo.name
        },
        type: 'image',
        createdAt: new Date()
      };
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: ID, message: newMessage });
    }
  };

  const handleUploadImage = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });
    const { data } = await imageService.uploadImages(formData);
    return data.metadata;
  };

  const checkEmpty =
    (messageContent.trim() === '' || messageContent.trim().length === 0) && files.length === 0;

  const handleStopTyping = useCallback(
    debounce(
      () => {
        console.log('stop typing');
        chatSocket.emit(Socket.STOP_TYPING, { conversationID: ID, userID: currentUserInfo?._id, members });
      },
      1000
    ),
    []
  );

  return (
    <div className='flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden'>
      <div id='message__wrap' className='flex items-center gap-2 h-full dark:text-white -mt-1.5'>
        <button type='button' className='shrink-0'>
          <IoAddCircleOutline className='text-3xl flex' />
        </button>
        <div
          className='dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-slate-900'
          data-uk-drop='stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200'>
          <div
            className='sm:w-full p-3 flex justify-center gap-5'
            data-uk-scrollspy='target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true'>
            <button
              type='button'
              className='bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoImage className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoImages className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoDocumentText className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <FaGift className='text-3xl flex' />
            </button>
          </div>
        </div>

        <button type='button' className='shrink-0'>
          <IoHappyOutline className='text-3xl flex' />
        </button>
        <div
          className='dropbar p-2'
          data-uk-drop='stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 '>
          <div className='w-fit bg-foreground-1 shadow-lg border rounded-xl pr-0 border-border-1'>
            <Picker
              data={async () => {
                const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                return response.json();
              }}
              onEmojiSelect={(emoji: IEmoji) => {
                setCursor(cursor + emoji.native.length);
                setMessage(messageContent.slice(0, cursor) + emoji.native + messageContent.slice(cursor));
              }}
              theme={mode}
            />
          </div>
        </div>
      </div>

      <div className='relative flex-1'>
        <textarea
          placeholder={t('Write your message')}
          rows={1}
          className='w-full resize-none bg-foreground-1 rounded-full px-4 p-2'
          value={messageContent}
          onKeyUp={(e) => {
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition ?? 0);

            if (e.key === 'Enter') {
              handleSubmit(messageContent);
            }
          }}
          onClick={(e) => {
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition ?? 0);
          }}
          onChange={(e) => {
            chatSocket.emit(Socket.IS_TYPING, {
              conversationID: ID,
              userID: currentUserInfo?._id,
              members
            });
            setMessage(e.currentTarget.value);
            handleStopTyping();
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition ?? 0);
          }}>
        </textarea>

        <button type='button' className={cn('text-white shrink-0 p-2 absolute right-0.5 top-0',
          checkEmpty
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-500 hover:text-blue-700 hover:scale-110 cursor-pointer')} onClick={() => handleSubmit(messageContent)}>
          <IoSendOutline className='text-xl flex' />
        </button>
      </div>

      <button type='button' className='flex h-full dark:text-white'>
        <IoHeartOutline className='text-3xl flex -mt-3' />
      </button>
    </div>
  );
}
