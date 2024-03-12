import { Avatar } from '@mui/material';

export interface ISuggestMemberItemProps {
  member: {
    id: number;
    name: string;
    follow_number: string;
    avatar: string;
  };
}

export default function SuggestMemberItem({
  member: { id, name, follow_number, avatar }
}: ISuggestMemberItemProps) {
  return (
    <div className='suggest-member-item flex-center flex-col'>
      <Avatar src={avatar} className='mb-4' sx={{ width: 64, height: 64 }} />
      <div>
        <span className='base-bold'>{name}</span>
      </div>
      <div>
        <span className='small-regular text-text-2'>{follow_number + ' Followers'}</span>
      </div>
      <button className='mt-4 px-10 py-2 base-bold bg-foreground-2 hover:bg-hover-2 rounded-lg duration-300'>
        Follow
      </button>
    </div>
  );
}
