import { Modal as ModalMui, ModalProps } from '@mui/material';

export interface IModalProps extends ModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function Modal({ children, open, handleClose, ...props }: IModalProps) {
  return (
    <ModalMui
      {...props}
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: 'transparent' }}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md outline-none'>
        {children}
      </div>
    </ModalMui>
  );
}
