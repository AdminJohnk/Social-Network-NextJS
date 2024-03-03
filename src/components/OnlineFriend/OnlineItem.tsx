import * as React from 'react';
import { StyledBadge } from './StyledBadge';
import { Avatar } from '@mui/material';

export interface IOnlineItemProps {
  size: number;
  src: string;
}

export default function OnlineItem({ size, src }: IOnlineItemProps) {
  return (
    <StyledBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'>
      <Avatar src={src} className={`size-${size}`} />
    </StyledBadge>
  );
}
