import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Editor as EditorProps } from '@tiptap/react';
import Editor from '../Editor/Editor';
import TextareaV2 from '@/components/ui/textarea-v2';
import { InputStyle, LabelStyle } from '../InputStyle';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { IoImage } from 'react-icons/io5';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import Select from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { cn } from '@/lib/utils';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import {
  useCreateSeries,
  useUploadImage,
  useUploadImages
} from '@/hooks/mutation';
import { TypeOfLevel, Visibility } from '@/types';
import PostPrivacy from '../PostPrivacy';

export interface ICreateSeriesProps {
  handleClose: () => void;
}

export default function CreateSeries({ handleClose }: ICreateSeriesProps) {
  const t = useTranslations();

  const { mutateCreateSeries } = useCreateSeries();

  const [privacy, setPrivacy] = useState<Visibility>('public');

  const [editor, setEditor] = useState<EditorProps>();
  const [images, setImages] = useState<ImageListType>([]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const levelList = ['beginner', 'intermediate', 'advanced'];
  const labelSelect = 'Select Level';
  const [level, setLevel] = useState<TypeOfLevel>('beginner');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutateUploadImage } = useUploadImage();

  const handleUploadImages = async () => {
    const formData = new FormData();
    formData.append('image', images[0].file as File);

    return await mutateUploadImage(formData);
  };

  const handleSubmit = async () => {
    console.log('title:: ', title);
    console.log('description:: ', description);
    console.log('level:: ', level);
    // console.log('cover_image:: ', imagesUploaded.key);
    console.log('introduction:: ', editor?.getHTML());
    console.log('visibility:: ', privacy);
    return;

    // setIsLoading(true);

    if (!title) {
      showErrorToast(t('Please enter a title'));
      setIsLoading(false);
      return;
    } else if (!description) {
      showErrorToast(t('Please enter a description'));
      setIsLoading(false);
      return;
    } else if (images.length === 0) {
      showErrorToast(t('Please upload a cover image'));
      setIsLoading(false);
      return;
    } else if (!level) {
      showErrorToast(t('Please select a level'));
      setIsLoading(false);
      return;
    } else if (!editor?.getText().trim()) {
      showErrorToast(t('Please enter some text!'));
      setIsLoading(false);
      return;
    }

    const imagesUploaded = await handleUploadImages();

    // console.log('title:: ', title);
    // console.log('description:: ', description);
    // console.log('level:: ', level);
    // console.log('cover_image:: ', imagesUploaded.key);
    // console.log('introduction:: ', editor?.getHTML());
    // console.log('visibility:: ', privacy);
    // return;

    mutateCreateSeries(
      {
        title,
        description,
        level,
        cover_image: imagesUploaded.key,
        introduction: editor?.getHTML() as string,
        visibility: privacy
      },
      {
        onSuccess() {
          showSuccessToast(t('Series created successfully!'));
          editor?.commands.clearContent();
          handleClose();
        },
        onError() {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[800px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>
          {t('Create Series')}
        </h2>
      </div>

      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 pt-4 pb-10 *:mt-7'>
        <div className='relative !mt-3'>
          <InputStyle
            maxLength={100}
            label='Title'
            onChange={e => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <TextareaV2
          label='Description'
          maxLength={250}
          onChange={e => {
            setDescription(e.currentTarget.value);
          }}
        />
        <div className='upload-image-button'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={1}
            dataURLKey='data_url'
            acceptType={['jpg', 'jpeg', 'png', 'gif']}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              <div>
                <div className='mb-3'>Add a cover image for your series</div>
                <div className='flex-start gap-4'>
                  <button
                    type='button'
                    className='flex items-center gap-1.5 bg-sky-50 hover:bg-sky-200 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:hover:bg-sky-900 dark:border-sky-900 duration-300'
                    onClick={onImageUpload}
                  >
                    <IoImage className='text-base' />
                    {t('Image')}
                  </button>
                  {imageList.length > 0 && (
                    <div
                      className='flex-start text-1'
                      onClick={onImageRemoveAll}
                    >
                      <span>Remove</span>
                      <IoClose className='size-5' />
                    </div>
                  )}
                </div>
                {imageList.length > 0 && (
                  <div className='mt-5'>
                    <Image
                      className=''
                      src={imageList[0]?.data_url || ''}
                      width={1500}
                      height={1500}
                      alt='image'
                    />
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className='level'>
          <Select data={levelList} label={labelSelect} setSelect={setLevel} />
        </div>
        <div className='editor space-y-5'>
          <Editor
            setEditor={setEditor}
            placeholder={t('Introduction to the series...')}
          />
        </div>
      </div>

      <div className='p-5 flex justify-between items-center'>
        <PostPrivacy setPrivacy={setPrivacy} />
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn(
              'button lg:px-6 text-white max-md:flex-1',
              isLoading && 'select-none'
            )}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading && (
              <CircularProgress size={20} className='!text-text-1 mr-2' />
            )}
            {t('Publish Series')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
