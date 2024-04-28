'use client';

import Nodata from '@/components/shared/Nodata';
import { useGetAllImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '@/components/shared/ImageGallery';

export interface IPhotoTabProps {
  profileID: string;
}

export default function PhotoTab({ profileID }: IPhotoTabProps) {
  const { allImages, isLoadingAllImages } = useGetAllImages(profileID);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {allImages?.length <= 0 ? (
        <div className='w-full px-10 py-8 flex-center'>
          <Nodata
            width={150}
            height={150}
            title={'No repository found'}
          ></Nodata>
        </div>
      ) : (
        <div className='w-full py-6 px-5'>
          <ImageGallery elementClassNames='all-image-post'>
            {allImages?.map((image, index) => (
              <Link
                key={index}
                href={getImageURL(image)}
                className='group relative h-40 w-full rounded-lg overflow-hidden bg-background-1'
              >
                <Image
                  src={getImageURL(image)}
                  className='w-full h-full object-cover img-responsive'
                  width={1500}
                  height={1500}
                  alt=''
                  priority
                />
              </Link>
            ))}
          </ImageGallery>
        </div>
      )}
    </div>
  );
}
