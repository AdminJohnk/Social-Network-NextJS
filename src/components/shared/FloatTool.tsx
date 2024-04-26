'use client';

import { useRef } from 'react';
import { FaTools } from 'react-icons/fa';
import { TbBrandOpenai } from 'react-icons/tb';
import { IoDocumentText, IoChatbubbleEllipses } from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';

export interface IFloatToolProps {}

export default function FloatTool(props: IFloatToolProps) {
  const ListToolRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className='fixed bottom-20 right-4 group/list-tool bg-transparent z-[1000]'
      onMouseEnter={() => {
        ListToolRef.current!.classList.add('animate-fade-up-in');
        ListToolRef.current!.classList.remove('animate-fade-up-out');
      }}
      onMouseLeave={() => {
        ListToolRef.current!.classList.add('animate-fade-up-out');
        ListToolRef.current!.classList.remove('animate-fade-up-in');
      }}
    >
      <div className='p-3 bg-2 duration-300 rounded-full shadow-xl'>
        <FaTools className='size-6 text-purple-1' />
      </div>
      <div
        ref={ListToolRef}
        className='absolute opacity-0 -top-[255px] *:mt-3 pb-4 bg-transparent duration-300'
      >
        <div className='p-3 bg-2 duration-300 rounded-full cursor-pointer shadow-xl'>
          <AiFillQuestionCircle className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-2 duration-300 rounded-full cursor-pointer shadow-xl'>
          <IoDocumentText className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-2 duration-300 rounded-full cursor-pointer shadow-xl'>
          <IoChatbubbleEllipses className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-2 duration-300 rounded-full cursor-pointer shadow-xl'>
          <TbBrandOpenai className='size-6 text-text-2' />
        </div>
      </div>
    </div>
  );
}
