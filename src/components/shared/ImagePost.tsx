import { useState } from 'react';
import Image from 'next/image';
import PhotoProvider from './PhotoProvider';
import { cn, getImageURL } from '@/lib/utils';

export interface IImagePostProps {
  images: string[];
}

export default function ImagePost({ images }: IImagePostProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`mb-5 w-full image-post-${Math.min(images.length, 5)}`}>
      <PhotoProvider images={images || []} visible={visible} onClose={() => setVisible(false)} />

      {images.toReversed().map((image, index) => (
        <div
          key={image}
          className={cn(
            'group relative rounded-lg overflow-hidden bg-background-1 hover:cursor-pointer',
            index > 3 && 'hidden'
          )}
          onClick={() => setVisible(true)}>
          <Image
            src={getImageURL(image)}
            className='w-full h-full object-cover img-responsive'
            width={1500}
            height={1500}
            alt=''
            priority
          />
          {images.length > 4 && index === 3 && (
            <div className='absolute top-0 left-0 w-full h-full bg-slate-900/1 bg-[#1e293bb5] flex-center'>
              <span className='h1-semibold'>+{images.length - 4}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
