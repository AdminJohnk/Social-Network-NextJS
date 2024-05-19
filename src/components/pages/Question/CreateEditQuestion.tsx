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
import { useCreateQuestion } from '@/hooks/mutation';
import { useRouter } from '@/navigation';

export interface ICreateEditQuestionProps {
  handleClose: () => void;
  dataEdit?: any;
}

export default function CreateEditQuestion({
  handleClose,
  dataEdit
}: ICreateEditQuestionProps) {
  const t = useTranslations();
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [editorProblem, setEditorProblem] = useState<EditorProps>();
  const [editorExpect, setEditorExpect] = useState<EditorProps>();
  const [hashTagList, setHashTagList] = useState<string[]>([]);

  const { mutateCreateQuestion, isLoadingCreateQuestion } = useCreateQuestion();

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
      showErrorToast(
        t('Expectation description must be at least 20 characters')
      );
      return;
    } else if (hashTagList.length === 0) {
      showErrorToast(t('Hashtag is required'));
      return;
    }
    if (!dataEdit) {
      mutateCreateQuestion(
        {
          title,
          problem: editorProblem?.getText() as string,
          expect: editorExpect?.getText() as string,
          hashtags: hashTagList
        },
        {
          onSuccess: data => {
            // router.push(`/questions/${data._id}`);
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
    }
  };

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[800px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>
          {!dataEdit ? t('Ask a public question') : t('Edit question')}
        </h2>
      </div>

      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 pt-4 pb-6 *:mt-7'>
        <div className='relative !mt-3'>
          <InputStyle
            label={t('Title')}
            defaultValue={dataEdit?.title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <div className='base-semibold mb-3 text-text-2'>
            What are the details of your problem?
          </div>
          <div className='editor space-y-5 border border-border-1'>
            <Editor
              setEditor={setEditorProblem}
              placeholder={t(
                'Introduce the problem and expand on what you put in the title. Minimum 20 characters'
              )}
              content={dataEdit?.introduction || ''}
              autofocus={false}
            />
          </div>
        </div>
        <div>
          <div className='base-semibold mb-3 text-text-2'>
            What did you try and what were you expecting?
          </div>
          <div className='editor space-y-5 border border-border-1'>
            <Editor
              setEditor={setEditorExpect}
              placeholder={t(
                'Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters '
              )}
              content={dataEdit?.introduction || ''}
              autofocus={false}
            />
          </div>
        </div>
        <div className='relative'>
          <InputStyle
            label='Hashtag to describe your problem'
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (e.currentTarget.value.includes(' ')) {
                  showErrorToast(t('Hashtag cannot contain spaces'));
                  return;
                } else if (hashTagList.includes(e.currentTarget.value)) {
                  showErrorToast(t('Hashtag already exists'));
                  return;
                } else if (!/^[a-zA-Z0-9_-]*$/.test(e.currentTarget.value)) {
                  showErrorToast(
                    t(
                      'Hashtag can only contain letters, numbers, underscores, and hyphens'
                    )
                  );
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
            <span
              key={index}
              className='hashtag px-3 py-1.5 bg-1 flex-start rounded-full'
            >
              <PiHashLight className='size-4 me-1' />
              <span>{tag}</span>
              <IoMdClose
                className='size-4 ms-1 hover:text-red-500 duration-300'
                onClick={() => {
                  const newHashTagList = hashTagList.filter(
                    (_, i) => i !== index
                  );
                  setHashTagList(newHashTagList);
                }}
              />
            </span>
          ))}
        </div>
      </div>
      <div className='p-5 flex-end'>
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn(
              'button lg:px-6 text-white max-md:flex-1',
              isLoadingCreateQuestion && 'select-none'
            )}
            disabled={isLoadingCreateQuestion}
            onClick={handleSubmit}
          >
            {isLoadingCreateQuestion && (
              <CircularProgress size={20} className='!text-text-1 mr-2' />
            )}
            {dataEdit ? t('Update') : t('Create')}
            <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
