'use client';

import { useState } from 'react';
import { Popover as PopoverMUI } from '@mui/material';
import { PopoverProps } from '@mui/material';

export interface IPostMoreChooseProps extends PopoverProps {
  mainContent: React.ReactNode;
  hoverContent: React.ReactNode;
}

export default function Popover({ mainContent, hoverContent }: IPostMoreChooseProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='flex-center'>
      <button type='button' aria-describedby={id} onClick={handleClick}>
        {mainContent}
      </button>
      <PopoverMUI
        classes={{
          paper: '!bg-transparent'
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        disableEnforceFocus
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}>
        {hoverContent}
      </PopoverMUI>
    </div>
  );
}
