'use client';

import { PhotoSlider } from 'react-photo-view';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';
import { LuRotateCcw, LuRotateCw } from 'react-icons/lu';
import { GoScreenFull } from 'react-icons/go';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';

import { cn, getImageURL } from '@/lib/utils';
import { Tabs, TabTitle } from '../ui/tabs';

export interface IPhotoProviderProps {
  images: string[];
  visible: boolean;
  onClose: () => void;
}

export default function PhotoProvider({ images, visible, onClose }: IPhotoProviderProps) {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <PhotoSlider
      visible={visible}
      loadingElement={
        <div className='w-full flex-center py-10'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      }
      onClose={onClose}
      images={images.map((item) => ({ src: getImageURL(item), key: item }))}
      photoWrapClassName='flex-center mb-24 mt-11'
      easing={(type) =>
        type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
      toolbarRender={({ onScale, scale, rotate, onRotate }) => {
        return (
          <div className='flex gap-5 *:size-6 text-text-2 hover:*:text-text-1 *:cursor-pointer duration-300'>
            <BsZoomIn onClick={() => onScale(scale + 1)} />
            <BsZoomOut onClick={() => onScale(scale - 1)} />
            <LuRotateCcw onClick={() => onRotate(rotate - 90)} />
            <LuRotateCw onClick={() => onRotate(rotate + 90)} />
            <GoScreenFull
              onClick={() => {
                fullScreen ? document.exitFullscreen() : document.documentElement.requestFullscreen();
                setFullScreen(!fullScreen);
              }}
            />
          </div>
        );
      }}
      overlayRender={({ images, index, onIndexChange }) => {
        return (
          <div className='flex-center cursor-grab touch-none absolute left-0 bottom-0 w-full z-50 h-24 bg-black/50 custom-scrollbar-none'>
            <Tabs
              id='images-tabs'
              rootClassName='px-8'
              backChevronClassName='-left-3'
              forwardChevronClassName='-right-3'
              navClassName='pt-0'
              active={index}>
              {images.map((item, i) => (
                <TabTitle key={i}>
                  <Image
                    src={item.src!}
                    className={cn(
                      'cursor-pointer rounded-md w-20 h-20 object-cover',
                      i === index && 'ring-2 ring-border-2'
                    )}
                    onClick={() => onIndexChange(i)}
                    width={500}
                    height={500}
                    alt='image'
                    priority
                  />
                </TabTitle>
              ))}
            </Tabs>
          </div>
        );
      }}
    />
  );
}
