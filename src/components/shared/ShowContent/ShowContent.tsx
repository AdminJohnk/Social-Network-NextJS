'use client';

import { EditorContent } from '@tiptap/react';
import { useEffect } from 'react';
import { useCustomEditor } from '@/hooks/special';

export interface IShowContentProps {
  content: string;
}

export default function ShowContent({ content }: IShowContentProps) {
  const editor = useCustomEditor({ content, editable: false });

  useEffect(() => {
    if (editor) editor.commands.setContent(content);
  }, [content]);

  return <EditorContent className='my-5 px-2 *:outline-none overflow-hidden' editor={editor} />;
}
