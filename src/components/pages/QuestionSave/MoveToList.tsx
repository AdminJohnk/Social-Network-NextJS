import { InputStyle } from '@/components/shared/InputStyle';
import { Button } from '@/components/ui/button';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useMoveToListQuestion } from '@/hooks/mutation';
import { cn } from '@/lib/utils';
import { CircularProgress } from '@mui/material';
import { Select } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export interface IMoveToListProps {
  handleClose: () => void;
  list_name: string[] | undefined;
  from: 'all_save';
  questionID: string;
}

export default function MoveToList({ handleClose, from, list_name, questionID }: IMoveToListProps) {
  const t = useTranslations();

  const [listName, setListName] = useState(list_name && list_name[0]);

  const { mutateMoveToListQuestion, isLoadingMoveToListQuestion } = useMoveToListQuestion();

  const handleSubmit = () => {
    if (!listName) {
      showErrorToast(t('Please select a list'));
      return;
    }
    mutateMoveToListQuestion(
      {
        from,
        to: listName,
        question_id: questionID
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Question moved successfully'));
          handleClose();
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  return (
    <div className='relative mx-auto w-[300px] animate-fade-up rounded-lg bg-background-1 shadow-xl'>
      <div className='mb-0 border-b border-border-1 py-4 text-center'>
        <h2 className='text-sm font-medium text-text-1'>{t('Move to')}</h2>
      </div>
      <div className='mt-2 px-5 pt-4'>
        <Select
          required
          className='ms-1 grow *:*:!bg-transparent *:*:!ring-transparent'
          onChange={(e) => setListName(e.target.value)}>
          {list_name &&
            list_name.map((list, index) => (
              <option key={index} value={list} className='bg-foreground-1'>
                {list}
              </option>
            ))}
        </Select>
      </div>
      <div className='flex items-center justify-end p-5'>
        <div className='flex items-center gap-2'>
          <Button
            variant={'destructive'}
            className={cn(isLoadingMoveToListQuestion && 'select-none')}
            disabled={isLoadingMoveToListQuestion}
            onClick={() => handleClose()}>
            {t('Cancel')}
          </Button>
          <Button
            type='button'
            className={cn(
              'button text-white max-md:flex-1 lg:px-6',
              isLoadingMoveToListQuestion && 'select-none'
            )}
            disabled={isLoadingMoveToListQuestion}
            onClick={handleSubmit}>
            {isLoadingMoveToListQuestion && <CircularProgress size={20} className='mr-2 !text-text-1' />}
            {t('Move')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
