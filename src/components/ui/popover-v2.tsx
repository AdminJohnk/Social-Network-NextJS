'use client';

import { useState } from 'react';
import { Popover as PopoverMUI } from '@mui/material';
import { PopoverProps } from '@mui/material';
import { cn } from '@/lib/utils';

export interface IPostMoreChooseProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onClick' | 'aria-describedby'> {
  mainContent: React.ReactNode;
  hoverContent: React.ReactNode;
  popoverOptions?: Omit<PopoverProps, 'open' | 'anchorEl' | 'onClose'>;
}

export default function Popover({
  mainContent,
  hoverContent,
  popoverOptions,
  className,
  ...props
}: IPostMoreChooseProps) {
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
    <div className={cn('flex-center', className)} {...props}>
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
          vertical: 'bottom',
          horizontal: 'left'
        }}
        {...popoverOptions}>
        {hoverContent}
      </PopoverMUI>
    </div>
  );
}
