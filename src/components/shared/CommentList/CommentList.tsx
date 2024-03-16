import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';

import CommentItem from './CommentItem';

export interface ICommentListProps {}

export default function CommentList(props: ICommentListProps) {
  const t = useTranslations();

  return (
    <div>
      <div className='*:mb-3'>
        <CommentItem />
        <CommentItem />
      </div>
      <div className='flex-start text-text-3 cursor-pointer hover:text-primary-500 duration-300'>
        <IoIosArrowDown />
        <span className='ms-3'>{t('More Comment')}</span>
      </div>
    </div>
  );
}
