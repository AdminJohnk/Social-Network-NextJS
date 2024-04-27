import { cn, getImageURL } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { IoImage } from 'react-icons/io5';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';
import { get } from 'lodash';
import { useDeleteImage, useUploadImages } from '@/hooks/mutation';

export interface IUploadImageProps {
  imagesOfPost?: string[];
  setImagesOfPost: (images: string[]) => void;
  setImagesOfS3: (images: File[]) => void;
}

export default function UploadImage({
  imagesOfPost,
  setImagesOfPost,
  setImagesOfS3
}: IUploadImageProps) {
  const t = useTranslations();
  const { mutateDeleteImage } = useDeleteImage();


  const [imagesPost, setImagesPost] = useState<string[]>(imagesOfPost || []);
  const [images, setImages] = useState<ImageListType>([]);

  useEffect(() => {
    setImagesOfPost(imagesPost);
    const files = images.map(image => image.file);
    setImagesOfS3(files as File[]);
  }, [imagesPost, images]);

  const maxNumber = 5 - imagesPost.length;
  const onChange = (
    imageList: ImageListType
  ) => {
    setImages(imageList);
  };

  const convertByte = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  };

  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
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
          // write your building UI
          <div className='upload__image-wrapper'>
            {/* <button
              className={cn(isDragging && 'text-red-500')}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}
            <div className='flex-start gap-3'>
              <button
                type='button'
                className='flex items-center gap-1.5 bg-sky-50 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:border-sky-900'
                onClick={onImageUpload}
              >
                <IoImage className='text-base' />
                {t('Image')}
              </button>
              <div>Max: 5</div>
              {(images.length > 0 || imagesPost.length > 0) && (
                <button
                  className='text-1 flex-start py-1 px-2 rounded-full'
                  onClick={() => {
                    onImageRemoveAll();
                    setImagesPost([]);
                    // delete image post in server
                    mutateDeleteImage(imagesPost);
                  }}
                >
                  <span>{t('Remove all')}</span>
                  <IoCloseOutline className='size-5' />
                </button>
              )}
            </div>
            <div className='mt-4 ms-2 *:mb-3'>
              {images.map((image, index) => (
                <div key={index} className='image-item flex-start'>
                  <Image
                    src={image.data_url}
                    className='me-3 w-[50px] h-[50px] rounded-md object-contain'
                    alt='image'
                    width={300}
                    height={300}
                  />
                  <div className='flex-start gap-3'>
                    <div className='image-item__btn-wrapper flex flex-col gap-2'>
                      <div>
                        {
                          // max 30 characters + '...' + file extension
                          (image.file?.name.length as number) > 33
                            ? `${image.file?.name.slice(
                                0,
                                30
                              )}... ${image.file?.name.slice(
                                image.file?.name.length - 4
                              )}`
                            : image.file?.name
                            ? image.file?.name
                            : ''
                        }
                      </div>
                      <div className='text-text-2'>
                        {convertByte(image.file?.size || 0) || ''}
                      </div>
                    </div>
                    <div className='image-item__btn-wrapper flex flex-col gap-2 *:p-1 *:text-1'>
                      <button onClick={() => onImageUpdate(index)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4 ms-2 *:mb-3'>
              {imagesPost.map((image, index) => (
                <div key={index} className='image-item flex-start'>
                  <Image
                    src={getImageURL(image, 'post_mini')}
                    className='me-3 w-[50px] h-[50px] rounded-md object-cover'
                    alt='image'
                    width={300}
                    height={300}
                  />
                  <div className='flex-start gap-3'>
                    <div className='image-item__btn-wrapper flex flex-col gap-2'>
                      <div>
                        {
                          // max 30 characters + '...' + file extension
                          (image.length as number) > 33
                            ? `${image.slice(0, 30)}... ${image.slice(
                                image.length - 4
                              )}`
                            : image
                            ? image
                            : ''
                        }
                      </div>
                    </div>
                    <div className='image-item__btn-wrapper flex flex-col gap-2 *:p-1 *:text-1'>
                      <button
                        onClick={() => {
                          setImagesPost(
                            imagesPost.filter((_, i) => i !== index)
                          );
                          // delete image post in server
                          mutateDeleteImage(imagesPost);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
