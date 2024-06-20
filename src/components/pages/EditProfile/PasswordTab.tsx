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

  async function onSubmit({ newPassword }: FormData) {
    setIsLoading(true);

    await mutateChangePassword(
      {
        email: session?.email || '',
        password: newPassword
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
        <div className='items-center justify-between gap-16 max-md:space-y-3 md:flex'>
          <label className='text-right md:w-32'>{t('Current Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg border-none bg-foreground-2'
              {...register('oldPassword')}
            />
            {errors.oldPassword && (
              <div className='mt-1 text-sm text-red-500'>{errors.oldPassword.message}</div>
            )}
          </div>
        </div>

        <div className='items-center justify-between gap-16 max-md:space-y-3 md:flex'>
          <label className='text-right md:w-32'>{t('New Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg border-none bg-foreground-2'
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <div className='mt-1 text-sm text-red-500'>{errors.newPassword.message}</div>
            )}
          </div>
        </div>

        <div className='items-center justify-between gap-16 max-md:space-y-3 md:flex'>
          <label className='text-right md:w-32'>{t('Confirm New Password')}</label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg border-none bg-foreground-2'
              {...register('repeatPassword')}
            />
            {errors.repeatPassword && (
              <div className='mt-1 text-sm text-red-500'>{errors.repeatPassword.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className='mt-16 flex items-center justify-center gap-4'>
        <Button
          type='submit'
          className={cn(
            'button text-white max-md:flex-1 lg:px-6',
            (!isChanged || isLoading) && 'select-none'
          )}
          disabled={isLoading || !isChanged}>
          {isLoading && <CircularProgress size={20} className='mr-2 !text-text-1' />}
          {t('Save')}
        </Button>
      </div>
    </form>
  );
}
