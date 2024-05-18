import { useState } from 'react';
import Editor from '@/components/shared/Editor/Editor';
import { Editor as EditorProps } from '@tiptap/react';
import { IoMdSend } from 'react-icons/io';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useReplyCommentPostSeries } from '@/hooks/mutation';

export interface IReplyCommentProps {
  setIsReplyComment: (isReplyComment: boolean) => void;
  series_id: string;
  post_id: string;
  comment_id: string;
}

export default function ReplyComment({
  setIsReplyComment,
  series_id,
  post_id,
  comment_id
}: IReplyCommentProps) {
  const t = useTranslations();

  const { mutateReplyCommentPostSeries } = useReplyCommentPostSeries();

  const [editor, setEditor] = useState<EditorProps>();

  const [isLoadingReplyComment, setIsLoadingReplyComment] =
    useState<boolean>(false);

  const handleReplyComment = () => {
    setIsLoadingReplyComment(true);
    mutateReplyCommentPostSeries(
      {
        series_id: series_id,
        post_id: post_id,
        comment_id: comment_id,
        content: editor?.getHTML() as string
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Reply comment successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled: () => {
          editor?.commands.clearContent();
          setIsReplyComment(false);
          setIsLoadingReplyComment(false);
        }
      }
    );
  };

  return (
    <div>
      <Editor setEditor={setEditor} />
      <div className='flex-between'>
        <div
          className='text-blue-500 hover:text-blue-600 duration-300 small-regular cursor-pointer px-1'
          onClick={() => setIsReplyComment(false)}
        >
          {t('Cancel')}
        </div>
        <div className='flex-start gap-2'>
          <IoMdSend
            className={cn(
              'size-5 text-blue-500 hover:text-blue-600 duration-300 cursor-pointer',
              isLoadingReplyComment && 'select-none'
            )}
            onClick={() => handleReplyComment()}
          />
          {isLoadingReplyComment && (
            <CircularProgress size={20} className='!text-text-1 mr-2' />
          )}
        </div>
      </div>
    </div>
  );
}
