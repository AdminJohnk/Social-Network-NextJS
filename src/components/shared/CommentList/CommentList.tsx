import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';

import CommentItem from './CommentItem';
import { usePostData } from '@/hooks/query';

export interface ICommentListProps {
  postID: string;
}

export default function CommentList({ postID }: ICommentListProps) {
  const t = useTranslations();

  const { post } = usePostData(postID);

  return (
    <div>
      <div className='*:mb-3'>
        {post?.post_attributes?.comments?.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </div>
      {post?.post_attributes?.comments?.length! > 2 && (
        <div className='flex-start text-text-3 cursor-pointer hover:text-primary-500 duration-300'>
          <IoIosArrowDown />
          <span className='ms-3'>{t('More Comment')}</span>
        </div>
      )}
    </div>
  );
}
