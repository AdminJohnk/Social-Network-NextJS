'use client';

import { z } from 'zod';
import { useState } from 'react';
import { FaSnowflake, FaSpinner } from 'react-icons/fa';
import { Link } from '@/navigation';
import { ClassValue } from 'clsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { userAuthSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5';

type FormData = z.infer<typeof userAuthSchema>;

export interface IRegisterFormProps {
  className: string;
  callbackUrl: string;
}

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export default function LoginForm({ callbackUrl, className }: IRegisterFormProps) {
  const t = useTranslations();

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
      redirect: false
    });

    if (signInResult) {
      if (signInResult.error) {
        if (signInResult.error.includes('400')) {
          setError('email', {
            message: 'Email not exists!'
          });
        } else if (signInResult.error.includes('401')) {
          setError('password', {
            message: 'Password is incorrect!'
          });
        }
      } else {
        window.location.replace(callbackUrl || '/');
      }
    }

    setIsLoading(false);
  }

  return (
    <div className={cn(className, 'flex-center -mt-10')}>
      <div className='w-full'>
        <div className='flex-center'>
          <div>
            <div className='flex-center'>
              <FaSnowflake className='icon_logo text-text-1' />
              <span className='h2-bold ms-3 text-text-1'>DevHub</span>
            </div>
            <div className='h3-bold my-3 text-text-1'>{t('Sign in to your account')}</div>
          </div>
        </div>

        <div className='loginTool mt-5 flex w-full flex-col gap-3'>
          <Button
            variant='outline'
            className='flex-center mb-5 w-full'
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              signIn('google').finally(() => setIsLoading(false));
            }}>
            <span className='icon mr-2'>
              <IoLogoGoogle className='size-5' />
            </span>
            <span>Continue with Gmail</span>
          </Button>
          <Button
            variant='outline'
            className='flex-center mb-5 w-full'
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              signIn('github').finally(() => setIsLoading(false));
            }}>
            <span className='icon mr-2'>
              <IoLogoGithub className='size-5' />
            </span>
            <span>Continue with Github</span>
          </Button>
        </div>

        <div className='flex-center my-3 gap-3'>
          <hr className='w-full border-border-1' />
          <span className='font-semibold text-text-1'>Or</span>
          <hr className='w-full border-border-1' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
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
            {errors.email && <p className='p-1 text-xs text-red-600'>{t(errors.email.message)}</p>}
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
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
            {errors.password && <p className='p-1 text-xs text-red-600'>{t(errors.password.message)}</p>}
          </div>
          <Button className='flex-center w-full' type='submit' disabled={isLoading}>
            {isLoading && <FaSpinner className='mr-2 animate-spin' />}
            {t('Sign in')}
          </Button>
        </form>

        <Link href='/forgot-password' className='flex-center mt-2'>
          <span className='forgot hover:underline'>{t('Forgot password?')}</span>
        </Link>

        <div className='flex-center mt-2'>
          <div className='flex-center'>
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
