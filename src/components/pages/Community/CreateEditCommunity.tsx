import { InputStyle } from '@/components/shared/InputStyle';
import TextareaV2 from '@/components/ui/textarea-v2';
import { useLocale, useTranslations } from 'next-intl';
import { IoAdd, IoClose, IoHappyOutline, IoImage } from 'react-icons/io5';
import Picker from '@emoji-mart/react';
import { useEffect, useState } from 'react';
import { useThemeMode } from 'flowbite-react';
import { ICreateCommunity, IEmoji, IUpdateCommunity, IUserInfo } from '@/types';
import Popover from '@/components/ui/popover-v2';
import { PiHashLight } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { FiMinus } from 'react-icons/fi';
import { useCurrentUserInfo } from '@/hooks/query';
import AddMemberToCommunity from '@/components/shared/Community/AddMemberToCommunity';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@mui/material';
import { cn, getImageURL } from '@/lib/utils';
import { useCreateCommunity, useDeleteImage, useUpdateCommunity, useUploadImage } from '@/hooks/mutation';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import Image from 'next/image';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useRouter } from '@/navigation';

interface ICreateEditCommunityProps {
  handleClose: () => void;
  dataEdit?: Omit<ICreateCommunity, 'members'> & {
    _id: string;
    members: IUserInfo[];
    admins: IUserInfo[];
  };
}

export default function CreateEditCommunity({ handleClose, dataEdit }: ICreateEditCommunityProps) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const { mode } = useThemeMode();

  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateCreateCommunity } = useCreateCommunity();
  const { mutateUpdateCommunity } = useUpdateCommunity();
  const { mutateUploadImage } = useUploadImage();
  const { mutateDeleteImage } = useDeleteImage();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');

  const [about, setAbout] = useState('');
  const [cursorAbout, setCursorAbout] = useState(0);

  const [hashTagList, setHashTagList] = useState<string[]>([]);

  const [ruleInputs, setRuleInputs] = useState<Record<'title' | 'content', string>[]>([]);

  const [membersCom, setMembersCom] = useState<IUserInfo[]>([]);

  const [images, setImages] = useState<ImageListType>([]);
  const [changeImage, setChangeImage] = useState<boolean>(false);

  useEffect(() => {
    if (dataEdit) {
      setName(dataEdit.name);
      setAbout(dataEdit.about);
      setHashTagList(dataEdit.tags);
      setRuleInputs(dataEdit.rules);
      setMembersCom(dataEdit.members);
      setImages([{ data_url: dataEdit.image }]);
    }
  }, [dataEdit]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
    dataEdit && setChangeImage(true);
  };

  const handleUploadImages = async () => {
    const formData = new FormData();
    formData.append('image', images[0].file as File);

    return await mutateUploadImage(formData);
  };

  const handleDeleteImage = async (oldImage: string) => {
    await mutateDeleteImage(Array.of(oldImage));
  };

  const members = currentUserInfo?.members || [];

  const ruleInputHTML = (index: number, rule: { title: string; content: string }) => {
    return (
      <div>
        <div className='flex'>
          <span
            className='p-0.5 rounded-full bg-foreground-1'
            onClick={() => {
              const newRuleInputs = ruleInputs.filter((_, i) => i !== index);
              setRuleInputs(newRuleInputs);
            }}>
            <FiMinus className='size-5 text-1' />
          </span>
        </div>
        <div className='relative mb-5 mt-4'>
          <InputStyle
            label={`${t('Rule')} ${index + 1}: `}
            defaultValue={rule.title}
            onChange={(e) => {
              const newRuleInputs = ruleInputs.map((ruleInput, i) => {
                if (i === index) {
                  return { ...ruleInput, title: e.currentTarget.value };
                }
                return ruleInput;
              });
              setRuleInputs(newRuleInputs);
            }}
          />
        </div>
        <div className='relative'>
          <InputStyle
            label={`${t('Description')} ${index + 1}: `}
            defaultValue={rule.content}
            onChange={(e) => {
              const newRuleInputs = ruleInputs.map((ruleInput, i) => {
                if (i === index) {
                  return { ...ruleInput, content: e.currentTarget.value };
                }
                return ruleInput;
              });
              setRuleInputs(newRuleInputs);
            }}
          />
        </div>
      </div>
    );
  };

  const onSubmit = async () => {
    setIsLoading(true);

    const rules = ruleInputs.map((rule) => ({ title: rule.title, content: rule.content }));

    let imagesUploaded;

    if (changeImage || !dataEdit) {
      imagesUploaded = await handleUploadImages();
    }

    const members = [...new Set(membersCom.map((member) => member._id).concat(currentUserInfo._id))];

    if (!dataEdit) {
      const data = {
        name,
        about,
        tags: hashTagList,
        rules,
        image: imagesUploaded?.key!,
        members,
        visibility: 'public'
      } satisfies ICreateCommunity;

      await mutateCreateCommunity(data, {
        onSuccess: (community) => {
          handleClose();
          router.push(`/community/${community._id}`);
          showSuccessToast(t('Community created successfully!'));
        },
        onSettled: () => setIsLoading(false)
      });
    } else {
      const admins = dataEdit.admins.map((admin) => admin._id).filter((admin) => members.includes(admin));
      const data = {
        id: dataEdit._id,
        name,
        about,
        tags: hashTagList,
        rules,
        image: imagesUploaded?.key!,
        members,
        admins,
        visibility: 'public',
        scope: 'Community'
      } satisfies IUpdateCommunity;

      await mutateUpdateCommunity(data, {
        onSuccess: () => {
          handleClose();
          handleDeleteImage(dataEdit.image);
          showSuccessToast(t('Community updated successfully!'));
        },
        onSettled: () => setIsLoading(false)
      });
    }
  };

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[800px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>
          {!dataEdit ? t('Create Community') : t('Edit Community')}
        </h2>
      </div>

      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 py-4 *:mt-7'>
        <div className='relative !mt-3'>
          <InputStyle
            label={t('Community Name')}
            onChange={(e) => setName(e.currentTarget.value)}
            defaultValue={dataEdit?.name}
          />
        </div>
        <div className='flex-between'>
          <TextareaV2
            label={t('About')}
            value={about}
            onChange={(e) => {
              setAbout(e.currentTarget.value);
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
            onClick={(e) => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
            onKeyUp={(e) => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
          />
          <div className='ms-2'>
            <Popover
              mainContent={<IoHappyOutline className='text-2xl' />}
              hoverContent={
                <Picker
                  data={async () => {
                    const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                    return await response.json();
                  }}
                  i18n={async () => {
                    const response = await fetch(
                      `https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/${locale}.json`
                    );

                    return await response.json();
                  }}
                  onEmojiSelect={(emoji: IEmoji) => {
                    setCursorAbout(cursorAbout + emoji.native.length);
                    setAbout(about.slice(0, cursorAbout) + emoji.native + about.slice(cursorAbout));
                  }}
                  theme={mode}
                />
              }
            />
          </div>
        </div>
        <div className='relative'>
          <InputStyle
            label={t('Hashtags')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const value = e.currentTarget.value.trim();
                if (value === '') {
                  showErrorToast(t('Hashtag cannot be empty'));
                  return;
                } else if (value.includes(' ')) {
                  showErrorToast(t('Hashtag cannot contain spaces'));
                  return;
                } else if (hashTagList.includes(value)) {
                  showErrorToast(t('Hashtag already exists'));
                  return;
                } else if (!/^[a-zA-Z0-9_-]*$/.test(value)) {
                  showErrorToast(t('Hashtag can only contain letters, numbers, underscores, and hyphens'));
                  return;
                } else {
                  setHashTagList([...hashTagList, value]);
                  e.currentTarget.value = '';
                }
              }
            }}
          />
        </div>
        <div className='render-hashtag flex-start flex-wrap gap-3'>
          {hashTagList.map((tag, index) => (
            <span key={index} className='hashtag px-3 py-1.5 bg-1 flex-start rounded-full'>
              <PiHashLight className='size-4 me-1' />
              <span>{tag}</span>
              <IoMdClose
                className='size-4 ms-1 hover:text-red-500 duration-300'
                onClick={() => {
                  const newHashTagList = hashTagList.filter((_, i) => i !== index);
                  setHashTagList(newHashTagList);
                }}
              />
            </span>
          ))}
        </div>
        <div className='flex-start gap-2'>
          <span className='text-sm text-text-2'>{t('Rules')}</span>
          <span className='p-0.5 rounded-full bg-foreground-1'>
            <IoAdd
              className='size-5 text-1'
              onClick={() => {
                setRuleInputs([...ruleInputs, { title: '', content: '' }]);
              }}
            />
          </span>
        </div>
        <div className='render-rule-input mx-3 *:mb-8'>
          {ruleInputs.map((rule, index) => ruleInputHTML(index, rule))}
        </div>
        <div className='member'>
          <AddMemberToCommunity
            members={members}
            setMembers={setMembersCom}
            defaultMembers={dataEdit?.members?.filter((member) => member._id !== currentUserInfo._id)}
          />
        </div>
        <div className='upload-image-button'>
          <ReactImageUploading
            value={images}
            onChange={onChange}
            dataURLKey='data_url'
            acceptType={['jpg', 'jpeg', 'png', 'gif', 'webp']}>
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              <div>
                {!imageList.length && <div className='mb-3'>{t('Add a cover image for your community')}</div>}
                <div className='flex-start gap-4'>
                  <button
                    type='button'
                    className='flex-start gap-1.5 bg-sky-50 hover:bg-sky-200 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:hover:bg-sky-900 dark:border-sky-900 duration-300'
                    onClick={onImageUpload}>
                    <IoImage className='text-base' />
                    <p>{t('Image')}</p>
                  </button>
                  {imageList.length > 0 && (
                    <button
                      type='button'
                      className='flex-start bg-foreground-2 hover:bg-hover-2 gap-1.5 rounded-full py-1 px-2 border-2 border-border-1 duration-300'
                      onClick={onImageRemoveAll}>
                      <p>{t('Remove')}</p>
                      <IoClose className='size-5' />
                    </button>
                  )}
                </div>
                {imageList.length > 0 && (
                  <div className='mt-5'>
                    <Image
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
          </ReactImageUploading>
        </div>
      </div>
      <div className='flex-end mt-7 gap-5 px-5 py-4'>
        <Button
          className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
          variant='destructive'
          onClick={handleClose}
          disabled={isLoading}>
          <div className='font-bold'>{t('Cancel')}</div>
        </Button>
        <Button
          className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
          onClick={onSubmit}
          disabled={isLoading}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          <div className='font-bold'>{!dataEdit ? t('Create') : t('Update')}</div>
        </Button>
      </div>
    </div>
  );
}
