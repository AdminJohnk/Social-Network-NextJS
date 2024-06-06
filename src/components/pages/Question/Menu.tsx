import { useCurrentUserInfo, useGetReputation } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa6';
import { IoPricetags } from 'react-icons/io5';

export interface IMenuProps {
  currentMenu: string;
}

export default function Menu({ currentMenu }: IMenuProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { reputation, isLoadingReputation } = useGetReputation(currentUserInfo?._id);

  return (
    <div>
      {!isLoadingReputation && (
        <div className='mb-3'>Reputation: {reputation.reputation + ` (level ${reputation.level})`}</div>
      )}
      <div className='*:flex-start *:mb-1 *:cursor-pointer *:gap-3 *:rounded-lg *:px-2 *:py-2 *:duration-300 hover:*:bg-foreground-2'>
        <Link href={'/questions'} className={cn(currentMenu === 'question' && 'bg-foreground-2')}>
          <BsQuestionCircleFill className='size-5' />
          <span>{t('Questions')}</span>
        </Link>
        <Link href={'/questions/tags'}>
          <IoPricetags className='size-5' />
          <span>{t('Tags')}</span>
        </Link>
        <Link href={'/questions/saves'}>
          <FaBookmark className='size-5' />
          <span>{t('Saves')}</span>
        </Link>
      </div>
    </div>
  );
}
