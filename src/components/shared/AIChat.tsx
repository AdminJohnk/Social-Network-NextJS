'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { IoMdClose, IoMdInformationCircle, IoMdSend } from 'react-icons/io';

import { useChatAI } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { useAIChatStore } from '@/store/aichat';
import { CircularProgress } from '@mui/material';

import Markdown from './Markdown';
import { Button } from '../ui/button';
import { PiPlus } from 'react-icons/pi';

type AiResponse = {
  question: boolean;
  content: string;
};

export default function AIChat() {
  const t = useTranslations();
  const { aiChatStatus, setAIChatStatus } = useAIChatStore();
  const [question, setQuestion] = useState<string>('');
  const [aiResponses, setAIResponses] = useState<AiResponse[]>([]);

  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateChatAI, isLoadingChatAI } = useChatAI();

  const handleQuestion = async () => {
    if (!question) return;

    const questionSub = question;
    setQuestion('');

    setAIResponses((prev) => [
      ...prev,
      {
        question: true,
        content: questionSub
      }
    ]);
    // const newResponse = aiResponses+ '\n\n' + questionSub;

    const result = await mutateChatAI(questionSub);
    // const htmlResponse = textToHTML(result);

    // setAIResponse(newResponse + '\n' + result);
    setAIResponses((prev) => [
      ...prev,
      {
        question: false,
        content: result
      }
    ]);
  };

  const createNew = () => {
    setAIResponses([]);
    setQuestion('');
  };

  return (
    <Draggable handle='strong'>
      <div
        className={cn(
          'fixed bottom-0 right-0 z-[10] h-[calc(100%-64px)] w-[31%] bg-background-2 px-3 py-2 shadow',
          !aiChatStatus && 'hidden'
        )}>
        <strong>
          <div className='mb-0 flex h-[10%] w-[100%] border-b border-border-1 py-4'>
            <IoMdInformationCircle
              className='text-1 size-6 w-[5%]'
              data-uk-tooltip={`title: ${t('Hold the chat board and move')}; pos: bottom; offset:6; delay: 300`}
            />
            <h2 className='h4-semibold w-[90%] text-center text-text-1'>{t('Ask AI')}</h2>
            <IoMdClose className='text-1 size-6 w-[5%]' onClick={() => setAIChatStatus(false)} />
          </div>
        </strong>
        {/* content chat */}
        <div className='custom-scrollbar-fg h-[75%] space-y-3 overflow-y-scroll py-3'>
          {aiResponses.map((response, index) => {
            const isMe = response.question;
            return (
              <div key={index} className='mb-2 flex flex-col items-start gap-1'>
                <div className='flex-start'>
                  {isMe ? (
                    <Image
                      src={getImageURL(currentUserInfo?.user_image)}
                      alt='avatar'
                      className='h-8 w-8 rounded-full object-cover'
                      width={400}
                      height={400}
                    />
                  ) : (
                    <Image
                      src='/images/avatars/avatar-1.jpg'
                      alt='avatar'
                      className='h-8 w-8 rounded-full'
                      width={400}
                      height={400}
                    />
                  )}
                  {isMe ? (
                    <div className='ms-3 flex flex-col'>
                      <span className='base-bold'>{currentUserInfo?.name}</span>
                    </div>
                  ) : (
                    <div className='ms-3 flex flex-col'>
                      <span className='base-bold'>AI</span>
                    </div>
                  )}
                </div>
                <div className='flex-start ms-3'>
                  <div className='invisible size-8' />
                  <div
                    className={cn(
                      'rounded-lg p-2',
                      isMe ? 'bg-foreground-2 text-text-2' : 'bg-background-1 text-text-1'
                    )}>
                    <Markdown key={index}>{response.content}</Markdown>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <ShowContent content={aiResponse} /> */}
        </div>
        {/* input chat */}
        <div className='flex-center mb-2 h-[15%] w-full'>
          <Button
            variant='main'
            className='me-2 rounded-full border border-border-1 bg-transparent text-text-1'
            size='icon'
            onClick={() => createNew()}
            disabled={isLoadingChatAI || aiResponses.length === 0}
            data-uk-tooltip={`title: ${t('New conversation')}; pos: bottom; offset:6; delay: 300`}>
            <PiPlus className='size-6 cursor-pointer text-blue-500 duration-300 hover:text-blue-600' />
          </Button>
          <textarea
            className='custom-scrollbar-bg w-[90%] resize-none rounded-lg border border-border-1 bg-transparent p-2 text-[0.9rem]'
            rows={3}
            value={question}
            placeholder='Type your question...'
            onChange={(e) => setQuestion(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleQuestion();
              }
            }}
          />
          <button className='ms-2 bg-transparent' onClick={() => handleQuestion()}>
            {isLoadingChatAI ? (
              <CircularProgress size={20} className='mr-2 !text-text-1' />
            ) : (
              <IoMdSend className='size-6 cursor-pointer text-blue-500 duration-300 hover:text-blue-600' />
            )}
          </button>
        </div>
      </div>
    </Draggable>
  );
}
