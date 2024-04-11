'use client';

import React, { useEffect, useState } from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSocialTabSchema } from '@/lib/schema';
import { ToastContainer, showSuccessToast } from '@/components/ui/toast';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useUpdateUser } from '@/hooks/mutation';

type FormData = z.infer<typeof userSocialTabSchema>;

export interface ISocialTabProps {}

export default function SocialTab(props: ISocialTabProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  useEffect(() => {
    const facebook = currentUserInfo?.contacts?.find(
      contact => contact.key === 'facebook'
    )?.link;
    const twitter = currentUserInfo?.contacts?.find(
      contact => contact.key === 'twitter'
    )?.link;
    const instagram = currentUserInfo?.contacts?.find(
      contact => contact.key === 'instagram'
    )?.link;
    const linkedin = currentUserInfo?.contacts?.find(
      contact => contact.key === 'linkedin'
    )?.link;
    const github = currentUserInfo?.contacts?.find(
      contact => contact.key === 'github'
    )?.link;

    setValue('facebook', facebook || '');
    setValue('twitter', twitter || '');
    setValue('instagram', instagram || '');
    setValue('linkedin', linkedin || '');
    setValue('github', github || '');
  }, [currentUserInfo]);

  async function onSubmit({
    facebook,
    twitter,
    instagram,
    linkedin,
    github
  }: FormData) {
    setIsLoading(true);

    const updateResult = await mutateUpdateUser({
      contacts: [
        { key: 'facebook', link: facebook as string },
        { key: 'twitter', link: twitter as string },
        { key: 'instagram', link: instagram as string },
        { key: 'linkedin', link: linkedin as string },
        { key: 'github', link: github as string }
      ]
    });

    setIsLoading(false);

    showSuccessToast(t('Your profile has been updated successfully!'));

    // OK
    if (updateResult) {
      // Show success notification
    } else {
      // Set error
    }
  }

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userSocialTabSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='font-normal text-gray-400'>
        <div className='space-y-6 mt-8'>
          <div className='flex items-center gap-3'>
            <div className='bg-blue-50 rounded-full p-2 flex '>
              <FaFacebook className='text-2xl text-blue-600' />
            </div>
            <div className='flex-1'>
              <input
                type='text'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none text-text-1'
                placeholder='http://www.facebook.com/myname'
                {...register('facebook')}
              />
              {errors.facebook && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.facebook.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-pink-50 rounded-full p-2 flex '>
              <FaInstagram className='text-2xl text-pink-600' />
            </div>
            <div className='flex-1'>
              <input
                type='text'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none text-text-1'
                placeholder='https://www.instagram.com/myname'
                {...register('instagram')}
              />
              {errors.instagram && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.instagram.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-sky-50 rounded-full p-2 flex '>
              <FaTwitter className='text-2xl text-sky-600' />
            </div>
            <div className='flex-1'>
              <input
                type='text'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none text-text-1'
                placeholder='http://www.twitter.com/myname'
                {...register('twitter')}
              />
              {errors.twitter && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.twitter.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-slate-50 rounded-full p-2 flex '>
              <FaGithub className='text-2xl text-black' />
            </div>
            <div className='flex-1'>
              <input
                type='text'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none text-text-1'
                placeholder='http://www.github.com/myname'
                {...register('github')}
              />
              {errors.github && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.github.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-slate-50 rounded-full p-2 flex '>
              <FaLinkedin className='text-2xl text-blue-1' />
            </div>
            <div className='flex-1'>
              <input
                type='text'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none text-text-1'
                placeholder='http://www.linkedin.com/myname'
                {...register('linkedin')}
              />
              {errors.linkedin && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.linkedin.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center gap-4 mt-16'>
          <Button
            variant='destructive'
            className='button lg:px-6 max-md:flex-1'
          >
            Cancel
          </Button>
          <Button
            type='submit'
            className='button lg:px-6 text-white max-md:flex-1'
          >
            {isLoading && (
              <CircularProgress size={20} className='text-text-1 mr-2' />
            )}
            Save <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </form>
  );
}
