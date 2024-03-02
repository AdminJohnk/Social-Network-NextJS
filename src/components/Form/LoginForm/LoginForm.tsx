'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/schema/auth';
// import { toast } from '@/components/ui/use-toast';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button, Input } from '@mui/material';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema)
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get('callbackUrl') || '/'
    });

    setIsLoading(false);

    if (!signInResult?.ok || signInResult?.error) {
      //   return toast({
      //     title: signInResult?.error ?? 'Something went wrong.',
      //     description: 'Your sign in request failed. Please try again.',
      //     variant: 'destructive'
      //   });
    }

    // toast({
    //   title: 'Login Success'
    // });

    console.log('signInResult:: ', signInResult);

    if (signInResult?.url) {
      router.push('/');
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <label className='sr-only' htmlFor='email'>
              Email
            </label>
            <Input
              id='username'
              placeholder='username'
              type='text'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              {...register('username')}
            />
            {errors?.username && (
              <p className='px-1 text-xs text-red-600'>
                {errors.username.message}
              </p>
            )}
          </div>
          <div className='grid gap-1'>
            <label className='sr-only' htmlFor='email'>
              Password
            </label>
            <Input
              id='password'
              type='password'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              placeholder='password'
              disabled={isLoading || isGoogleLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className='px-1 text-xs text-red-600'>
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type='submit' disabled={isLoading}>
            Sign In 1
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <button
        type='button'
        onClick={() => {
          setIsGoogleLoading(true);
          signIn('google', {
            redirect: true,
            callbackUrl: searchParams?.get('callbackUrl') || '/'
          });
        }}
        disabled={isLoading || isGoogleLoading}>
        {isGoogleLoading ? (
          <FaSpinner />
        ) : (
          <Image
            src='https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png'
            width={16}
            height={16}
            alt='google icon'
            className='mr-2'
          />
        )}{' '}
        google
      </button>
      <button
        type='button'
        onClick={() => {
          setIsGoogleLoading(true);
          signIn('github', {
            redirect: true,
            callbackUrl: searchParams?.get('callbackUrl') || '/'
          });
        }}
        disabled={isLoading || isGoogleLoading}>
        {isGoogleLoading ? (
          <FaSpinner />
        ) : (
          <Image
            src='https://cdn.iconscout.com/icon/free/png-256/github-154-675675.png'
            width={16}
            height={16}
            alt='github icon'
            className='mr-2'
          />
        )}{' '}
        github
      </button>
    </div>
  );
}
