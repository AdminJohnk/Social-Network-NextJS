'use client';

import { useState } from 'react';
import { FaSnowflake, FaSpinner } from 'react-icons/fa';
import { Link } from '@/navigation';
import { ClassValue } from 'clsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { userAuthSchema } from '@/lib/schema/auth';
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof userAuthSchema>;

export interface IRegisterFormProps {
  className: string;
  callbackUrl: string;
}

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export default function LoginForm({ callbackUrl, className }: IRegisterFormProps) {
  const t = useTranslations();

  const locale = useLocale();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema)
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: callbackUrl || '/' + locale
    });

    setIsLoading(false);

    if (signInResult && signInResult.error) {
      if (signInResult.error.includes('400')) {
        setError('email', {
          message: 'Email not exists!'
        });
      } else if (signInResult.error.includes('401')) {
        setError('password', {
          message: 'Password is incorrect!'
        });
      }
    }
  }

  return (
    <div className={cn(className, 'flex-center')}>
      <div className='w-full'>
        <div className='flex-center'>
          <div>
            <div className='flex-center'>
              <FaSnowflake className='icon_logo text-text-1' />
              <span className='h2-bold text-text-1 ms-3'>DevHub</span>
            </div>
            <div className='h3-bold text-text-1 my-3'>{t('Sign in to your account')}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t('Email')}
            </label>
            <input
              type='email'
              className={cn(classStyleInput)}
              placeholder={t('Your Email')}
              disabled={isLoading}
              autoComplete='username'
              {...register('email')}
            />
            {errors.email && <p className='p-1 text-xs text-red-600'>{errors.email.message}</p>}
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t('Password')}
            </label>
            <input
              type='password'
              className={cn(classStyleInput)}
              placeholder={t('Your Password')}
              disabled={isLoading}
              autoComplete='current-password'
              {...register('password')}
            />
            {errors.password && <p className='p-1 text-xs text-red-600'>{errors.password.message}</p>}
          </div>
          <Button
            className='flex-center w-full mb-5 bg-blue-200 hover:bg-blue-400'
            type='submit'
            disabled={isLoading}>
            {isLoading && <FaSpinner className='animate-spin mr-2' />}
            {t('Sign in')}
          </Button>
        </form>
        <div className='max-w-sm flex-center'>
          <div className='flex-start'>
            <div className='me-2 text-text-1'>{t("Don't have an account yet?")}</div>
            <Link href='/register' className='text-primary-800 dark:text-primary-500 hover:underline'>
              {t('Sign up')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
