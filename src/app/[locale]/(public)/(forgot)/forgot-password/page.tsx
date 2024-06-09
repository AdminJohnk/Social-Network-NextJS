'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { showErrorToast } from '@/components/ui/toast';
import { useForgotPassword } from '@/hooks/mutation';
import { useRouter } from '@/navigation';
import { ErrorResponse } from '@/types';
import { Button } from '@/components/ui/button';

export interface IForgotPasswordProps {}

export default function ForgotPassword({}: IForgotPasswordProps) {
  const t = useTranslations();
  const router = useRouter();

  const { mutateForgotPassword } = useForgotPassword();

  const [email, setEmail] = useState('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
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
        showErrorToast((error as ErrorResponse).response.data.message);
        console.log(error);
      }
    });
  };

  return (
    <div id='content' role='main' className='mx-auto w-full max-w-md p-6'>
      <div className='mt-7 rounded-xl border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              {t('Forgot password')}?
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              {t('Remember your password')}?&nbsp;
              <span
                className='cursor-pointer font-medium text-blue-600 decoration-2 hover:underline'
                onClick={() => router.push('/login')}>
                {t('Login here')}
              </span>
            </p>
          </div>

          <div className='mt-5'>
            <div className='grid gap-y-4'>
              <div>
                <label htmlFor='email' className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                  {t('Email address')}
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    required
                    aria-describedby='email-error'
                    onChange={handleChangeEmail}
                  />
                </div>
                <p className='mt-2 hidden text-xs text-red-600' id='email-error'>
                  {t('Please include a valid email address so we can get back to you')}
                </p>
              </div>
              <Button onClick={handleSubmit}>{t('Reset password')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
