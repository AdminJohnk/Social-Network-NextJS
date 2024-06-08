import { useGetRelatedQuestions } from '@/hooks/query';
import { useTranslations } from 'next-intl';
import { Skeleton } from '@mui/material';
import Divider from '@/components/shared/Divider';

export interface IRelatedQuestionsProps {
  questionID?: string;
}

export default function RelatedQuestions({ questionID }: IRelatedQuestionsProps) {
  const t = useTranslations();

  const { isLoadingRelatedQuestions, relatedQuestions } = useGetRelatedQuestions(questionID || '');

  return !questionID ? null : (
    <>
      <Divider className='my-4' />
      <div>
        <div className='h4-regular'>{t('Related Questions')}</div>
        <div className='*:flex-start mt-4 *:mb-2 *:cursor-pointer *:gap-3 *:text-[0.8rem]'>
          {isLoadingRelatedQuestions
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <Skeleton className='!bg-foreground-1' variant='text' width={50} height={40} />
                  <Skeleton className='!bg-foreground-1' variant='text' width={250} height={40} />
                </div>
              ))
            : relatedQuestions.map((question, index) => (
                <div key={index}>
                  <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                    {question.vote_score}
                  </span>
                  <div className='line-clamp-2 text-blue-400 duration-300 hover:text-blue-500'>
                    {question.title}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
