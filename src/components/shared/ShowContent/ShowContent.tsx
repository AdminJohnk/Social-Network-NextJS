import { EditorContent, useEditor } from '@tiptap/react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Youtube } from '@tiptap/extension-youtube';
import { Link } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Highlight } from '@tiptap/extension-highlight';
import { lowlight } from 'lowlight';
import { useEffect } from 'react';

export interface IShowContentProps {
  content: string;
}

export default function ShowContent({ content }: IShowContentProps) {
  const editor = useEditor({
    content: content,
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Underline,
      Link,
      Placeholder,
      Youtube.configure({
        width: 440,
        height: 300,
        ccLanguage: 'en'
      }),
      Highlight,
      CodeBlockLowlight.configure({ lowlight })
    ],
    editable: false
  });

    useEffect(() => {
        editor?.commands.setContent(content);
    }, [content, editor]);

  return (
    <div>
      <EditorContent
        className='my-5 px-2 *:outline-none overflow-hidden'
        editor={editor}
      />
    </div>
  );
}
