import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Editor as EditorProps } from '@tiptap/react';
import Editor from '@/components/shared/Editor/Editor';
import TextareaV2 from '@/components/ui/textarea-v2';
import { InputStyle } from '@/components/shared/InputStyle';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { IoImage } from 'react-icons/io5';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import SelectV2 from '@/components/ui/select-v2';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { cn, getImageURL } from '@/lib/utils';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCreateSeries, useDeleteImage, useUpdateSeries, useUploadImage } from '@/hooks/mutation';
import { IUpdateSeries, TypeOfLevel, Visibility } from '@/types';
import PostPrivacy from '@/components/shared/PostPrivacy';
import { useRouter } from '@/navigation';

export interface ICreateEditSeriesProps {
  handleClose: () => void;
  dataEdit?: IUpdateSeries;
}

export default function CreateEditSeries({ handleClose, dataEdit }: ICreateEditSeriesProps) {
  const t = useTranslations();
  const router = useRouter();

  const { mutateCreateSeries } = useCreateSeries();
  const { mutateUpdateSeries } = useUpdateSeries();

  const [privacy, setPrivacy] = useState<Visibility>('public');

  const [editor, setEditor] = useState<EditorProps>();
  const [images, setImages] = useState<ImageListType>([]);
  const [changeImage, setChangeImage] = useState<boolean>(false);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
    dataEdit && setChangeImage(true);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const levelList = ['beginner', 'intermediate', 'advanced'];
  const labelSelect = t('Select Level');
  const [level, setLevel] = useState<TypeOfLevel>('beginner');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutateUploadImage } = useUploadImage();
  const { mutateDeleteImage } = useDeleteImage();

  const handleUploadImages = async () => {
    const formData = new FormData();
    formData.append('image', images[0].file as File);

    return await mutateUploadImage(formData);
  };

  useEffect(() => {
    if (dataEdit) {
      setTitle(dataEdit.title);
      setDescription(dataEdit.description);
      setImages([{ data_url: dataEdit.cover_image }]);
      setLevel(dataEdit.level);
      setPrivacy(dataEdit.visibility);
    }
  }, [dataEdit]);

  const handleSubmit = async () => {
    // console.log('title:: ', title);
    // console.log('description:: ', description);
    // console.log('level:: ', level);
    // console.log('cover_image:: ', imagesUploaded.key);
    // console.log('introduction:: ', editor?.getHTML());
    // console.log('visibility:: ', privacy);
    // return;

    setIsLoading(true);

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
    } else if (!editor?.getText().trim()) {
      showErrorToast(t('Please introduce your series'));
      setIsLoading(false);
      return;
    }

    let imagesUploaded;

    if (changeImage || !dataEdit) {
      imagesUploaded = await handleUploadImages();
    }

    // console.log('title:: ', title);
    // console.log('description:: ', description);
    // console.log('level:: ', level);
    // console.log('cover_image:: ', imagesUploaded.key);
    // console.log('introduction:: ', editor?.getHTML());
    // console.log('visibility:: ', privacy);
    // return;

    // Create Series
    if (!dataEdit) {
      mutateCreateSeries(
        {
          title,
          description,
          level,
          cover_image: imagesUploaded?.key!,
          introduction: editor?.getHTML() as string,
          visibility: privacy
        },
        {
          onSuccess(data) {
            router.push(`/series/${data._id}`);
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
    } else {
      // Update Series
      mutateUpdateSeries(
        {
          id: dataEdit.id,
          title,
          description,
          level,
          cover_image: changeImage ? imagesUploaded?.key! : dataEdit.cover_image,
          introduction: editor?.getHTML() as string,
          visibility: privacy
        },
        {
          async onSuccess() {
            showSuccessToast(t('Series updated successfully!'));
            changeImage && mutateDeleteImage([dataEdit.cover_image]);
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
    }
  };

  return (
    <div className='relative mx-auto w-[800px] animate-fade-up rounded-lg bg-background-1 shadow-xl'>
      <div className='mb-0 border-b border-border-1 py-4 text-center'>
        <h2 className='text-sm font-medium text-text-1'>
          {!dataEdit ? t('Create Series') : t('Update Series')}
        </h2>
      </div>

      <div className='custom-scrollbar-bg max-h-[500px] overflow-y-scroll px-5 pb-10 pt-4 *:mt-7'>
        <div className='relative !mt-3'>
          <InputStyle
            maxLength={100}
            label={t('Title')}
            defaultValue={dataEdit?.title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <TextareaV2
          label={t('Description')}
          maxLength={250}
          defaultValue={dataEdit?.description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        <div className='upload-image-button'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={images.length > 0 ? 0 : 1}
            dataURLKey='data_url'
            acceptType={['jpg', 'jpeg', 'png', 'gif']}>
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              <div>
                <div className='mb-3'>{t('Add a cover image for your series')}</div>
                <div className='flex-start gap-4'>
                  <button
                    type='button'
                    className='flex items-center gap-1.5 rounded-full border-2 border-sky-100 bg-sky-50 px-2 py-1 text-sky-600 duration-300 hover:bg-sky-200 dark:border-sky-900 dark:bg-sky-950 dark:hover:bg-sky-900'
                    onClick={onImageUpload}>
                    <IoImage className='text-base' />
                    {t('Image')}
                  </button>
                  {imageList.length > 0 && (
                    <div className='flex-start text-1' onClick={onImageRemoveAll}>
                      <span>Remove</span>
                      <IoClose className='size-5' />
                    </div>
                  )}
                </div>
                {imageList.length > 0 && (
                  <div className='mt-5'>
                    <Image
                      className='w-[90%]'
                      src={getImageURL(images[0]?.data_url) || '/images/no-image.png'}
                      width={1500}
                      height={1500}
                      alt='image'
                      priority
                    />
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className='level'>
          <SelectV2
            data={levelList}
            label={labelSelect}
            setSelect={setLevel}
            defaultValue={dataEdit?.level}
          />
        </div>
        <div className='editor space-y-5'>
          <Editor
            setEditor={setEditor}
            placeholder={t('Introduction to the series')}
            content={dataEdit?.introduction || ''}
            autofocus={false}
          />
        </div>
      </div>

      <div className='flex-between p-5'>
        <PostPrivacy privacy={privacy} setPrivacy={setPrivacy} />
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn('button text-white max-md:flex-1 lg:px-6', isLoading && 'select-none')}
            disabled={isLoading}
            onClick={handleSubmit}>
            {isLoading && <CircularProgress size={20} className='mr-2 !text-text-1' />}
            {dataEdit ? t('Update Series') : t('Publish')}
            <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
