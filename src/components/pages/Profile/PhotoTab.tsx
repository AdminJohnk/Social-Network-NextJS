'use client';

import Nodata from '@/components/shared/Nodata';
import { useGetAllPostImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import PhotoProvider from '@/components/shared/PhotoProvider';
import { IoIosMore } from 'react-icons/io';
import { Link } from '@/navigation';

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
        post_ids: allImages.map((item) => item.post_id),
      };
    }
  }, [allImages]);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {allImages?.length <= 0 ? (
        <div className='w-full px-10 py-8 flex-center'>
          <Nodata width={150} height={150} title={'No image found'}></Nodata>
        </div>
      ) : (
        <div className='flex-center flex-wrap px-10 py-8 gap-10 w-full'>
          <PhotoProvider images={images?.images || []} post_ids={images?.post_ids} visible={visible} onClose={() => setVisible(false)} />
          {allImages?.map((image, index) => (
            <div key={index} className='w-[calc(25%-2.5rem)] relative'>
              <div className='cursor-pointer' onClick={() => setVisible(true)}>
                <Image
                  className='rounded-md w-full h-[150px] object-cover'
                  src={getImageURL(image.image, 'post_mini')}
                  alt='image'
                  width={500}
                  height={500}
                />
              </div>
              <Link href={`/posts/${image.post_id}`} target='_blank' className='absolute top-0.5 right-0.5 p-2 bg-gray-300/15 rounded-full hover:bg-hover-1' >
                <IoIosMore className='size-6 text-black hover:text-white' />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
