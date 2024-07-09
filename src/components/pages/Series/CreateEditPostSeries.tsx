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
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { cn, getImageURL } from '@/lib/utils';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { updatePostToSeries, useAddPostToSeries, useDeleteImage, useUploadImage } from '@/hooks/mutation';
import { IUpdateSeriesPost, TypeOfLevel, Visibility } from '@/types';
import PostPrivacy from '@/components/shared/PostPrivacy';

export interface ICreateEditPostSeriesProps {
  handleClose: () => void;
  dataEdit?: IUpdateSeriesPost;
  series_id: string;
}

export default function CreateEditPostSeries({
  handleClose,
  dataEdit,
  series_id
}: ICreateEditPostSeriesProps) {
  const t = useTranslations();

  const { mutateAddPostToSeries } = useAddPostToSeries();
  const { mutateUpdatePostToSeries } = updatePostToSeries();

  const [privacy, setPrivacy] = useState<Visibility>('public');

  const [editor, setEditor] = useState<EditorProps>();
  const [images, setImages] = useState<ImageListType>([]);
  const [changeImage, setChangeImage] = useState<boolean>(false);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
    dataEdit && setChangeImage(true);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setPrivacy(dataEdit.visibility);
    }
  }, [dataEdit]);

  const calculate_read_time = (content: string) => {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
  };

  const handleSubmit = async () => {
    // console.log('series_id:: ', series_id);
    // console.log('title:: ', title);
    // console.log('description:: ', description);
    // console.log('content:: ', editor?.getHTML());
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
      showErrorToast(t('Please enter some content'));
      setIsLoading(false);
      return;
    }

    let imagesUploaded;

    if (changeImage || !dataEdit) {
      imagesUploaded = await handleUploadImages();
    }

    const content = editor?.getHTML() as string;
    const read_time = calculate_read_time(content);

    // console.log('title:: ', title);
    // console.log('description:: ', description);
    // console.log('level:: ', level);
    // console.log('cover_image:: ', imagesUploaded.key);
    // console.log('introduction:: ', editor?.getHTML());
    // console.log('visibility:: ', privacy);
    // return;

    // Create Post
    if (!dataEdit) {
      mutateAddPostToSeries(
        {
          series_id,
          title,
          description,
          cover_image: imagesUploaded?.key!,
          content,
          read_time,
          visibility: privacy
        },
        {
          onSuccess() {
            showSuccessToast(t('Post created successfully!'));
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
      // Update Post
      mutateUpdatePostToSeries(
        {
          id: dataEdit.id,
          series_id,
          title,
          description,
          cover_image: changeImage ? imagesUploaded?.key! : dataEdit.cover_image,
          content,
          read_time,
          visibility: privacy
        },
        {
          onSuccess() {
            showSuccessToast(t('Post updated successfully!'));
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
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[800px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{!dataEdit ? t('Add Post') : t('Update Post')}</h2>
      </div>

      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 pt-4 pb-10 *:mt-7'>
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
                <div className='mb-3'>{t('Add a cover image for your post')}</div>
                <div className='flex-start gap-4'>
                  <button
                    type='button'
                    className='flex items-center gap-1.5 bg-sky-50 hover:bg-sky-200 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:hover:bg-sky-900 dark:border-sky-900 duration-300'
                    onClick={onImageUpload}>
                    <IoImage className='text-base' />
                    {t('Image')}
                  </button>
                  {imageList.length > 0 && (
                    <div className='flex-start text-1' onClick={onImageRemoveAll}>
                      <span>{t('Remove')}</span>
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
        <div className='editor space-y-5'>
          <Editor
            setEditor={setEditor}
            placeholder={t('Write your post here')}
            content={dataEdit?.content || ''}
            autofocus={false}
          />
        </div>
      </div>

      <div className='p-5 flex-between'>
        <PostPrivacy privacy={privacy} setPrivacy={setPrivacy} />
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
            disabled={isLoading}
            onClick={handleSubmit}>
            {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
            {dataEdit ? t('Update') : t('Publish')}
            <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
