import { useCurrentUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export interface IInputCommentProps {
  postID: string;
}

export default function InputComment({ postID }: IInputCommentProps) {
  const t = useTranslations();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  return (
    <div className='flex-between'>
      <div className='flex-start w-10/12'>
        <Avatar
          src={getImageURL(currentUserInfo?.user_image)}
          sx={{ width: 24, height: 24 }}
          className='me-5'
        />
        <input className='bg-transparent w-[85%] px-2 outline-none' placeholder={t('Add Comment') + '...'} />
      </div>
      <span className='me-2 px-4 py-1 bg-foreground-2 hover:bg-hover-2 duration-300 rounded-2xl w-2/12 text-center'>
        {t('Reply')}
      </span>
    </div>
  );
}
