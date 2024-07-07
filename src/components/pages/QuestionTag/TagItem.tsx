import { Link } from '@/navigation';
import { IAllTagQuestionItem } from '@/types';
import { useFormatter, useTranslations } from 'next-intl';

export interface ITagItemProps {
  tag: IAllTagQuestionItem;
}

export default function TagItem({ tag }: ITagItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <>
      {!tag ? (
        <></>
      ) : (
        <div className='rounded-md border border-border-1 px-3 py-4'>
          <div className='flex-between'>
            <Link
              href={`/questions/tags/${encodeURIComponent(tag.name)}`}
              className='bg-1 rounded-md px-2 py-1 font-semibold'>
              {tag.name}
            </Link>
            <div>
              {format.number(tag.question_number, { notation: 'compact', compactDisplay: 'long' }) +
                ' ' +
                t('questions', { count: tag.question_number })}
            </div>
          </div>
          <div className='mt-3'>
            {tag.number_today + ' ' + t('asked today') + ', ' + tag.number_this_week + ' ' + t('this week')}
          </div>
        </div>
      )}
    </>
  );
}
