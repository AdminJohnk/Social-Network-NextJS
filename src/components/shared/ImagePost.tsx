import Image from 'next/image';
import { cn, getImageURL } from '@/lib/utils';
import ImageGallery from './ImageGallery';
import { Link } from '@/navigation';

export interface IImagePostProps {
  images: string[];
}

export default function ImagePost({ images }: IImagePostProps) {
  return (
    <div className='mb-5 w-full'>
      <ImageGallery
        elementClassNames={`image-post-${Math.min(images.length, 5)}`}
      >
        {images.map((image, index) => (
          <Link
            key={index}
            href={getImageURL(image)}
            className={cn(
              'group relative rounded-lg overflow-hidden bg-background-1',
              index > 3 && 'hidden'
            )}
          >
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
          </Link>
        ))}
      </ImageGallery>
    </div>
  );
}
