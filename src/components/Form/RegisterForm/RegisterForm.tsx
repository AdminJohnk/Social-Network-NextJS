'use client';

import { z } from 'zod';
import { Link } from '@/navigation';
import { useState } from 'react';
import { ClassValue } from 'clsx';
import { FaSnowflake, FaSpinner } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { userRegisterSchema } from '@/lib/schema';
import { authService } from '@/services/AuthService';

type FormData = z.infer<typeof userRegisterSchema>;

export interface IRegisterFormProps {
  className: string;
}

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export default function RegisterForm({ className }: IRegisterFormProps) {
  const t = useTranslations();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    await authService
      .register({
        name: data.name,
        alias: data.alias,
        email: data.email,
        password: data.password,
        confirm: data.repeatPassword
      })
      .then(async () => {
        await signIn('credentials', {
          email: data.email,
          password: data.password
        });
      })
      .catch((error) => {
        if (error.response.data.message === 'Email already exists') {
          setError('email', {
            message: 'Email already exists'
          });
        }
        if (error.response.data.message === 'Alias already exists') {
          setError('alias', {
            message: 'Alias already exists'
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={cn(className, 'flex-center')}>
      <div className='w-full'>
        <div className='flex-center flex-col'>
          <div className='flex-center'>
            <FaSnowflake className='icon_logo text-text-1' />
            <span className='h2-bold ms-3 text-text-1'>DevHub</span>
          </div>
          <div className='h3-bold my-3 text-text-1'>{t('Create an account')}</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label htmlFor='name' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              {t('Name')}
            </label>
            <input
              type='text'
              id='name'
              className={cn(classStyleInput)}
              placeholder='John Smith'
              autoComplete='name'
              {...register('name')}
            />
            {errors.name && <p className='p-1 text-xs text-red-600'>{t(errors.name.message)}</p>}
          </div>
          <div className='mb-5'>
            <label htmlFor='alias' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              {t('Alias')}
            </label>
            <input
              type='text'
              id='alias'
              className={cn(classStyleInput)}
              placeholder={t('johnsmith (without spacing)')}
              autoComplete='alias'
              {...register('alias')}
            />
            {errors.alias && <p className='p-1 text-xs text-red-600'>{t(errors.alias.message)}</p>}
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              {t('Email')}
            </label>
            <input
              type='email'
              id='email'
              className={cn(classStyleInput)}
              placeholder='johnsmith@example.com'
              autoComplete='email'
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
              id='password'
              className={cn(classStyleInput)}
              placeholder='******'
              autoComplete='password'
              {...register('password')}
            />
            {errors.password && <p className='p-1 text-xs text-red-600'>{t(errors.password.message)}</p>}
          </div>
          <div className='mb-5'>
            <label
              htmlFor='repeat-password'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              {t('Confirm Password')}
            </label>
            <input
              type='password'
              id='repeat-password'
              className={cn(classStyleInput)}
              placeholder='******'
              autoComplete='repeat-password'
              {...register('repeatPassword')}
            />
            {errors.repeatPassword && (
              <p className='p-1 text-xs text-red-600'>{t(errors.repeatPassword.message)}</p>
            )}
          </div>
          <Button className='mb-5 w-full' disabled={isLoading}>
            {isLoading && <FaSpinner className='mr-2 animate-spin' />}
            {t('Sign up')}
          </Button>
        </form>
        <div className='flex-center max-w-sm'>
          <div className='flex-start'>
            <div className='me-2 text-text-1'>{t('Already have an account?')}</div>
            <Link href='/login' className='text-primary-800 hover:underline dark:text-primary-500'>
              {t('Sign in')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
