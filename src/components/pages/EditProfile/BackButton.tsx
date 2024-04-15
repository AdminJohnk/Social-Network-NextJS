import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

export interface IBackButtonProps {}

export default function BackButton(props: IBackButtonProps) {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div>
      <Button variant='ghost'>
        <IoArrowBack size={18} />
        <span className='small-medium lg:base-medium' onClick={() => router.back()}>
          {t('Back')}
        </span>
      </Button>
    </div>
  );
}
