'use client';

import { useEffect, useState } from 'react';
import { Editor as EditorProps, EditorContent } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatUnderlined,
  MdLink
} from 'react-icons/md';
import { FaUndo, FaRedo, FaYoutube, FaPen } from 'react-icons/fa';
import { FiAlignCenter } from 'react-icons/fi';
import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { IoCodeSlashOutline, IoHappy } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import Picker from '@emoji-mart/react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Popover from '@/components/ui/popover-v2';
import { IEmoji } from '@/types';
import { useThemeMode } from 'flowbite-react';
import { useCustomEditor } from '@/hooks/special';

const MenuBar = ({ editor }: { editor: EditorProps | null }) => {
  const [typeNumber, setTypeNumber] = useState(0);
  const { mode } = useThemeMode();

  if (!editor) return <></>;

  const typeText = [
    {
      // Normal
      node: (
        <div className='flex-start gap-1.5'>
          <FiAlignCenter className='size-5' />
          <span>Normal</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().setParagraph().run();
        setTypeNumber(0);
      },
      className: editor.isActive('paragraph') ? 'text-primary-500' : ''
    },
    {
      // Heading 1
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading1 className='size-5' />
          <span>Heading 1</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        !editor.isActive('heading', { level: 1 }) ? setTypeNumber(0) : setTypeNumber(1);
      },
      className: editor.isActive('heading', { level: 1 }) ? 'text-primary-500' : ''
    },
    {
      // Heading 2
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading2 className='size-5' />
          <span>Heading 2</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        !editor.isActive('heading', { level: 2 }) ? setTypeNumber(0) : setTypeNumber(2);
      },
      className: editor.isActive('heading', { level: 2 }) ? 'text-primary-500' : ''
    },
    {
      // Heading 3
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading3 className='size-5' />
          <span>Heading 3</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        !editor.isActive('heading', { level: 3 }) ? setTypeNumber(0) : setTypeNumber(3);
      },
      className: editor.isActive('heading', { level: 3 }) ? 'text-primary-500' : ''
    },
    {
      // Bullet List
      node: (
        <div className='flex-start gap-1.5'>
          <MdFormatListBulleted className='size-5' />
          <span>Bullet List</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleBulletList().run();
        !editor.isActive('bulletList') ? setTypeNumber(0) : setTypeNumber(4);
      },
      className: editor.isActive('bulletList') ? 'text-primary-500' : ''
    },
    {
      // Numbered List
      node: (
        <div className='flex-start gap-1.5'>
          <MdFormatListNumbered className='size-5' />
          <span>Numbered List</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleOrderedList().run();
        !editor.isActive('orderedList') ? setTypeNumber(0) : setTypeNumber(5);
      },
      className: editor.isActive('orderedList') ? 'text-primary-500' : ''
    },
    {
      // Code Block
      node: (
        <div className='flex-start gap-1.5'>
          <IoCodeSlashOutline className='size-5' />
          <span>Code Block</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleCodeBlock().run();
        !editor.isActive('codeBlock') ? setTypeNumber(0) : setTypeNumber(6);
      },
      className: editor.isActive('codeBlock') ? 'text-primary-500' : ''
    }
  ];

  return (
    <div className='flex-start px-2'>
      <div className='flex-start gap-2 *:p-1 *:text-1'>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}>
          <FaUndo className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}>
          <FaRedo className='size-4' />
        </button>
      </div>
      <span className='mx-2'>|</span>
      <div className='flex-start gap-2 *:p-1 *:text-1'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'text-primary-500' : ''}>
          <MdFormatBold className='size-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'text-primary-500' : ''}>
          <MdFormatItalic className='size-5' />
        </button>
        <button
          onClick={() => editor.commands.toggleUnderline()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'text-primary-500' : ''}>
          <MdFormatUnderlined className='size-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'text-primary-500' : ''}>
          <MdFormatStrikethrough className='size-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'text-primary-500' : ''}>
          <FaPen className='size-5' />
        </button>
      </div>
      <span className='mx-2'>|</span>
      <div className='flex-start gap-2 *:p-1 *:text-1'>
        <div>
          <div className='flex-start gap-2'>
            {typeText[typeNumber].node}
            <GoChevronDown className='size-4' />
          </div>
          <div data-uk-drop='pos: bottom-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
            <div className='p-2 bg-foreground-1 rounded-lg shadow-lg'>
              {typeText.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close',
                    item.className
                  )}
                  onClick={() => {
                    item.callback();
                  }}>
                  {item.node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className='mx-2'>|</span>
      <div className='flex-start gap-2 *:p-1 *:text-1'>
        {/* Link */}
        <button
          onClick={() => {
            if (editor.isActive('link')) {
              editor.chain().focus().unsetLink().run();
            } else {
              const url = window.prompt('Enter the URL');
              if (url) {
                editor
                  .chain()
                  .focus()
                  .extendMarkRange('link')
                  .toggleLink({ href: url as string })
                  .run();
              }
            }
          }}>
          <MdLink className='size-5' />
        </button>
        {/* Add Youtube */}
        <button
          onClick={() => {
            const url = window.prompt('Enter the Youtube URL');
            if (url) {
              editor
                .chain()
                .focus()
                .setYoutubeVideo({ src: url as string })
                .run();
            }
          }}>
          <FaYoutube className='size-5' />
        </button>
        {/* Add Emoji */}
        <Popover
          open={false}
          mainContent={<IoHappy className='size-5' />}
          hoverContent={
            <Picker
              data={async () => {
                const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                return response.json();
              }}
              onEmojiSelect={(emoji: IEmoji) => {
                editor.chain().focus().insertContent({ type: 'text', text: emoji.native }).run();
              }}
              theme={mode}
            />
          }
        />
      </div>
    </div>
  );
};

interface EditorContentProps {
  setEditor?: (editor: EditorProps) => void;
}

export default function Editor({ setEditor }: EditorContentProps) {
  const t = useTranslations();

  const editor = useCustomEditor({
    editable: true,
    editorProps: {
      attributes: {
        class: 'max-h-[350px] overflow-y-scroll custom-scrollbar-bg'
      }
    }
  });

  useEffect(() => {
    if (editor) {
      if (setEditor) setEditor(editor);

      editor.commands.focus();
    }
  }, []);

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className='my-5 px-2 *:outline-none overflow-hidden' editor={editor} />
    </div>
  );
}
