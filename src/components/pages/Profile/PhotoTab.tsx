'use client';

import Nodata from '@/components/shared/Nodata';
import { useGetAllPostImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import PhotoProvider from '@/components/shared/PhotoProvider';
import { IoIosMore } from 'react-icons/io';
import { Link } from '@/navigation';
import { Skeleton } from '@mui/material';

export interface IPhotoTabProps {
  profileID: string;
}

export default function PhotoTab({ profileID }: IPhotoTabProps) {
  const { allPostImages: allImages, isLoadingAllPostImages: isLoadingAllImages } =
    useGetAllPostImages(profileID);
  const [visible, setVisible] = useState(false);

  const images = useMemo(() => {
    if (allImages) {
      return {
        images: allImages.map((item) => item.image),
        post_ids: allImages.map((item) => item.post_id)
      };
    }
  }, [allImages]);

  return (
    <div className='my-8 w-full rounded-md bg-foreground-1'>
      {isLoadingAllImages ? (
        <div className='flex-center w-full flex-wrap gap-10 px-10 py-8'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className='relative w-[calc(25%-2.5rem)]'>
              <Skeleton variant='rounded' className='!h-[150px] !w-full !bg-foreground-2' />
            </div>
          ))}
        </div>
      ) : allImages?.length <= 0 ? (
        <div className='flex-center w-full px-10 py-8'>
          <Nodata width={150} height={150} title={'No image found'}></Nodata>
        </div>
      ) : (
        <div className='flex-center w-full flex-wrap gap-10 px-10 py-8'>
          <PhotoProvider
            images={images?.images || []}
            post_ids={images?.post_ids}
            visible={visible}
            onClose={() => setVisible(false)}
          />
          {allImages?.map((image, index) => (
            <div
              key={index}
              className='relative w-[calc(25%-2.5rem)] max-lg:w-[calc(33%-2.5rem)] max-sm:w-[calc(50%-2.5rem)]'>
              <div className='cursor-pointer' onClick={() => setVisible(true)}>
                <Image
                  className='h-[150px] w-full rounded-md object-cover'
                  src={getImageURL(image.image, 'post_mini')}
                  alt='image'
                  width={500}
                  height={500}
                />
              </div>
              <Link
                href={`/posts/${image.post_id}`}
                target='_blank'
                className='absolute right-0.5 top-0.5 rounded-full bg-gray-300/15 p-2 hover:bg-hover-1'>
                <IoIosMore className='size-6 text-black hover:text-white' />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
