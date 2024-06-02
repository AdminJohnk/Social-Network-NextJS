import Divider from '@/components/shared/Divider';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { getImageURL, truncateText } from '@/lib/utils';
import { Link } from '@/navigation';
import { IAllQuestionItem } from '@/types';
import { Avatar } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { FaCheck } from 'react-icons/fa';

export interface IQuestionSummaryItemProps {
  question: IAllQuestionItem;
}

export default function QuestionSummaryItem({ question }: IQuestionSummaryItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const text = truncateText(question.text, 170);

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
      <div className='flex gap-3'>
        <div className='text-[0.8rem] text-right w-[20%] space-y-1'>
          <div>
            {format.number(question.vote_score, { notation: 'compact' }) +
              ' ' +
              t('votes', { count: question.vote_score })}
          </div>
          <div className='flex-end'>
            <div className='flex-start gap-1 px-2 py-1 bg-green-400 dark:bg-green-500 text-black rounded-lg'>
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
            className='text-[1rem] cursor-pointer text-blue-500 hover:text-blue-400 duration-300 mb-2 line-clamp-1'>
            {question.title}
          </Link>
          <div className='text-[0.8rem]'>
            <ShowContent content={text} className='*:line-clamp-2' />
          </div>
          <div className='mt-2'>
            <div className='flex-start gap-2'>
              {question.hashtags.map((tag, index) => (
                <span key={index} className='tag px-1 bg-1 rounded-md'>
                  {tag}
                </span>
              ))}
            </div>
            <div className='mt-3 flex-end text-[0.8rem] gap-1'>
              <Avatar sx={{ width: 17, height: 17 }} src={getImageURL(question.user.user_image)} />
              <Link
                href={`/users/${question.user._id}`}
                className='text-blue-500 hover:text-blue-400 duration-300'>
                {question.user.name}
              </Link>
              <span className='text-text-2'>{t('asked')}</span>
              <span className='text-text-2'>{getFormattedDate(question.createdAt)}</span>
              <span className='text-text-2'>{t('at1')}</span>
              <span className='text-text-2'>
                {format.dateTime(new Date(question.createdAt), {
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Divider className='my-4' />
    </div>
  );
}
