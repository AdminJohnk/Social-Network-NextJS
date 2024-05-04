'use client';

import { useState } from 'react';
import Image from 'next/image';

import PhotoProvider from '@/components/shared/PhotoProvider';
import { cn, getImageURL } from '@/lib/utils';

export interface IImageMessageProps {
  images: string[];
}

export default function ImageMessage({ images }: IImageMessageProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`mb-5 w-full image-message-${Math.min(images.length, 10)}`}>
      <PhotoProvider images={images || []} visible={visible} onClose={() => setVisible(false)} />

      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            'group relative rounded-lg overflow-hidden bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow hover:cursor-pointer',
            index > 8 && 'hidden'
          )}
          onClick={() => setVisible(true)}>
          <Image
            src={getImageURL(image)}
            className='max-h-52 max-w-64 max-w- w-full h-full object-cover img-responsive'
            width={1500}
            height={1500}
            alt={image}
            priority
          />
          {images.length > 9 && index === 8 && (
            <div className='absolute top-0 left-0 w-full h-full bg-slate-900/1 bg-[#1e293bb5] flex-center'>
              <span className='h1-semibold'>+{images.length - 9}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
