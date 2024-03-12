import * as React from 'react';
import { FaTools } from 'react-icons/fa';
import { TbBrandOpenai } from 'react-icons/tb';
import { IoDocumentText, IoChatbubbleEllipses } from 'react-icons/io5';
import { AiFillQuestionCircle } from 'react-icons/ai';

export interface IFloatToolProps {}

export default function FloatTool(props: IFloatToolProps) {
  return (
    <div className='fixed bottom-20 right-4 group/list-tool bg-transparent z-[1000]'>
      <div className='p-3 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full shadow-xl'>
        <FaTools className='size-6 text-purple-1' />
      </div>
      <div className='group-hover/list-tool:animate-fade-up group-hover/list-tool:visible invisible absolute -top-[255px] *:mt-3 pb-4 bg-transparent'>
        <div className='p-3 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full cursor-pointer shadow-xl'>
          <AiFillQuestionCircle className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full cursor-pointer shadow-xl'>
          <IoDocumentText className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full cursor-pointer shadow-xl'>
          <IoChatbubbleEllipses className='size-6 text-text-2' />
        </div>
        <div className='p-3 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full cursor-pointer shadow-xl'>
          <TbBrandOpenai className='size-6 text-text-2' />
        </div>
      </div>
    </div>
  );
}
