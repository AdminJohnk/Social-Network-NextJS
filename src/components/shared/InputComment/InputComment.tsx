import { Avatar, Input } from '@mui/material';
import { useTranslations } from 'next-intl';

export interface IInputCommentProps {}

export default function InputComment(props: IInputCommentProps) {
  const t = useTranslations();

  return (
    <div className='flex-between'>
      <div className='flex-start w-10/12'>
        <Avatar src='/images/avatars/avatar-3.jpg' sx={{ width: 24, height: 24 }} className='me-5' />
        <input className='bg-transparent w-[85%] px-2 outline-none' placeholder={t('Add Comment') + '...'} />
      </div>
      <span className='me-2 px-4 py-1 bg-foreground-2 hover:bg-hover-2 duration-300 rounded-2xl w-2/12 text-center'>
        {t('Reply')}
      </span>
    </div>
  );
}
