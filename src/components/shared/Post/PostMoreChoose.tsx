import { useTranslations } from 'next-intl';
import { CiBookmark, CiFlag1 } from 'react-icons/ci';
import {
  IoOpenOutline,
  IoTrashOutline,
  IoBookmark,
  IoBookmarkOutline
} from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { Link } from '@/navigation';
import { IPost } from '@/types';
import { IFeaturePost } from '@/types';
import { useDeletePost, useSavePost, useSharePost } from '@/hooks/mutation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Modal } from '@mui/material';
import YesNoQuestion from '../YesNoQuestion';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IPostMoreChooseProps {
  post: IPost;
  isMyPost: boolean;
  feature?: IFeaturePost;
}

export default function PostMoreChoose({
  post,
  isMyPost,
  feature
}: IPostMoreChooseProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const userID = session?.id || '';

  const { mutateSavePost } = useSavePost();
  const { mutateDeletePost } = useDeletePost(userID);
  const { mutateSharePost } = useSharePost();

  const [is_saved, setIsSaved] = useState(post.is_saved);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsSaved(post.is_saved);
  }, [post.is_saved]);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeletePost = () => {
    setIsLoading(true);
    if (post.type === 'Post') {
      mutateDeletePost(post._id, {
        onSuccess() {
          showSuccessToast(t('Post deleted successfully!'));
        },
        onError() {
          showErrorToast('Failed to delete post!');
        },
        onSettled() {
          setIsLoading(false);
          handleClose();
        }
      });
    } else {
      mutateSharePost(
        {
          post: post.post_attributes.post?._id as string,
          owner_post: post.post_attributes.owner_post?._id as string
        },
        {
          onSuccess() {
            showSuccessToast(t('Post deleted successfully!'));
          },
          onError() {
            showErrorToast('Failed to delete post!');
          },
          onSettled() {
            setIsLoading(false);
            handleClose();
          }
        }
      );
    }
  };

  return (
    <div className='post-more-choose w-56 bg-foreground-1 border border-border-1 text-text-1 p-2'>
      {/* Open Post In New Tab */}
      <div>
        {feature === 'detail' ? (
          <></>
        ) : (
          <div
            className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
            onClick={e => {
              e.preventDefault();
              window.open('/posts/' + post._id, '_blank');
            }}
          >
            <span className='text-2xl'>
              <IoOpenOutline />
            </span>
            <span>{t('Open Post In New Tab')}</span>
          </div>
        )}
        {/* Add To Favorite */}
        <div
          className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
          onClick={() => {
            setIsSaved(!is_saved);
            mutateSavePost(post._id);
          }}
        >
          <span className='text-2xl'>
            {is_saved ? <IoBookmark /> : <IoBookmarkOutline />}
          </span>
          <span>
            {is_saved ? t('Remove From Favorite') : t('Add To Favorite')}
          </span>
        </div>
        {isMyPost && (
          <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
            <span className='text-2xl'>
              <FiEdit />
            </span>
            <span>{t('Edit Post')}</span>
          </div>
        )}
        {/* Report This Post */}
        <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
          <span className='text-2xl'>
            <CiFlag1 />
          </span>
          <span>{t('Report This Post')}</span>
        </div>
        {/* Delete Post */}
        {isMyPost && (
          <div
            className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
            onClick={() => {
              handleOpen();
              if (post.type === 'Post') {
              } else {
              }
            }}
          >
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
                <YesNoQuestion
                  title='Are you sure delete this post?'
                  content='You will not be able to recover post after deletion!'
                  type='warning'
                  isLoading={isLoading}
                  action={handleDeletePost}
                  cancel={handleClose}
                />
              </div>
            </Modal>
            <span className='text-2xl'>
              <IoTrashOutline />
            </span>
            <span>{t('Delete Post')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
