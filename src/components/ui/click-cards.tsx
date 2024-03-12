'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';

interface IPostMoreChooseProps {
  Content: React.ReactNode;
  HoverContent: React.ReactNode;
}

export default function PopOverClick({ Content, HoverContent }: IPostMoreChooseProps) {
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
        {Content}
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
        {HoverContent}
      </Popover>
    </div>
  );
}
