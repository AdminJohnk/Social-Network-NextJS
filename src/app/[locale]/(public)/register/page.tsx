import RegisterForm from '@/components/Form/RegisterForm';
import Image from 'next/image';
import React from 'react';

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  return (
    <div className='w-full h-dvh relative'>
      <div className='w-full h-full'>
        <Image
          src='/images/backgroundLogin.webp'
          className='w-full h-full object-cover '
          width={2000}
          height={2000}
          alt='Login Background'
          priority
        />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r opacity-80 from-slate-200 via-slate-400 dark:from-[black] dark:via-[#131313]' />
      <div className='w-full h-full absolute top-0 left-0 flex-start'>
        <RegisterForm className='w-[420px] px-[10%] box-content mt-4' />
      </div>
    </div>
  );
}
