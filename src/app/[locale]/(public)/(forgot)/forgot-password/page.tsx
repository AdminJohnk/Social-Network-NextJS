'use client';

import { showErrorToast } from '@/components/ui/toast';
import { useForgotPassword } from '@/hooks/mutation';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export interface IForgotPasswordProps {
}

export default function ForgotPassword({ }: IForgotPasswordProps) {
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

    mutateForgotPassword(email,
      {
        onSuccess: (data) => {
          router.push(`verify?email=${email}&code=${Math.floor(
            Math.random() * 1000000
          )}&note=codetrongemailchukhongphaicodenaydaunehihi`);
          console.log(data);
        },
        onError: (error) => {
          showErrorToast(error.response.data.message);
          console.log(error);
        }
      }
    );
  };

  return (
    <div id='content' role='main' className='w-full max-w-md mx-auto p-6'>
      <div className='mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>{t('Forgot password')}?</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              {t('Remember your password')}?&nbsp;
              <span
                className='text-blue-600 decoration-2 hover:underline font-medium cursor-pointer'
                onClick={() => router.push('/login')}>
                {t('Login here')}
              </span>
            </p>
          </div>

          <div className='mt-5'>
            <div className='grid gap-y-4'>
              <div>
                <label htmlFor='email' className='block text-sm font-bold ml-1 mb-2 dark:text-white'>
                  {t('Email address')}
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    className='py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm'
                    required
                    aria-describedby='email-error'
                    onChange={handleChangeEmail}
                  />
                </div>
                <p className='hidden text-xs text-red-600 mt-2' id='email-error'>
                  {t('Please include a valid email address so we can get back to you')}
                </p>
              </div>
              <button
                onClick={handleSubmit}
                className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
                {t('Reset password')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
