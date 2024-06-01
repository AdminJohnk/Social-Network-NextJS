'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CiFlag1 } from 'react-icons/ci';
import { CircularProgress } from '@mui/material';
import { IoOpenOutline, IoTrashOutline, IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';

import { IPost } from '@/types';
import { IFeaturePost } from '@/types';
import { useDeletePost, userDeleteSharedPost, useSavePost } from '@/hooks/mutation';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import EditPost from '../EditPost';
import Modal from '../Modal';

export interface IPostMoreChooseProps {
  post: IPost;
  isMyPost: boolean;
  feature: IFeaturePost;
  CommunityID?: string;
}

export default function PostMoreChoose({ post, isMyPost, feature, CommunityID }: IPostMoreChooseProps) {
  const t = useTranslations();

  const { mutateSavePost } = useSavePost();
  const { mutateDeletePost } = useDeletePost();
  const { mutateDeleteSharedPost } = userDeleteSharedPost();

  const [is_saved, setIsSaved] = useState(post.is_saved);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsSaved(post.is_saved);
  }, [post.is_saved]);

  // Modal Delete Post
  const [openDeletePost, setOpenDeletePost] = useState(false);
  const handleOpenDeletePost = () => setOpenDeletePost(true);
  const handleCloseDeletePost = () => setOpenDeletePost(false);

  // Modal Edit Post
  const [openEditPost, setOpenEditPost] = useState(false);
  const handleOpenEditPost = () => setOpenEditPost(true);
  const handleCloseEditPost = () => setOpenEditPost(false);

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
          handleCloseDeletePost();
        }
      });
    } else {
      mutateDeleteSharedPost(
        {
          shared_post: post._id,
          post: post.post_attributes.post?._id as string,
          owner_post: post.post_attributes.owner_post?._id as string
        },
        {
          onSuccess() {
            showSuccessToast(t('Post deleted successfully!'));
          },
          onError() {
            showErrorToast(t('Failed to delete post!'));
          },
          onSettled() {
            setIsLoading(false);
            handleCloseDeletePost();
          }
        }
      );
    }
  };

  return (
    <div className='post-more-choose w-fit bg-foreground-1 border border-border-1 rounded-lg text-text-1 p-2'>
      {/* Open Post In New Tab */}
      <div>
        {feature === 'detail' ? (
          <></>
        ) : (
          <div
            className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
            onClick={(e) => {
              e.preventDefault();
              window.open('/posts/' + post._id, '_blank');
            }}>
            <span className='text-2xl'>
              <IoOpenOutline />
            </span>
            <span>{t('Open Post In New Tab')}</span>
          </div>
        )}
        {/* Add To Favorite */}
        <div
          className='flex-start w-fit min-w-full gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
          onClick={() => {
            setIsSaved(!is_saved);
            mutateSavePost(post._id);
          }}>
          <span className='text-2xl'>{is_saved ? <IoBookmark /> : <IoBookmarkOutline />}</span>
          <span>{is_saved ? t('Remove From Favorite') : t('Add To Favorite')}</span>
        </div>
        {/* Edit Post */}
        {isMyPost && (
          <>
            <div
              className='flex-start w-full gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
              onClick={handleOpenEditPost}>
              <span className='text-2xl'>
                <FiEdit />
              </span>
              <span>{t('Edit Post')}</span>
            </div>
            <Modal open={openEditPost} handleClose={handleCloseEditPost}>
              <EditPost post={post} handleClose={handleCloseEditPost} isCommunity={CommunityID ? true : false} CommunityID={CommunityID || ''} />
            </Modal>
          </>
        )}
        {/* Report This Post */}
        <div className='flex-start gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
          <span className='text-2xl'>
            <CiFlag1 />
          </span>
          <span>{t('Report This Post')}</span>
        </div>
        {/* Delete Post */}
        {isMyPost && (
          <AlertDialog open={openDeletePost} onOpenChange={setOpenDeletePost}>
            <AlertDialogTrigger
              className='flex-start w-full gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
              onClick={handleOpenDeletePost}>
              <span className='text-2xl'>
                <IoTrashOutline />
              </span>
              <span>{t('Delete Post')}</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t('Are you absolutely sure delete this post?')}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t('You will not be able to recover post after deletion!')}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button
                  variant='destructive'
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleCloseDeletePost}>
                  {t('Cancel')}
                </Button>
                <Button
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleDeletePost}>
                  {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
                  {t('Delete')}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
}
