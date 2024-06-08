import { useTranslations } from 'next-intl';

export interface IRelatedQuestionsProps {
  questionID?: string;
}

export default function RelatedQuestions({ questionID }: IRelatedQuestionsProps) {
  const t = useTranslations();

  return questionID ? null : (
    <div>
      <div className='h4-regular'>{t('Related Questions')}</div>
      <div className='*:flex-start mt-4 *:mb-2 *:cursor-pointer *:gap-3 *:text-[0.8rem]'>
        <div>
          <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>250</span>
          <div className='text-blue-400 duration-300 hover:text-blue-500'>
            Why is processing a sorted array slower than an unsorted array?
          </div>
        </div>
        <div>
          <span className='min-w-10 rounded-md bg-foreground-2 px-2 py-1 text-center'>6</span>
          <div className='text-blue-400 duration-300 hover:text-blue-500'>
            Complexity of comparison operators
          </div>
        </div>
        <div>
          <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>137</span>
          <div className='text-blue-400 duration-300 hover:text-blue-500'>
            Why is printing B dramatically slower than printing #?
          </div>
        </div>
      </div>
    </div>
  );
}
