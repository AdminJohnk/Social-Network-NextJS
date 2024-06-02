import { useState } from 'react';
import Editor from '@/components/shared/Editor/Editor';
import { InputStyle } from '@/components/shared/InputStyle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Editor as EditorProps } from '@tiptap/react';
import { PiHashLight } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCreateQuestion, useUpdateQuestion } from '@/hooks/mutation';
import { useRouter } from '@/navigation';
import { IQuestion } from '@/types';

export interface ICreateEditQuestionProps {
  handleClose: () => void;
  dataEdit?: IQuestion;
}

export default function CreateEditQuestion({ handleClose, dataEdit }: ICreateEditQuestionProps) {
  const t = useTranslations();
  const router = useRouter();

  const [title, setTitle] = useState<string>(dataEdit?.title || '');
  const [editorProblem, setEditorProblem] = useState<EditorProps>();
  const [editorExpect, setEditorExpect] = useState<EditorProps>();
  const [hashTagList, setHashTagList] = useState<string[]>(dataEdit?.hashtags || []);

  const { mutateCreateQuestion, isLoadingCreateQuestion } = useCreateQuestion();
  const { mutateUpdateQuestion, isLoadingUpdateQuestion } = useUpdateQuestion();

  const handleSubmit = async () => {
    if (!title) {
      showErrorToast(t('Title is required'));
      return;
    } else if (!editorProblem?.getText().trim()) {
      showErrorToast(t('Problem description is required'));
      return;
    } else if (editorProblem?.getText().trim().length < 20) {
      showErrorToast(t('Problem description must be at least 20 characters'));
      return;
    } else if (!editorExpect?.getText().trim()) {
      showErrorToast(t('Expectation description is required'));
      return;
    } else if (editorExpect?.getText().trim().length < 20) {
      showErrorToast(t('Expectation description must be at least 20 characters'));
      return;
    } else if (hashTagList.length === 0) {
      showErrorToast(t('Hashtag is required'));
      return;
    }
    if (!dataEdit) {
      mutateCreateQuestion(
        {
          title,
          problem: editorProblem?.getHTML() as string,
          expect: editorExpect?.getHTML() as string,
          text: (editorProblem?.getText() as string) + ' ' + editorExpect?.getText(),
          hashtags: hashTagList
        },
        {
          onSuccess: (data) => {
            router.push(`/questions/${data._id}`);
            showSuccessToast(t('Question created successfully'));
            editorProblem?.commands.clearContent();
            editorExpect?.commands.clearContent();
            handleClose();
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          }
        }
      );
    } else {
      mutateUpdateQuestion(
        {
          id: dataEdit._id,
          title,
          problem: editorProblem?.getHTML() as string,
          expect: editorExpect?.getHTML() as string,
          text: (editorProblem?.getText() as string) + ' ' + editorExpect?.getText(),
          hashtags: hashTagList
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Question updated successfully'));
            editorProblem?.commands.clearContent();
            editorExpect?.commands.clearContent();
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
    <div className='relative mx-auto w-[800px] animate-fade-up rounded-lg bg-background-1 shadow-xl'>
      <div className='mb-0 border-b border-border-1 py-4 text-center'>
        <h2 className='text-sm font-medium text-text-1'>
          {!dataEdit ? t('Ask a public question') : t('Edit question')}
        </h2>
      </div>

      <div className='custom-scrollbar-bg max-h-[500px] overflow-y-scroll px-5 pb-6 pt-4 *:mt-7'>
        <div className='relative !mt-3'>
          <InputStyle
            label={t('Title')}
            defaultValue={dataEdit?.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <div className='base-semibold mb-3 text-text-2'>{t('What are the details of your problem')}?</div>
          <div className='editor space-y-5 border border-border-1'>
            <Editor
              setEditor={setEditorProblem}
              placeholder={
                t('Introduce the problem and expand on what you put in the title') +
                '. ' +
                t('Minimum 20 characters')
              }
              content={dataEdit?.problem || ''}
              autofocus={false}
            />
          </div>
        </div>
        <div>
          <div className='base-semibold mb-3 text-text-2'>
            {t('What did you try and what were you expecting')}?
          </div>
          <div className='editor space-y-5 border border-border-1'>
            <Editor
              setEditor={setEditorExpect}
              placeholder={
                t('Describe what you tried, what you expected to happen, and what actually resulted') +
                '. ' +
                t('Minimum 20 characters')
              }
              content={dataEdit?.expect || ''}
              autofocus={false}
            />
          </div>
        </div>
        <div className='relative'>
          <InputStyle
            label={t('Hashtag to describe your problem (Press Enter each hashtag)')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (e.currentTarget.value.includes(' ')) {
                  showErrorToast(t('Hashtag cannot contain spaces'));
                  return;
                } else if (hashTagList.includes(e.currentTarget.value)) {
                  showErrorToast(t('Hashtag already exists'));
                  return;
                } else {
                  setHashTagList([...hashTagList, e.currentTarget.value]);
                  e.currentTarget.value = '';
                }
              }
            }}
          />
        </div>
        <div className='render-hashtag flex-start flex-wrap gap-3'>
          {hashTagList.map((tag, index) => (
            <span key={index} className='hashtag bg-1 flex-start rounded-full px-3 py-1.5'>
              <PiHashLight className='me-1 size-4' />
              <span>{tag}</span>
              <IoMdClose
                className='ms-1 size-4 duration-300 hover:text-red-500'
                onClick={() => {
                  const newHashTagList = hashTagList.filter((_, i) => i !== index);
                  setHashTagList(newHashTagList);
                }}
              />
            </span>
          ))}
        </div>
      </div>
      <div className='flex-end p-5'>
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn(
              'button text-white max-md:flex-1 lg:px-6',
              (isLoadingCreateQuestion || isLoadingUpdateQuestion) && 'select-none'
            )}
            disabled={isLoadingCreateQuestion || isLoadingUpdateQuestion}
            onClick={handleSubmit}>
            {(isLoadingCreateQuestion || isLoadingUpdateQuestion) && (
              <CircularProgress size={20} className='mr-2 !text-text-1' />
            )}
            {dataEdit ? t('Update') : t('Create')}
            <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
