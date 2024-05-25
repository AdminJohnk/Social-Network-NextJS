import { Editor as EditorProps } from '@tiptap/react';
import Editor from '@/components/shared/Editor/Editor';
import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export interface IWriteAnswerProps {}

export default function WriteAnswer(props: IWriteAnswerProps) {
  const t = useTranslations();
  const [editor, setEditor] = useState<EditorProps>();

  const [isLoading, setIsloading] = useState<boolean>(false);

  const handlePostAnswer = () => {};

  return (
    <div>
      <div className='h4-regular my-5'>Your Answer</div>
      <div className='px-2 py-3 border border-border-1 rounded-lg'>
        <Editor setEditor={setEditor} />
      </div>
      <div className='mt-3'>
        <Button
          className={cn(isLoading && 'select-none')}
          disabled={isLoading}
          onClick={handlePostAnswer}
        >
          {isLoading && (
            <CircularProgress size={20} className='!text-text-1 mr-2' />
          )}
          {t('Post Your Answer')}
        </Button>
      </div>
    </div>
  );
}
