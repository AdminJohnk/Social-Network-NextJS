'use client';

import { ClassValue } from 'clsx';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { showErrorToast } from '@/components/ui/toast';
import { useForgotPassword } from '@/hooks/mutation';
import { forgotPasswordSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { ErrorResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof forgotPasswordSchema>;

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export default function ForgotPasswordForm() {
  const t = useTranslations();
  const router = useRouter();

  const { mutateForgotPassword, isLoadingForgotPassword } = useForgotPassword();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = ({ email }: FormData) => {
    if (!email) {
      return;
    }

    mutateForgotPassword(email, {
      onSuccess: () => {
        router.push(
          `verify?email=${email}&code=${Math.floor(
            Math.random() * 1000000
          )}&note=codetrongemailchukhongphaicodenaydaunehihi`
        );
      },
      onError: (error) => {
        if ((error as ErrorResponse).response.data.message === 'Email not exists') {
          setError('email', {
            message: 'Email not exists'
          });
        } else {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    });
  };

  return (
    <div id='content' role='main' className='mx-auto w-full max-w-md p-6'>
      <div className='mt-7 rounded-xl border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>{t('Forgot password')}</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              {t('Remember your password?')}&nbsp;
              <span
                className='cursor-pointer font-medium text-blue-600 decoration-2 hover:underline'
                onClick={() => router.push('/login')}>
                {t('Login here')}
              </span>
            </p>
          </div>

          <div className='mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-4'>
                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                    {t('Email')}
                  </label>
                  <input
                    type='email'
                    className={cn(classStyleInput)}
                    placeholder={t('Your Email')}
                    disabled={isLoadingForgotPassword}
                    autoComplete='username'
                    {...register('email')}
                  />
                  {errors.email && <span className='text-sm text-red-500'>{t(errors.email.message)}</span>}
                </div>

                <Button type='submit' disabled={isLoadingForgotPassword}>
                  {isLoadingForgotPassword && <FaSpinner className='mr-2 animate-spin' />}
                  {t('Reset password')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
