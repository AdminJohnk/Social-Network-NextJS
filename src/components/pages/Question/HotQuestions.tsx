import { Link } from '@/navigation';
import { Skeleton } from '@mui/material';
import { useGetHotQuestions } from '@/hooks/query';
import { useTranslations } from 'next-intl';

export interface IHotQuestionsProps {}

export default function HotQuestions({}: IHotQuestionsProps) {
  const t = useTranslations();

  const { hotQuestions, isLoadingHotQuestions } = useGetHotQuestions();

  return (
    <div>
      <div className='h4-regular'>{t('Hot Questions')}</div>
      <div className='*:flex-start mt-4 *:mb-2 *:cursor-pointer *:gap-3 *:text-[0.8rem]'>
        {isLoadingHotQuestions
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <Skeleton className='!bg-foreground-1' variant='text' width={50} height={40} />
                <Skeleton className='!bg-foreground-1' variant='text' width={250} height={40} />
              </div>
            ))
          : hotQuestions.map((question, index) => (
              <Link key={index} href={`/questions/${question._id}`}>
                <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                  {question.vote_score}
                </span>
                <div className='line-clamp-2 text-blue-400 duration-300 hover:text-blue-500'>
                  {question.title}
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
