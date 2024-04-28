'use client';

import Nodata from '@/components/shared/Nodata';
import { useGetAllImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export interface IPhotoTabProps {
  profileID: string;
}

export default function PhotoTab({ profileID }: IPhotoTabProps) {
  const { allImages, isLoadingAllImages } = useGetAllImages(profileID);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {allImages?.length <= 0 ? (
        <div className='w-full px-10 py-8 flex-center'>
          <Nodata width={150} height={150} title={'No image found'}></Nodata>
        </div>
      ) : (
        <div className='flex-center flex-wrap px-10 py-8 gap-10 w-full'>
          {allImages?.map((image, index) => (
            <div key={index} className='w-[calc(25%-2.5rem)] cursor-pointer' onClick={handleOpen}>
              <PhotoView key={index} src={getImageURL(image, 'default')} render={({}) => <>con heo</>}>
                <Image
                  className='rounded-md w-full h-[150px] object-cover'
                  src={getImageURL(image, 'post_mini')}
                  alt='image'
                  width={500}
                  height={500}
                />
              </PhotoView>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
