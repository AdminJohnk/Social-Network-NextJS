'use client';

import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { CircularProgress } from '@mui/material';
import { useSavePost } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export interface IButtonRemoveSavePostProps {
    post_id: string;
}

export default function ButtonRemoveSavePost({ post_id }: IButtonRemoveSavePostProps) {
    const t = useTranslations();

    const { mutateSavePost } = useSavePost();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openDeletePost, setOpenDeletePost] = useState(false);
    const handleOpenDeletePost = () => setOpenDeletePost(true);
    const handleCloseDeletePost = () => setOpenDeletePost(false);

    const handleRemoveFavorite = (postId: string) => {
        setIsLoading(true);
        mutateSavePost(postId, {
            onSuccess() {
                showSuccessToast(t('Post deleted successfully!'));
            },
            onError() {
                showErrorToast('Failed to delete post!');
            },
            onSettled() {
                handleCloseDeletePost();
                setIsLoading(false);
            }
        });
    }
    return (
        <>
            <Button
                onClick={handleOpenDeletePost}
                className='base-bold !bg-foreground-2 hover:bg-hover-2 duration-300 text-text-2 px-4 py-1 rounded-lg items-end mr-1'>
                {t('Remove favorites')}
            </Button>
            <AlertDialog open={openDeletePost} onOpenChange={setOpenDeletePost}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('Are you absolutely sure remove this post?')}</AlertDialogTitle>
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
                            onClick={() => { handleRemoveFavorite(post_id) }}>
                            {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
                            {t('Remove')}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
