import ResetPasswordForm from '@/components/Form/ResetPasswordForm';
import { redirect } from '@/navigation';
import { authService } from '@/services/AuthService';

export interface IResetPasswordProps {
  searchParams: {
    email: string;
  };
}

export default async function ResetPassword({ searchParams: { email } }: IResetPasswordProps) {
  if (!email) redirect('/forgot-password');

  await authService.checkResetPassword({ email }).catch(() => {
    redirect('/forgot-password');
  });

  return <ResetPasswordForm searchParams={{ email }} />;
}
