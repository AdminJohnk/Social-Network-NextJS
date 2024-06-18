'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useRouter } from '@/navigation';
import { FiAlertCircle } from 'react-icons/fi';

interface IPostManagementProps {}

export default function PostManagement({}: IPostManagementProps) {
  const router = useRouter();

  const { currentUserInfo } = useCurrentUserInfo();

  if (!currentUserInfo.role.some((role) => role === '0101'))
    return (
      <section className='flex-center size-full'>
        <Alert variant='destructive' className='w-fit'>
          <FiAlertCircle className='h-4 w-4' />
          <AlertTitle>Unauthorized Access</AlertTitle>
          <AlertDescription>You are not authorized to access this page.</AlertDescription>
        </Alert>
      </section>
    );

  return <div></div>;
}
