import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { Button } from '../ui/button';

export interface IQuestionDialogProps {
  isLoading: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
  handleFunction: () => void;
  component: React.ReactNode;
  question: string;

  content?: string;
  Ok?: string;
  NotOk?: string;
}

export default function QuestionDialog({
  isLoading,
  open,
  setOpen,
  handleFunction,
  component,
  question,
  content = '',
  Ok = 'Delete',
  NotOk = 'Cancel'
}: IQuestionDialogProps) {
  const t = useTranslations();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        onClick={() => setOpen(true)}
      >
        {component}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> {t(question)}</AlertDialogTitle>
          <AlertDialogDescription>{t(content)}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            variant='destructive'
            className={cn(isLoading && 'select-none')}
            disabled={isLoading}
            onClick={() => setOpen(false)}
          >
            {t(NotOk)}
          </Button>
          <Button
            className={cn(isLoading && 'select-none')}
            disabled={isLoading}
            onClick={handleFunction}
          >
            {isLoading && (
              <CircularProgress size={20} className='!text-text-1 mr-2' />
            )}
            {t(Ok)}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
