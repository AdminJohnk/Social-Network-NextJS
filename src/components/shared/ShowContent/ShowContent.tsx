'use client';

import { EditorContent } from '@tiptap/react';
import { useEffect } from 'react';
import { useCustomEditor } from '@/hooks/special';
import { cn } from '@/lib/utils';

export interface IShowContentProps {
  className?: string;
  content: string;
}

export default function ShowContent({ content, className }: IShowContentProps) {
  const editor = useCustomEditor({ content, editable: false });

  useEffect(() => {
    if (editor) editor.commands.setContent(content);
  }, [content]);

  return <EditorContent className={cn('overflow-hidden *:outline-none', className)} editor={editor} />;
}
