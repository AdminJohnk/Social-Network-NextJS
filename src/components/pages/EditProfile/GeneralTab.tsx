'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useUpdateUser } from '@/hooks/mutation';
import { useEffect, useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userGeneralTabSchema } from '@/lib/schema';
import { ToastContainer, showSuccessToast } from '@/components/ui/toast';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';

type FormData = z.infer<typeof userGeneralTabSchema>;

export interface IGeneralTabProps {}

export default function GeneralTab(props: IGeneralTabProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userGeneralTabSchema),
    defaultValues: {
      name: currentUserInfo?.name || '',
      alias: currentUserInfo?.alias || '',
      about: currentUserInfo?.about || ''
    }
  });

  useEffect(() => {
    setValue('name', currentUserInfo?.name || '');
    setValue('alias', currentUserInfo?.alias || '');
    setValue('about', currentUserInfo?.about || '');
  }, [currentUserInfo]);

  async function onSubmit({ name, alias, about }: FormData) {
    setIsLoading(true);

    const updateResult = await mutateUpdateUser({
      name,
      alias,
      about
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div className='md:flex items-center gap-10'>
            <label htmlFor='name' className='md:w-32 text-right'>
              Name
            </label>
            <div className='flex-1 max-md:mt-4'>
              <input
                type='text'
                placeholder='Monroe'
                required
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none'
                {...register('name')}
              />
              {errors.name && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <div className='md:flex items-center gap-10'>
            <label htmlFor='alias' className='md:w-32 text-right'>
              Alias
            </label>
            <div className='flex-1 max-md:mt-4'>
              <input
                type='text'
                placeholder='@monroe'
                disabled={isLoading}
                className='w-full rounded-lg bg-foreground-2 border-none'
                {...register('alias')}
              />
              {errors.alias && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.alias.message}
                </p>
              )}
            </div>
          </div>

          <div className='md:flex items-start gap-10'>
            <label htmlFor='about' className='md:w-32 text-right'>
              About
            </label>
            <div className='flex-1 max-md:mt-4'>
              <textarea
                // defaultValue={currentUserInfo?.about}
                className='w-full rounded-lg bg-foreground-2 border-none'
                rows={5}
                disabled={isLoading}
                placeholder='Write something about yourself...'
                {...register('about')}
              />
              {errors.about && (
                <p className='p-1 text-xs text-red-600'>
                  {errors.about.message}
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
      </form>
      <ToastContainer />
    </div>
  );
}
