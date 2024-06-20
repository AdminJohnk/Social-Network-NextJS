'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { showErrorToast } from '@/components/ui/toast';
import { useVerifyCode } from '@/hooks/mutation';
import { useRouter } from '@/navigation';
import { ErrorResponse } from '@/types';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { FaSpinner } from 'react-icons/fa';

export interface IVerifyProps {
  searchParams: {
    email: string;
    code: string;
  };
}

export default function VerifyCodeForm({ searchParams: { email, code: fakeCode } }: IVerifyProps) {
  const t = useTranslations();
  const router = useRouter();

  const { mutateVerifyCode, isLoadingVerifyCode } = useVerifyCode();

  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (code === fakeCode) {
      showErrorToast(t('Are you dumb?'));
    }
    mutateVerifyCode(
      { email, code },
      {
        onSuccess: () => {
          router.push(
            `/reset-password?email=${email}&code=${Math.floor(
              Math.random() * 1000000
            )}&note=codetrongemailchukhongphaicodenaydaunehihi`
          );
        },
        onError: (error) => {
          if ((error as ErrorResponse).response.data.message === 'Invalid code') {
            showErrorToast(t('Invalid code! Please try again!'));
          } else {
            showErrorToast(t('Something went wrong! Please try again!'));
          }
          console.log(error);
        }
      }
    );
  };

  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [countdown]);

  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const handleResendOTP = () => {
    if (!isResendDisabled) {
      setCode('');
      // dispatch(FORGOT_PASSWORD_SAGA({ email: email! }));

      // Disable the resend button
      setIsResendDisabled(true);

      // Enable the resend button after 60 seconds
      setTimeout(() => {
        setIsResendDisabled(false);
      }, 60000); // 60000 milliseconds = 60 seconds

      setCountdown(60);
    }
  };

  const isNotFullCode = code.length !== 8;

  return (
    <div className='pt-20'>
      <div className='mx-auto max-w-lg rounded border'>
        <div className='px-4 py-6 shadow-md'>
          <div className='mb-6 flex justify-center gap-2'>
            <InputOTP
              maxLength={8}
              value={code}
              onChange={setCode}
              inputMode='text'
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <Button onClick={handleSubmit} disabled={isLoadingVerifyCode || isNotFullCode}>
              {isLoadingVerifyCode && <FaSpinner className='mr-2 animate-spin' />}
              {t('Verify')}
            </Button>
            <Button variant='main' onClick={handleResendOTP} disabled={isResendDisabled}>
              {t('Resend OTP')} {isResendDisabled ? '(' + countdown + 's)' : ''}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
