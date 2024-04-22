import { useCallback, useEffect, useRef, useState } from 'react';
import {
  IoAddCircleOutline,
  IoDocumentText,
  IoHappyOutline,
  IoHeartOutline,
  IoImage,
  IoImages,
  IoSendOutline
} from 'react-icons/io5';
import { FaGift } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { useThemeMode } from 'flowbite-react';
import Picker from '@emoji-mart/react';
import { useSocketStore } from '@/store/socket';
import { debounce } from 'lodash';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';

import { imageService } from '@/services/ImageService';
import { useSendMessage } from '@/hooks/mutation';
import { IEmoji, IMessage, IUserInfo } from '@/types';
import { cn } from '@/lib/utils';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import Textarea from '@/components/ui/textarea';

export interface IInputChatProps {
  conversationID: string | undefined;
  members: IUserInfo[];
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

export default function InputChat({ conversationID, members }: IInputChatProps) {
  const t = useTranslations();
  const { mode } = useThemeMode();
  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);
  const { mutateSendMessage } = useSendMessage();
  const [id, setId] = useState(uuidv4().replace(/-/g, ''));

  const { chatSocket } = useSocketStore();

  const [messageContent, setMessage] = useState('');
  const [cursor, setCursor] = useState(0);

  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (content: string) => {
    if (!conversationID) return;
    if (!content && !files.length) return;
    content = content.replace(/\n$/, "");

    setMessage('');

    if (content.trim() !== '' || content.trim().length !== 0) {
      const message = {
        _id: id,
        conversation_id: conversationID,
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
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
      chatSocket.emit(Socket.STOP_TYPING, { conversationID, userID: currentUserInfo._id, members });
    }

    if (files.length > 0) {
      const newFiles = [...files];
      setFiles([]);
      const result = await handleUploadImage(newFiles);
      const newMessage = {
        _id: id + 'image',
        conversation_id: conversationID,
        images: result,
        sender: {
          _id: currentUserInfo._id,
          user_image: currentUserInfo.user_image,
          name: currentUserInfo.name
        },
        type: 'image',
        createdAt: new Date()
      };
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message: newMessage });
    }
  };

  const handleLike = async () => {
    if (!conversationID) return;

    const message = {
      _id: id,
      conversation_id: conversationID,
      sender: {
        _id: currentUserInfo._id,
        user_image: currentUserInfo.user_image,
        name: currentUserInfo.name
      },
      type: 'text',
      // type: 'icon',
      isSending: true,
      content: '❤️',
      createdAt: new Date()
    };

    setId(uuidv4().replace(/-/g, ''));
    mutateSendMessage(message as unknown as IMessage);
    chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
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
      () => chatSocket.emit(Socket.STOP_TYPING, { conversationID, userID: currentUserInfo._id, members }),
      1000
    ),
    []
  );

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.classList.add('custom-scrollbar-fg');
  }, []);

  return (
    <div className='absolute w-full bottom-3'>
      <div className='relative -top-20 left-0 z-30'>
        {files.length > 0 && (
          <div className='absolute overflow-auto w-[99.4%] h-20 flex px-4 pt-2 gap-5 z-10 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-slate-900 custom-scrollbar-fg'>
            {files.map((file, index) => {
              return (
                <div className='relative select-none' key={index}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt='Preview' // preview image
                    className='rounded-sm min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] object-cover'
                    width={500}
                    height={500}
                  />
                  <FaXmark
                    className='absolute block rounded-full -top-1 -right-1 w-4 h-4 cursor-pointer text-red-500 bg-slate-600'
                    onClick={() => {
                      setFiles(files.filter((_, i) => i !== index));
                      // setFilesUpload(filesUpload.filter((_, i) => i !== index));
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className='flex items-end md:gap-4 gap-2 md:p-3 p-2 overflow-hidden bg-background-1'>
        <div id='message__wrap' className='flex items-center gap-2 h-full dark:text-white -mt-1.5 mb-1'>
          <button type='button' className='shrink-0'>
            <IoAddCircleOutline className='text-3xl flex' />
          </button>
          <div
            className='dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-slate-900'
            data-uk-drop='stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200'>
            <div
              className='sm:w-full p-3 flex justify-center gap-5'
              data-uk-scrollspy='target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true'>
              <Button
                component='label'
                role={undefined}
                variant='contained'
                tabIndex={-1}
                className='bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
                <IoImages className='text-3xl flex' />
                <VisuallyHiddenInput
                  type='file'
                  multiple
                  onChange={(info) => {
                    const image = info.target.files;
                    if (image) {
                      setFiles([...files, ...Array.from(image)]);
                    }
                  }}
                />
              </Button>
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
        <Textarea
          slotProps={{ textarea: { ref: textareaRef } }}
          maxRows={5}
          className='w-full resize-none !bg-foreground-1 rounded-full px-4 p-2'
          placeholder={t('Write your message')}
          value={messageContent}
          onChange={(e) => {
            chatSocket.emit(Socket.IS_TYPING, {
              conversationID: conversationID,
              userID: currentUserInfo._id,
              members
            });
            setMessage(e.currentTarget.value);
            handleStopTyping();
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition || 0);
          }}
          onClick={(e) => {
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition || 0);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSubmit(messageContent);
              return;
            }
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition || 0);

          }}
        />
        {/* <input
            placeholder={t('Write your message')}
            className='w-full resize-none bg-foreground-1 rounded-full px-4 p-2'
            value={messageContent}
            onKeyUp={(e) => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursor(cursorPosition || 0);

              if (e.key === 'Enter') {
                handleSubmit(messageContent);
              }
            }}
            onClick={(e) => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursor(cursorPosition || 0);
            }}
            onChange={(e) => {
              chatSocket.emit(Socket.IS_TYPING, {
                conversationID: conversationID,
                userID: currentUserInfo._id,
                members
              });
              setMessage(e.currentTarget.value);
              handleStopTyping();
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursor(cursorPosition || 0);
            }}></input> */}
        {messageContent ? (
          <button
            type='button'
            className={cn(
              'text-white shrink-0 p-2',
              checkEmpty
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-500 hover:text-blue-700 hover:scale-110 cursor-pointer'
            )}
            onClick={() => handleSubmit(messageContent)}>
            <IoSendOutline className='text-xl flex' />
          </button>
        ) : (
          <button
            type='button'
            className='text-text-1 cursor-pointer mb-1'
            onClick={() => {
              handleLike();
            }}>
            <IoHeartOutline className='text-3xl' />
          </button>
        )}
      </div>
    </div>
  );
}
