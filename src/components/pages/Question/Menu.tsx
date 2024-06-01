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

  return (
    <div className='*:flex-start *:gap-3 *:px-2 *:py-2 *:rounded-lg hover:*:bg-foreground-2 *:duration-300 *:cursor-pointer *:mb-1'>
      <Link
        href={'/questions'}
        className={cn(currentMenu === 'question' && 'bg-foreground-2')}
      >
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
  );
}
