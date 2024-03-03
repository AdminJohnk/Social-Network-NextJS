'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export interface IPopOverProps {
  DisplayContent: React.ReactNode;
  HideContent: React.ReactNode;
}

export default function MouseOverPopover({
  DisplayContent,
  HideContent
}: IPopOverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        {DisplayContent}
      </Typography>
      <Popover
        id='mouse-over-popover'
        classes={{
          paper: 'bg-transparent shadow-none border-0 p-0 m-0'
        }}
        sx={{
          pointerEvents: 'none'
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        onClose={handlePopoverClose}>
        {HideContent}
      </Popover>
    </div>
  );
}
