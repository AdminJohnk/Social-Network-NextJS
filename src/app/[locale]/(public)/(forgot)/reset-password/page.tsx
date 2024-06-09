'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { showErrorToast } from '@/components/ui/toast';
import { useCheckResetPassword, useResetPassword } from '@/hooks/mutation';
import { useRouter } from '@/navigation';
import { ErrorResponse } from '@/types';

export interface IResetPasswordProps {
  searchParams: {
    email: string;
    code: string;
  };
}

export default function ResetPassword({ searchParams: { email, code: fakeCode } }: IResetPasswordProps) {
  const t = useTranslations();
  const router = useRouter();
  const { mutateCheckResetPassword } = useCheckResetPassword();
  const { mutateResetPassword, isLoadingResetPassword } = useResetPassword();

  const [password, setPassword] = useState('');

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (!email) {
      router.push('/forgot-password');
    }

    if (email) {
      mutateCheckResetPassword(
        { email },
        {
          onError: (error) => {
            router.push('/forgot-password');
            console.log(error);
          }
        }
      );
    }
  }, [email]);

  const handleSubmit = () => {
    if (password === confirmPassword) {
      mutateResetPassword(
        {
          email,
          password
        },
        {
          onSuccess: () => {
            router.push('/login');
          },
          onError: (error) => {
            showErrorToast((error as ErrorResponse).response.data.message);
            console.log(error);
          }
        }
      );
    }
  };

  return (
    <div id='content' role='main' className='mx-auto w-full max-w-md p-6'>
      <div className='mt-7 rounded-xl border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              {t('Reset your password')}
            </h1>
          </div>

          <div className='mt-5'>
            <div className='grid gap-y-4'>
              <div>
                <label htmlFor='password' className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                  {t('Password')}
                </label>
                <div className='relative'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm text-black shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    required
                    aria-describedby='email-error'
                    onChange={handleChangePassword}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='confirmPassword'
                  className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                  {t('Confirm Password')}
                </label>
                <div className='relative'>
                  <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Enter your confirm password'
                    className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm text-black shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    required
                    onChange={handleChangeConfirmPassword}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'>
                {t('Reset password')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
