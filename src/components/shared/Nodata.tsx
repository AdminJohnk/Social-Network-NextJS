import Image from 'next/image';
import * as React from 'react';

export interface INodataProps {
  width: number;
  height: number;
  title?: string;
}

export default function Nodata({ width, height, title }: INodataProps) {
  return (
    <div className='flex-col flex-center'>
      <Image
        className='dark:opacity-60'
        src='/images/no-data.svg'
        alt='No data'
        width={width}
        height={height}
      />
      <div className='mt-5 h5-bold'>{title}</div>
    </div>
  );
}
