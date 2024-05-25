'use client';

import Nodata from '@/components/shared/Nodata';
import { useGetAllCommunityImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import PhotoProvider from '@/components/shared/PhotoProvider';

export interface IPhotoTabProps {
  communityID: string;
}

export default function PhotoTab({ communityID }: IPhotoTabProps) {
  const { allCommunityImages } = useGetAllCommunityImages(communityID);
  const [visible, setVisible] = useState(false);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {!allCommunityImages?.length ? (
        <div className='w-full px-10 py-8 flex-center'>
          <Nodata width={150} height={150} title={'No image found'}></Nodata>
        </div>
      ) : (
        <div className='flex-center flex-wrap px-10 py-8 gap-10 w-full'>
          <PhotoProvider
            images={allCommunityImages || []}
            visible={visible}
            onClose={() => setVisible(false)}
          />
          {allCommunityImages?.map((image, index) => (
            <div key={index} className='w-[calc(25%-2.5rem)] cursor-pointer' onClick={() => setVisible(true)}>
              <Image
                className='rounded-md w-full h-[150px] object-cover'
                src={getImageURL(image, 'post_mini')}
                alt='image'
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
