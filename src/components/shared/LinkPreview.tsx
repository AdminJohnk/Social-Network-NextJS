'use client';

import { useLinkPreview } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import Image from 'next/image';

export interface ILinkPreviewProps {
  url: string;
}

export default function LinkPreview({ url }: ILinkPreviewProps) {
  const { linkPreview: link } = useLinkPreview(url);

  return (
    <div>
      {link && (
        <Link href={url} target='_blank' className='text-text-2'>
          <div className='contentLink flex mt-5 px-3 py-3 cursor-pointer bg-foreground-2'>
            <div className='left w-4/5 p-2'>
              <div className='mb-2 font-semibold text-text-1'>
                {link.title?.length > 100
                  ? link.title.slice(0, 100) + '...'
                  : link.title}
              </div>
              <>
                {link.description?.length > 100
                  ? link.description.slice(0, 100) + '...'
                  : link.description}
              </>
            </div>
            <Image
              src={getImageURL(link.image) || '/images/no-image.png'}
              alt='pic link'
              className='w-1/5 rounded-md'
              width={1000}
              height={1000}
              priority
            />
          </div>
        </Link>
      )}
    </div>
  );
}
