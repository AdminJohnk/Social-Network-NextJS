import { Modal as ModalMui, ModalProps } from '@mui/material';
import React, { useState } from 'react';

export interface IModalProps extends ModalProps {
  componentModal: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

export default function Modal({
  componentModal,
  open,
  handleClose,
  ...props
}: IModalProps) {

  return (
    <ModalMui
      {...props}
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md outline-none'>
        {componentModal}
      </div>
    </ModalMui>
  );
}
