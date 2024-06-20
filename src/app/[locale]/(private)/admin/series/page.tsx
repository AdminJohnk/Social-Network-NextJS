'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUserInfo } from '@/hooks/query';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { FiAlertCircle } from 'react-icons/fi';

interface ISeriesManagementProps {}

export default function SeriesManagement({}: ISeriesManagementProps) {
  const t = useTranslations();
  const router = useRouter();

  const { currentUserInfo } = useCurrentUserInfo();

  if (!currentUserInfo.role.some((role) => role === '0101'))
    return (
      <section className='flex-center size-full flex-col gap-4'>
        <div className='flex-center my-2 text-2xl font-bold text-text-1'>
          <FiAlertCircle className='mr-2 size-8 text-red-500' />
          {t('You are not authorized to view this page!')}
        </div>

        <Button type='button' onClick={() => router.push('/')}>
          {t('Back to Homepage')}
        </Button>
      </section>
    );

  return <div></div>;
}
