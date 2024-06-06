import Divider from '@/components/shared/Divider';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { getImageURL, truncateText } from '@/lib/utils';
import { Link } from '@/navigation';
import { IQuestionSummaryItem } from '@/types';
import { Avatar } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { FaCheck } from 'react-icons/fa';

export interface IQuestionSummaryItemProps {
  question: IQuestionSummaryItem;
}

export default function QuestionSummaryItem({ question }: IQuestionSummaryItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const text = question.text && truncateText(question.text, 170);

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      dateStyle: 'long',
      timeStyle: 'short'
    });
  };

  return (
    <div>
      <div className='flex gap-3'>
        <div className='w-[20%] space-y-1 text-right text-[0.8rem]'>
          <div>
            {format.number(question.vote_score, { notation: 'compact' }) +
              ' ' +
              t('votes', { count: question.vote_score })}
          </div>
          <div className='flex-end'>
            <div className='flex-start gap-1 rounded-lg bg-green-400 px-2 py-1 text-black dark:bg-green-500'>
              <FaCheck className='size-3' />
              <span>
                {format.number(question.answer_number, { notation: 'compact' }) +
                  ' ' +
                  t('answers', { count: question.answer_number })}
              </span>
            </div>
          </div>
          <div>
            {format.number(question.view, { notation: 'compact' }) +
              ' ' +
              t('views', { count: question.view })}
          </div>
        </div>
        <div className='w-[80%]'>
          <Link
            href={`/questions/${question._id}`}
            className='mb-2 line-clamp-1 cursor-pointer text-[1rem] text-blue-500 duration-300 hover:text-blue-400'>
            {question.title}
          </Link>
          <div className='text-[0.8rem]'>
            <ShowContent content={text} className='*:line-clamp-2' />
          </div>
          <div className='mt-2'>
            <div className='flex-start gap-2'>
              {question.hashtags.map((tag, index) => (
                <span key={index} className='tag bg-1 rounded-md px-1'>
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex-end mt-3 gap-1 text-[0.8rem]'>
              <Avatar sx={{ width: 17, height: 17 }} src={getImageURL(question.user.user_image)} />
              <Link
                href={`/users/${question.user._id}`}
                className='text-blue-500 duration-300 hover:text-blue-400'>
                {question.user.name}
              </Link>
              <span className='text-text-2'>{t('asked')}</span>
              <span className='text-text-2'>{getFormattedDate(question.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
      <Divider className='my-4' />
    </div>
  );
}
