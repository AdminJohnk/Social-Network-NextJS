'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { usePathname } from '@/navigation';
import { useGetAllCommunityImages } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import PhotoProvider from '@/components/shared/PhotoProvider';

interface IRecentImageProps {
  communityID: string;
}

export default function RecentImage({ communityID }: IRecentImageProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { allCommunityImages, isLoadingAllCommunityImages } = useGetAllCommunityImages(communityID);
  const [visible, setVisible] = useState(false);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('tab', value);

      return params.toString();
    },
    [searchParams]
  );

  const onClickSeeAll = () => {
    window.location.href = pathname + '?' + createQueryString('photos');
  };

  return (
    <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
      <div className='flex items-baseline justify-between text-text-1'>
        <h3 className='font-bold text-base'> {t('Recent Images')} </h3>
        {isLoadingAllCommunityImages ? (
          <CircularProgress size={20} className='!text-text-1' />
        ) : (
          <span className='text-sm cursor-pointer text-blue-500 hover:underline' onClick={onClickSeeAll}>
            {t('See all')}
          </span>
        )}
      </div>
      <div className='grid grid-cols-2 gap-1 text-center text-sm mt-4 mb-2 rounded-lg overflow-hidden'>
        {isLoadingAllCommunityImages ? (
          <div className='flex-center w-full h-full p-5'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <>
            <PhotoProvider
              images={allCommunityImages || []}
              visible={visible}
              onClose={() => setVisible(false)}
            />
            {allCommunityImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className='relative w-full aspect-[4/3] cursor-pointer rounded-md overflow-hidden'
                onClick={() => setVisible(true)}>
                <Image
                  width={500}
                  height={500}
                  src={getImageURL(image)}
                  alt='image'
                  className='object-cover w-full h-full inset-0'
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
