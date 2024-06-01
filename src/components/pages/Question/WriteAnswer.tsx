import { Editor as EditorProps } from '@tiptap/react';
import Editor from '@/components/shared/Editor/Editor';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useAnswerQuestion } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IWriteAnswerProps {
  questionID: string;
}

export default function WriteAnswer({ questionID }: IWriteAnswerProps) {
  const t = useTranslations();
  const [editor, setEditor] = useState<EditorProps>();

  const { mutateAnswerQuestion, isLoadingAnswerQuestion } = useAnswerQuestion();

  const handlePostAnswer = () => {
    const content = editor?.getText().trim() as string;
    if (!content) {
      showErrorToast(t('Please write your answer'));
      return;
    }
    mutateAnswerQuestion(
      { question_id: questionID, content },
      {
        onSuccess: () => {
          editor?.commands.clearContent();
          showSuccessToast(t('Comment deleted successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  return (
    <div>
      <div className='h4-regular my-5'>{t('Your Answer')}</div>
      <div className='px-2 py-3 border border-border-1 rounded-lg'>
        <Editor setEditor={setEditor} autofocus={false} />
      </div>
      <div className='mt-3'>
        <Button
          className={cn(isLoadingAnswerQuestion && 'select-none')}
          disabled={isLoadingAnswerQuestion}
          onClick={handlePostAnswer}
        >
          {isLoadingAnswerQuestion && (
            <CircularProgress size={20} className='!text-text-1 mr-2' />
          )}
          {t('Post Your Answer')}
        </Button>
      </div>
    </div>
  );
}
