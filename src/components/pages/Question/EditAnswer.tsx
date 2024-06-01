import { useState } from 'react';
import Editor from '@/components/shared/Editor/Editor';
import { IAnswerQuestion } from '@/types';
import { useTranslations } from 'next-intl';
import { Editor as EditorProps } from '@tiptap/react';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';
import { useUpdateAnswer } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IEditAnswerProps {
  handleClose: () => void;
  answer: IAnswerQuestion;
  questionID: string;
}

export default function EditAnswer({
  handleClose,
  answer,
  questionID
}: IEditAnswerProps) {
  const t = useTranslations();

  const [editor, setEditor] = useState<EditorProps>();

  const { mutateUpdateAnswer, isLoadingUpdateAnswer } = useUpdateAnswer();

  const handleUpdateAnswer = () => {
    const content = editor?.getHTML() as string;
    if (!content) {
      return;
    }
    mutateUpdateAnswer(
      {
        answer_id: answer._id,
        question_id: questionID,
        content: editor?.getHTML() as string
      },
      {
        onSuccess: () => {
          editor?.commands.clearContent();
          showSuccessToast(t('Comment deleted successfully!'));
          handleClose();
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };
  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[800px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>
          {t('Edit your answer')}
        </h2>
      </div>
      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 pt-4 pb-10 *:mt-7'>
        <div className='px-2 py-3 border border-border-1 rounded-lg'>
          <Editor
            content={answer.content}
            autofocus={true}
            setEditor={setEditor}
          />
        </div>
      </div>
      <div className='px-5 pb-5 flex justify-end items-center'>
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn(
              'button lg:px-6 text-white max-md:flex-1',
              isLoadingUpdateAnswer && 'select-none'
            )}
            disabled={isLoadingUpdateAnswer}
            onClick={handleUpdateAnswer}
          >
            {isLoadingUpdateAnswer && (
              <CircularProgress size={20} className='!text-text-1 mr-2' />
            )}
            {t('Update Answer')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
