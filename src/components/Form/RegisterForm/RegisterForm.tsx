import { Link } from '@/navigation';
import { ClassValue } from 'clsx';
import { FaSnowflake } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface IRegisterFormProps {
  className: string;
}

const classStyleInput: ClassValue =
  'shadow-sm bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-gray-900';

export default function RegisterForm(props: IRegisterFormProps) {
  const t = useTranslations();

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
        <form>
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t('Name')}
            </label>
            <input
              type='text'
              id='name'
              className={cn(classStyleInput)}
              placeholder='John Smith'
              autoComplete='one-time-code'
              required
            />
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
              autoComplete='one-time-code'
              required
            />
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
              autoComplete='one-time-code'
              required
            />
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
              autoComplete='one-time-code'
              required
            />
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
              autoComplete='one-time-code'
              required
            />
          </div>
          <Button className='w-full mb-5'>{t('Sign up')}</Button>
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
