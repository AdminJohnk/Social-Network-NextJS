'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';

interface IPostMoreChooseProps {
  content: React.ReactNode;
  hoverContent: React.ReactNode;
}

export default function PopoverClick({ content, hoverContent }: IPostMoreChooseProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} onClick={handleClick}>
        {content}
      </button>
      <Popover
        classes={{
          paper: 'bg-transparent'
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}>
        {hoverContent}
      </Popover>
    </div>
  );
}
