'use client';

import { Button } from '@/components/ui/button';
import { useUpdateUser } from '@/hooks/mutation';
import { useMemo, useState } from 'react';
import * as z from 'zod';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userGeneralTabSchema } from '@/lib/schema';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof userGeneralTabSchema>;

export default function GeneralTab() {
  const t = useTranslations();
  const { currentUserInfo } = useCurrentUserInfo();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userGeneralTabSchema),
    defaultValues: {
      name: currentUserInfo.name || '',
      alias: currentUserInfo.alias || '',
      about: currentUserInfo.about || ''
    }
  });

  const values = useWatch({ control });

  const isChanged = useMemo(() => {
    return (
      values.name !== currentUserInfo.name ||
      values.alias !== currentUserInfo.alias ||
      values.about !== currentUserInfo.about
    );
  }, [values, currentUserInfo]);

  async function onSubmit({ name, alias, about }: FormData) {
    setIsLoading(true);

    mutateUpdateUser(
      {
        name,
        alias,
        about
      },
      {
        onSuccess() {
          showSuccessToast(t('Your profile has been updated successfully!'));
        },
        onError() {
          showErrorToast('Something went wrong! Please try again!');
        },
        onSettled() {
          setIsLoading(false);
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        <div className='md:flex items-center gap-10'>
          <label htmlFor='name' className='md:w-16 text-right'>
            {t('Name')}
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
            {errors.name && <p className='p-1 text-xs text-red-600'>{t(errors.name.message)}</p>}
          </div>
        </div>

        <div className='md:flex items-center gap-10'>
          <label htmlFor='alias' className='md:w-16 text-right'>
            {t('Alias')}
          </label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='text'
              placeholder='@monroe'
              disabled={isLoading}
              className='w-full rounded-lg bg-foreground-2 border-none'
              {...register('alias')}
            />
            {errors.alias && <p className='p-1 text-xs text-red-600'>{t(errors.alias.message)}</p>}
          </div>
        </div>

        <div className='md:flex items-start gap-10'>
          <label htmlFor='about' className='md:w-16 text-right'>
            {t('About')}
          </label>
          <div className='flex-1 max-md:mt-4'>
            <textarea
              className='w-full rounded-lg bg-foreground-2 border-none'
              rows={5}
              disabled={isLoading}
              placeholder='Write something about yourself...'
              {...register('about')}
            />
            {errors.about && <p className='p-1 text-xs text-red-600'>{t(errors.about.message)}</p>}
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
          disabled={!isChanged || isLoading}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          {t('Save')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </form>
  );
}
