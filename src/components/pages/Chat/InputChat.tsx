import { useCallback, useEffect, useRef, useState } from 'react';
import {
  IoAddCircleOutline,
  IoDocumentText,
  IoHappyOutline,
  IoHeart,
  IoImages,
  IoSendOutline
} from 'react-icons/io5';
import { FaGift } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useLocale, useTranslations } from 'next-intl';
import { useThemeMode } from 'flowbite-react';
import Picker from '@emoji-mart/react';
import { debounce } from 'lodash';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';
import { FileWithPath, useDropzone } from 'react-dropzone';

import { useSocketStore } from '@/store/socket';
import { imageService } from '@/services/ImageService';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSendMessage } from '@/hooks/mutation';
import { cn } from '@/lib/utils';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import Textarea from '@/components/ui/textarea';
import { IEmoji, IMessage, IUserInfo } from '@/types';
import { showErrorToast } from '@/components/ui/toast';

export interface IInputChatProps {
  conversationID: string | undefined;
  members: IUserInfo[];
}

export default function InputChat({ conversationID, members }: IInputChatProps) {
  const t = useTranslations();
  const locale = useLocale();
  const { mode } = useThemeMode();

  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateSendMessage } = useSendMessage();
  const [id, setId] = useState(uuidv4().replace(/-/g, ''));

  const { chatSocket } = useSocketStore();

  const [messageContent, setMessage] = useState('');
  const [cursor, setCursor] = useState(0);

  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles) {
        setFiles([...files, ...Array.from(acceptedFiles)]);
        UIkit.drop('#message__wrap_show').hide(false);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: onDrop,
    onDropRejected: (files) => {
      files.forEach((file) => {
        showErrorToast(`${t('Cannot upload')} ${file.file.name}`);
      });
    },
    accept: {
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/jpeg': ['.jpeg', '.jpg']
    },
    maxSize: 1024 * 1024 * 10,
    multiple: true,
    onError: (error) => {
      showErrorToast(error.message);
    }
  });

  const handleSubmit = async (content: string) => {
    if (!conversationID) return;
    if (!content && !files.length) return;
    content = content.replace(/\n$/, '');

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
        seen: [],
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
        seen: [],
        createdAt: new Date()
      };
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message: newMessage });
    }
  };

  const handleLike = () => {
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
      seen: [],
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
    if (textareaRef.current) textareaRef.current.classList.add('custom-scrollbar-fg');
  }, [textareaRef.current]);

  return (
    <div className='absolute bottom-0 w-full'>
      <div className='relative -top-20 left-0 z-30'>
        {files.length > 0 && (
          <div className='custom-scrollbar-fg absolute z-10 flex h-20 w-[99.4%] gap-5 overflow-auto bg-gradient-to-t from-white from-30% via-white via-30% px-4 pt-2 dark:from-slate-900 dark:via-slate-900'>
            {files.map((file, index) => {
              return (
                <div className='relative select-none' key={index}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt='Preview' // preview image
                    className='max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] rounded-sm object-cover'
                    width={500}
                    height={500}
                  />
                  <FaXmark
                    className='absolute -right-1 -top-1 block h-4 w-4 cursor-pointer rounded-full bg-slate-600 text-red-500'
                    onClick={() => {
                      setFiles(files.filter((_, i) => i !== index));
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className='flex items-end gap-2 overflow-hidden bg-background-1 p-2 md:gap-4 md:p-3'>
        <div id='message__wrap' className='-mt-1.5 mb-1 flex h-full items-center gap-2 dark:text-white'>
          <button type='button' className='shrink-0'>
            <IoAddCircleOutline className='flex text-3xl' />
          </button>
          <div
            id='message__wrap_show'
            className='dropbar h-60 bg-gradient-to-t from-white from-30% via-white via-30% pt-36 dark:from-slate-900 dark:via-slate-900'
            data-uk-drop='stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200'>
            <div
              className='flex justify-center gap-5 p-3 sm:w-full'
              data-uk-scrollspy='target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true'>
              <button
                {...getRootProps()}
                type='button'
                className='relative shrink-0 rounded-full border border-green-100 bg-green-50 p-2.5 text-green-600 shadow-sm duration-100 hover:scale-[1.15] dark:border-0 dark:bg-dark-1'>
                <input {...getInputProps()} className='cursor-pointer' />
                <IoImages className='flex text-3xl' />
              </button>
              <button
                type='button'
                className='shrink-0 rounded-full border border-pink-100 bg-pink-50 p-2.5 text-pink-600 shadow-sm duration-100 hover:scale-[1.15] dark:border-0 dark:bg-dark-1'>
                <IoDocumentText className='flex text-3xl' />
              </button>
              <button
                type='button'
                className='shrink-0 rounded-full border border-orange-100 bg-orange-50 p-2.5 text-orange-600 shadow-sm duration-100 hover:scale-[1.15] dark:border-0 dark:bg-dark-1'>
                <FaGift className='flex text-3xl' />
              </button>
            </div>
          </div>

          <button type='button' className='shrink-0'>
            <IoHappyOutline className='flex text-3xl' />
          </button>
          <div
            className='dropbar p-2'
            data-uk-drop='stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 '>
            <div className='w-fit rounded-xl border border-border-1 bg-foreground-1 pr-0 shadow-lg'>
              <Picker
                data={async () => {
                  const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                  return await response.json();
                }}
                i18n={async () => {
                  const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/${locale}.json`
                  );

                  return await response.json();
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
          ref={textareaRef}
          maxRows={5}
          className='w-full resize-none rounded-full !bg-foreground-1 p-2 px-4'
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
            e.preventDefault();
            e.stopPropagation();
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSubmit(messageContent);
              return;
            }
            // get cursor position
            const cursorPosition = e.currentTarget.selectionStart;
            setCursor(cursorPosition || 0);
          }}
        />
        {messageContent ? (
          <button
            type='button'
            className={cn(
              'shrink-0 px-1 py-2 text-white',
              checkEmpty
                ? 'cursor-not-allowed text-gray-400'
                : 'cursor-pointer text-blue-500 hover:scale-110 hover:text-blue-700'
            )}
            onClick={() => handleSubmit(messageContent)}>
            <IoSendOutline className='flex text-xl' />
          </button>
        ) : (
          <button type='button' className='mb-1 cursor-pointer text-text-1' onClick={handleLike}>
            <IoHeart className='text-3xl !text-red-600' />
          </button>
        )}
      </div>
    </div>
  );
}
