'use client';

import { z } from 'zod';
import { Link, useRouter } from '@/navigation';
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

export default function RegisterForm(props: IRegisterFormProps) {
  const t = useTranslations();

  const router = useRouter();

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
    <div className={cn(props.className, 'flex-center')}>
      <div className='w-full'>
        <div className='flex-center'>
          <div>
            <div className='flex-center'>
              <FaSnowflake className='icon_logo text-text-1' />
              <span className='h2-bold text-text-1 ms-3'>DevHub</span>
            </div>
            <div className='h3-bold text-text-1 my-3'>{t('Create an account')}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
            {errors.name && <p className='p-1 text-xs text-red-600'>{errors.name.message}</p>}
          </div>
          <div className='mb-5'>
            <label htmlFor='alias' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
            {errors.alias && <p className='p-1 text-xs text-red-600'>{errors.alias.message}</p>}
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
              id='password'
              className={cn(classStyleInput)}
              placeholder='******'
              autoComplete='password'
              {...register('password')}
            />
            {errors.password && <p className='p-1 text-xs text-red-600'>{errors.password.message}</p>}
          </div>
          <div className='mb-5'>
            <label
              htmlFor='repeat-password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
              <p className='p-1 text-xs text-red-600'>{errors.repeatPassword.message}</p>
            )}
          </div>
          <Button className='w-full mb-5' disabled={isLoading}>
            {isLoading && <FaSpinner className='animate-spin mr-2' />}
            {t('Sign up')}
          </Button>
        </form>
        <div className='max-w-sm flex-center'>
          <div className='flex-start'>
            <div className='me-2 text-text-1'>{t('Already have an account?')}</div>
            <Link href='/login' className='text-primary-800 dark:text-primary-500 hover:underline'>
              {t('Sign in')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
