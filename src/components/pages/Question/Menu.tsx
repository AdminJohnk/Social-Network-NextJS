import { cn } from '@/lib/utils';
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
      <div className={cn(currentMenu === 'question' && 'bg-foreground-2')}>
        <BsQuestionCircleFill className='size-5' />
        <span>{t('Questions')}</span>
      </div>
      <div>
        <IoPricetags className='size-5' />
        <span>{t('Tags')}</span>
      </div>
      <div>
        <FaBookmark className='size-5' />
        <span>{t('Saves')}</span>
      </div>
    </div>
  );
}
