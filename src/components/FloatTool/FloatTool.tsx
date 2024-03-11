import * as React from 'react';
import { FaTools } from 'react-icons/fa';

export interface IFloatToolProps {}

export default function FloatTool(props: IFloatToolProps) {
  return (
    <div className='fixed bottom-20 right-6'>
      <div>
        <div className='bg-blue-1 p-3 rounded-full cursor-pointer'>
          <FaTools className='size-6 text-light-1' />
        </div>
      </div>
    </div>
  );
}
