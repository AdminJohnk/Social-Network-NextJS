import { cn } from '@/lib/utils';
import { InputStyle } from '@/components/shared/InputStyle';
import { Button } from '@/components/ui/button';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCreateNewListQuestion, useUpdateNameListQuestion } from '@/hooks/mutation';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export interface INewListProps {
  handleClose: () => void;
  dataEdit?: {
    listNameCurrent: string;
    setListName: (value: string) => void;
  };
}

export default function CreateEditList({ handleClose, dataEdit }: INewListProps) {
  const t = useTranslations();

  const [listName, setListName] = useState('');

  const { mutateCreateNewListQuestion, isLoadingCreateNewListQuestion } = useCreateNewListQuestion();
  const { mutateUpdateNameListQuestion, isLoadingUpdateNameListQuestion } = useUpdateNameListQuestion();

  useEffect(() => {
    if (dataEdit) {
      setListName(dataEdit.listNameCurrent);
    }
  }, [dataEdit]);

  const handleSubmit = async () => {
    // Create new list
    if (!dataEdit) {
      if (!listName) {
        showErrorToast(t('List Name is required'));
        return;
      }
      mutateCreateNewListQuestion(listName, {
        onSuccess: () => {
          showSuccessToast(t('Create List Successfully'));
          handleClose();
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      });
    }
    // Update List Name
    else {
      if (!listName) {
        showErrorToast(t('List Name is required'));
        return;
      }
      setListName(listName);
      mutateUpdateNameListQuestion(
        {
          old_name: dataEdit.listNameCurrent,
          new_name: listName
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Update List Successfully'));
            dataEdit.setListName(listName);
            handleClose();
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          }
        }
      );
    }
  };

  return (
    <div className='relative mx-auto w-[300px] animate-fade-up rounded-lg bg-background-1 shadow-xl'>
      <div className='mb-0 border-b border-border-1 py-4 text-center'>
        <h2 className='text-sm font-medium text-text-1'>
          {!dataEdit ? t('Create New List') : t('Update List')}
        </h2>
      </div>
      <div className='mt-2 px-5 pt-4'>
        <InputStyle
          label={t('List Name')}
          onChange={(e) => setListName(e.currentTarget.value)}
          defaultValue={listName}
        />
      </div>
      <div className='flex items-center justify-end p-5'>
        <div className='flex items-center gap-2'>
          <Button
            variant={'destructive'}
            className={cn(
              (isLoadingCreateNewListQuestion || isLoadingUpdateNameListQuestion) && 'select-none'
            )}
            disabled={isLoadingCreateNewListQuestion || isLoadingUpdateNameListQuestion}
            onClick={() => handleClose()}>
            {t('Cancel')}
          </Button>
          <Button
            type='button'
            className={cn(
              'button text-white max-md:flex-1 lg:px-6',
              (isLoadingCreateNewListQuestion || isLoadingUpdateNameListQuestion) && 'select-none'
            )}
            disabled={isLoadingCreateNewListQuestion || isLoadingUpdateNameListQuestion}
            onClick={handleSubmit}>
            {(isLoadingCreateNewListQuestion || isLoadingUpdateNameListQuestion) && (
              <CircularProgress size={20} className='mr-2 !text-text-1' />
            )}
            {!dataEdit ? t('Create') : t('Update')}
          </Button>
        </div>
      </div>
    </div>
  );
}
