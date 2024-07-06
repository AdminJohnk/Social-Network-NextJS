'use client';

import { useRef } from 'react';
import { FaTools } from 'react-icons/fa';
import { TbBrandOpenai } from 'react-icons/tb';
import { IoDocumentText, IoChatbubbleEllipses } from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Draggable from 'react-draggable';
import { useTranslations } from 'next-intl';
import { useAIChatStore } from '@/store/aichat';

export default function FloatTool() {
  const t = useTranslations();

  const ListToolRef = useRef<HTMLDivElement>(null);
  const { setAIChatStatus } = useAIChatStore();
  return (
    <Draggable axis='y'>
      <div
        className='group/list-tool fixed bottom-20 right-4 z-[9] bg-transparent'
        onMouseEnter={() => {
          ListToolRef.current!.classList.add('animate-fade-up-in');
          ListToolRef.current!.classList.remove(...['animate-fade-up-out', 'hidden']);
        }}
        onMouseLeave={() => {
          ListToolRef.current!.classList.add(...['animate-fade-up-out', 'hidden']);
          ListToolRef.current!.classList.remove('animate-fade-up-in');
        }}>
        <div className='bg-2 rounded-full p-3 shadow-xl duration-300 cursor-pointer'>
          <FaTools className='size-6 text-purple-1' />
        </div>
        <div
          ref={ListToolRef}
          className='absolute -top-[255px] hidden bg-transparent pb-4 opacity-0 duration-300 *:mt-3'>
          <div className='bg-2 cursor-pointer rounded-full p-3 shadow-xl duration-300'>
            <AiFillQuestionCircle className='size-6 text-text-2' />
          </div>
          <div className='bg-2 cursor-pointer rounded-full p-3 shadow-xl duration-300'>
            <IoDocumentText className='size-6 text-text-2' />
          </div>
          <div className='bg-2 cursor-pointer rounded-full p-3 shadow-xl duration-300'>
            <IoChatbubbleEllipses className='size-6 text-text-2' />
          </div>
          <div className='bg-2 cursor-pointer rounded-full p-3 shadow-xl duration-300'
          onClick={() => setAIChatStatus(true)}
          >
            <TbBrandOpenai className='size-6 text-text-2' />
          </div>
        </div>
      </div>
    </Draggable>
  );
}
