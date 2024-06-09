import { styled, TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import { cn } from '@/lib/utils';

const TextareaMUI = styled(TextareaAutosize)(
  () => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--text-text-1);
  background: transparent;
  border: none;
  box-shadow: none;

  &:hover {
    border-color: transparent;
  }

  &:focus {
    border-color: transparent;
    box-shadow: none;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export interface ITextareaProps extends TextareaAutosizeProps {
  className?: string;
}

export default function Textarea({ className, ...props }: ITextareaProps) {
  return <TextareaMUI {...props} className={cn('placeholder:!base-regular', className)} />;
}
