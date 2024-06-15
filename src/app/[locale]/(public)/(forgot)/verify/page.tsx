import VerifyCodeForm from '@/components/Form/VerifyCodeForm';
import { redirect } from '@/navigation';
import { authService } from '@/services/AuthService';

export interface IVerifyProps {
  searchParams: {
    email: string;
    code: string;
  };
}

export default async function Verify({ searchParams: { email, code } }: IVerifyProps) {
  if (!email) redirect('/forgot-password');

  await authService.checkVerifyCode({ email }).catch(() => {
    redirect('/forgot-password');
  });

  return <VerifyCodeForm searchParams={{ email, code }} />;
}
