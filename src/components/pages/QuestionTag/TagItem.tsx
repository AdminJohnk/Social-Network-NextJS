import { IAllTagQuestionItem } from '@/types';
import { useTranslations } from 'next-intl';

export interface ITagItemProps {
  tag: IAllTagQuestionItem;
}

export default function TagItem({ tag }: ITagItemProps) {
  const t = useTranslations();
  return (
    <>
      {!tag ? (
        <></>
      ) : (
        <div className='border border-border-1 px-3 py-4 rounded-md'>
          <div className='flex-between'>
            <span className='px-2 py-1 bg-1 rounded-md font-semibold'>
              {tag.name}
            </span>
            <div>{tag.question_number + ' ' + t('questions')}</div>
          </div>
          <div className='mt-3'>
            {tag.number_today +
              ' ' +
              t('asked today') +
              ', ' +
              tag.number_this_week +
              ' ' +
              'this week'}
          </div>
        </div>
      )}
    </>
  );
}
