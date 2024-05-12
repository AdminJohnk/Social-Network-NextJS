'use client';

import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { useChangePassword } from '@/hooks/mutation';
import { userPasswordTabSchema } from '@/lib/schema';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof userPasswordTabSchema>;

export default function PasswordTab() {
  const t = useTranslations();

  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateChangePassword } = useChangePassword();

  const {
    register,
    control,
    reset,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userPasswordTabSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: ''
    }
  });

  const values = useWatch({ control });

  const isChanged = useMemo(
    () => !!values.oldPassword && !!values.newPassword && !!values.repeatPassword,
    [values]
  );

  async function onSubmit({ newPassword, oldPassword }: FormData) {
    setIsLoading(true);

    await mutateChangePassword(
      {
        email: session?.email || '',
        oldPassword,
        newPassword
      },
      {
        onError: () => {
          setError('oldPassword', {
            message: t('The old password is incorrect!')
          });
          showErrorToast(t('Failed to update your profile!'));
        },
        onSuccess: () => {
          showSuccessToast(t('Your profile has been updated successfully!'));
          reset();
        },
        onSettled: () => {
          setIsLoading(false);
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-32 text-right'>{t('Current Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
              {...register('oldPassword')}
            />
            {errors.oldPassword && (
              <div className='text-red-500 text-sm mt-1'>{errors.oldPassword.message}</div>
            )}
          </div>
        </div>

        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-32 text-right'>{t('New Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <div className='text-red-500 text-sm mt-1'>{errors.newPassword.message}</div>
            )}
          </div>
        </div>

        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-32 text-right'>{t('Confirm New Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
              {...register('repeatPassword')}
            />
            {errors.repeatPassword && (
              <div className='text-red-500 text-sm mt-1'>{errors.repeatPassword.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 mt-16'>
        <Button
          type='submit'
          className={cn(
            'button lg:px-6 text-white max-md:flex-1',
            (!isChanged || isLoading) && 'select-none'
          )}
          disabled={isLoading || !isChanged}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          {t('Save')}
        </Button>
      </div>
    </form>
  );
}
