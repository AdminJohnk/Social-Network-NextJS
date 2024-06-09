'use client';

import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { getImageURL } from '@/lib/utils';
import Image from 'next/image';
import { showErrorToast } from './toast';

interface IProfileUpload {
  fieldChange: (files: File) => void;
  mediaURL: string;
}

export const ProfileUpload = ({ fieldChange, mediaURL }: IProfileUpload) => {
  const t = useTranslations();
  const [fileUrl, setFileUrl] = useState(getImageURL(mediaURL, 'avatar'));

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      fieldChange(acceptedFiles[0]);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [fileUrl]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: onDrop,
    onDropRejected: () => {
      showErrorToast(t('Your image is too big!'));
    },
    accept: {
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/webp': ['.webp']
    },
    maxSize: 1024 * 1024 * 10,
    multiple: false,
    onError: (error) => {
      showErrorToast(error.message);
    }
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className='cursor-pointer' />

      <div className='flex-center cursor-pointer gap-6'>
        <Image
          src={fileUrl || '/images/DefaultAvatar/Empty_Group_Image.png'}
          alt='image'
          className='size-24 rounded-full object-cover object-top'
          height={500}
          width={500}
          priority
        />
        <Button type='button' className='small-regular md:base-semibold'>
          {t('Choose image')}
        </Button>
      </div>
    </div>
  );
};
