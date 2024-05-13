'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { useCurrentUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Tabs, TabTitle } from '@/components/ui/tabs';
import { usePathname, useRouter } from '@/navigation';
import TabCoverSkeleton from './TabCoverSkeleton';
import Divider from '@/components/shared/Divider';
import { imageService } from '@/services/ImageService';
import { useDeleteImage, useUpdateUser } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { set } from 'lodash';
import { CircularProgress } from '@mui/material';

interface ITabCoverProps {
  tabParam: string;
}

export default function TabCover({ tabParam }: ITabCoverProps) {
  const t = useTranslations();
  const { mutateUpdateUser } = useUpdateUser();
  const { mutateDeleteImage } = useDeleteImage();


  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentUserInfo, isLoadingCurrentUserInfo } = useCurrentUserInfo();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tab = useMemo(() => {
    switch (tabParam) {
      case 'social-links':
        return 1;
      case 'expertise':
        return 2;
      case 'experience':
        return 3;
      case 'repository':
        return 4;
      case 'password':
        return 5;
      default:
        return 0;
    }
  }, []);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('tab', value);

      return params.toString();
    },
    [searchParams]
  );

  const [avatar, setAvatar] = useState(getImageURL(currentUserInfo.user_image));
  const [fileAvatar, setFileAvatar] = useState<File>();

  const handleChangeAvatar = useCallback((image: File) => {
    if (!image) return;
    setAvatar(URL.createObjectURL(image));
    setFileAvatar(image);
  }, []);

  const handleUploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await imageService.uploadImage(formData);
    return {
      url: data.metadata,
      status: 'done'
    };
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    if (fileAvatar) {
      const res = await handleUploadImage(fileAvatar);
      formData.append('userImage', res.url.key);
      // if (initialAvatar) await handleRemoveImage(initialAvatar);
    }
    const oldAvatar = currentUserInfo.user_image;

    mutateUpdateUser({
      user_image: formData.get('userImage')?.toString(),
    },
      {
        onSuccess() {
          showSuccessToast(t('Your profile has been updated successfully!'));
          fileAvatar && (mutateDeleteImage([oldAvatar]));
          setFileAvatar(undefined);
        },
        onError() {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
        }
      });
  };

  return (
    <div className='rounded-xl border border-border-1 bg-foreground-1 shadow-sm'>
      {isLoadingCurrentUserInfo ? (
        <TabCoverSkeleton />
      ) : (
        <>
          <div className='flex relative space-y-4'>
            <div className='flex-start gap-4 p-8'>
              <div className='relative md:w-20 md:h-20 w-12 h-12 shrink-0'>
                <label htmlFor='file' className='cursor-pointer'>
                  <Image
                    className='object-cover overflow-hidden rounded-full md:w-20 md:h-20 w-12 h-12'
                    src={avatar}
                    alt={currentUserInfo.user_image}
                    height={500}
                    width={500}
                    priority
                  />
                  <input
                    type='file'
                    id='file'
                    className='hidden'
                    accept='image/*'
                    disabled={isLoading}
                    onChange={(e) => handleChangeAvatar(e.currentTarget.files?.[0]!)}
                  />
                </label>

                <label
                  htmlFor='file'
                  className='md:p-1 p-0.5 rounded-full bg-slate-600 md:border-4 border-white absolute md:-bottom-2 -bottom-1 md:-right-2 -right-1 cursor-pointer dark:border-slate-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='md:w-4 md:h-4 w-3 h-3 fill-white'>
                    <path d='M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z'></path>
                    <path
                      fillRule='evenodd'
                      d='M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z'
                      clipRule='evenodd'></path>
                  </svg>

                  <input id='file' type='file' className='hidden' />
                </label>
              </div>
              <div className='flex flex-col'>
                <span className='h5-bold mb-2'>{currentUserInfo.name}</span>
                <span className='small-regular text-text-2'>
                  @{currentUserInfo.alias || currentUserInfo._id}
                </span>
                {fileAvatar && (
                  <div className='flex gap-2 mt-2'>
                    <Button
                      variant={'destructive'}
                      onClick={() => {
                        setAvatar(getImageURL(currentUserInfo.user_image));
                        setFileAvatar(undefined);
                      }}
                      className='py-1 px-2'
                      disabled={isLoading}>
                      {t('Cancel')}
                    </Button>
                    <Button
                      onClick={onSubmit}
                      className={cn('py-1 px-2', isLoading && 'select-none')}
                      disabled={isLoading}>
                      {isLoading && <CircularProgress size={15} className='!text-text-1 mr-2' />}
                      {t('Save')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Divider />

          <Tabs id='setting_tab' disableChevron active={tab}>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('general'));
              }}>
              {t('General')}
            </TabTitle>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('social-links'));
              }}>
              {t('Social links')}
            </TabTitle>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('expertise'));
              }}>
              {t('Expertise')}
            </TabTitle>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('experience'));
              }}>
              {t('Experience')}
            </TabTitle>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('repository'));
              }}>
              {t('Repository')}
            </TabTitle>
            <TabTitle
              onClick={() => {
                router.push(pathname + '?' + createQueryString('password'));
              }}>
              {t('Password')}
            </TabTitle>
          </Tabs>
        </>
      )}
    </div>
  );
}
