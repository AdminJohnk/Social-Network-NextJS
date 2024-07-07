'use client';

import { cn } from '@/lib/utils';
import { useAIChatStore } from '@/store/aichat';
import { useTranslations } from 'next-intl';
import Draggable from 'react-draggable';
import { IoMdClose } from 'react-icons/io';
import { IoMdInformationCircle } from 'react-icons/io';
import { IoMdSend } from 'react-icons/io';
import { useState } from 'react';
import ShowContent from './ShowContent/ShowContent';
import { useChatAI } from '@/hooks/mutation';
import { CircularProgress } from '@mui/material';

function escapeHTML(text: string) {
  return text.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
}

function textToHTML(text: string) {
  const paragraphs = text.split(/\n\n/g);
  const htmlParagraphs = paragraphs.map((paragraph: string) => {
    const html = paragraph.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    return `<p>${escapeHTML(html)}</p>`;
  });
  return htmlParagraphs.join('');
}

export interface IAIChatProps {}

export default function AIChat(props: IAIChatProps) {
  const t = useTranslations();

  const { aiChatStatus, setAIChatStatus } = useAIChatStore();
  const [question, setQuestion] = useState<string>('');
  const [aiResponse, setAIResponse] = useState<string>('');

  const { mutateChatAI, isLoadingChatAI } = useChatAI();

  const handleQuestion = async () => {
    if (!question) return;

    const questionSub = question;
    setQuestion('');

    setAIResponse(aiResponse + '\n\n' + questionSub);
    const newResponse = aiResponse + '\n\n' + questionSub;

    const result = await mutateChatAI(questionSub);
    const htmlResponse = textToHTML(result);

    setAIResponse(newResponse + '\n' + htmlResponse);
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
        <div className='custom-scrollbar-fg h-[75%] overflow-y-scroll py-3'>
          <ShowContent content={aiResponse} />
        </div>
        {/* input chat */}
        <div className='flex-between mb-2 h-[15%]'>
          <textarea
            className='custom-scrollbar-bg w-full resize-none rounded-lg border border-border-1 bg-transparent p-2 text-[0.9rem]'
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
          <button className='ms-2 w-[5%] bg-transparent' onClick={() => handleQuestion()}>
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
