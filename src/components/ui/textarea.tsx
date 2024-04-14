import { useTranslations } from 'next-intl';
import { Textarea as TextareaMUI } from '@mui/joy';
import { TextareaProps } from '@mui/joy';
import { cn } from '@/lib/utils';

export interface ITextareaProps extends TextareaProps {
  className?: string;
}

export default function Textarea({ className, ...props }: ITextareaProps) {
  const t = useTranslations();

  return (
    <TextareaMUI
      {...props}
      className={cn(
        'text-text-1 bg-transparent  placeholder:base-regular',
        className
      )}
      sx={{
        '--Textarea-focusedThickness': '0',
        '--Textarea-focusedHighlight': 'transparent',
        '--Textarea-focused': '0',
        '--Textarea-focusedRing': 'transparent',
        '--Textarea-focusedShadow': 'none',
        '.MuiTextarea-textarea': {
          boxShadow: 'none'
        },
        border: 'none'
      }}
    />
  );
}
