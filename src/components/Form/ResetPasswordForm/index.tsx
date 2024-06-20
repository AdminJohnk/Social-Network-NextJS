'use client';

import { ClassValue } from 'clsx';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { showErrorToast } from '@/components/ui/toast';
import { useResetPassword } from '@/hooks/mutation';
import { resetPasswordSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import { useRouter } from '@/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof resetPasswordSchema>;

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export interface IResetPasswordProps {
  searchParams: {
    email: string;
  };
}

export default function ResetPasswordForm({ searchParams: { email } }: IResetPasswordProps) {
  const t = useTranslations();
  const router = useRouter();

  const { mutateResetPassword, isLoadingResetPassword } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema)
  });

  const onSubmit = ({ password }: FormData) => {
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
          showErrorToast(t('Something went wrong! Please try again!'));
          console.log(error);
        }
      }
    );
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                    {t('Password')}
                  </label>
                  <input
                    type='password'
                    className={cn(classStyleInput)}
                    placeholder={t('Your new password')}
                    disabled={isLoadingResetPassword}
                    autoComplete='username'
                    {...register('password')}
                  />
                  {errors.password && (
                    <span className='text-sm text-red-500'>{t(errors.password.message)}</span>
                  )}
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                    {t('Confirm password')}
                  </label>
                  <input
                    type='password'
                    className={cn(classStyleInput)}
                    placeholder={t('Confirm your new password')}
                    disabled={isLoadingResetPassword}
                    autoComplete='username'
                    {...register('repeatPassword')}
                  />
                  {errors.repeatPassword && (
                    <span className='text-sm text-red-500'>{t(errors.repeatPassword.message)}</span>
                  )}
                </div>

                <Button type='submit' disabled={isLoadingResetPassword}>
                  {isLoadingResetPassword && <FaSpinner className='mr-2 animate-spin' />}
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
